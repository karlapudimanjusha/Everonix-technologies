import re
from base_validator import BaseValidator, Violation, Severity

class ReactNextValidator(BaseValidator):
    def __init__(self):
        super().__init__(
            name="React and Next.js Best Practices",
            skill_id="skill-vercel-react-best-practices",
            file_patterns=["*.tsx", "*.jsx", "*.ts", "*.js"]
        )

    def audit(self, file_path, content):
        violations = []
        lines = content.splitlines()

        # 1. Barrel imports check: e.g. import { Button } from "@/components"
        # We target relative parent or general "components" barrel imports
        barrel_import_pattern = re.compile(
            r'import\s+\{[^}]+\}\s+from\s+[\'"](?:\.\.|\.\.\/components|\.\/components|components|\@\/components)[\'"]',
            re.IGNORECASE
        )

        # 2. Empty useEffect state synchronization: e.g. useEffect(() => { setX(y) }, [])
        use_effect_sync_pattern = re.compile(
            r'useEffect\(\s*(?:\(\s*\)|async\s*\(\s*\))\s*=>\s*\{[^}]*set[a-zA-Z0-9_]+\([^)]+\)',
            re.MULTILINE
        )
        empty_dep_array_pattern = re.compile(r'\}\s*,\s*\[\s*\]\s*\)')

        # 3. Missing key prop in map loops: e.g. .map((item) => <div className="...">)
        # Note: We look for .map followed by returning an HTML tag that doesn't have key="..."
        map_pattern = re.compile(r'\.map\s*\(\s*(?:\(\s*[^)]+\s*\)|[a-zA-Z0-9_]+)\s*\)\s*=>\s*<([a-zA-Z0-9_]+)\b')

        for line_num, line in enumerate(lines, 1):
            # 1. Barrel Imports
            if barrel_import_pattern.search(line):
                violations.append(Violation(
                    file_path=file_path,
                    line_number=line_num,
                    rule_id="REACT_BARREL_IMPORT",
                    description="Barrel import detected. Importing from folder indices pulls in unused modules, slowing down Next.js compiles and bloating page bundles.",
                    severity=Severity.MEDIUM,
                    suggested_fix="Import components directly from their specific files (e.g. import Button from '@/components/Button' instead of '@/components')."
                ))

            # 2. Effect State Sync
            # Since useEffect can span multiple lines, we check line by line for opening useEffect and state setters
            if "useEffect" in line and "set" in line:
                if use_effect_sync_pattern.search(line) and "[]" in line:
                    # Skip if it is an async fetch call, subscription, promise, or timer
                    if not any(kw in line for kw in ["fetch", "setInterval", "setTimeout", "Promise", "then", "await"]):
                        violations.append(Violation(
                            file_path=file_path,
                            line_number=line_num,
                            rule_id="REACT_USEEFFECT_STATE_SYNC",
                            description="Naked useEffect syncing local state detected. State syncs inside effects trigger double renders.",
                            severity=Severity.MEDIUM,
                            suggested_fix="Calculate values dynamically during render or update states in event handlers instead of an effect."
                        ))

            # 3. Missing key in list render
            if ".map(" in line:
                # Get a small window of 4 lines
                window_end = min(len(lines), line_num + 3)
                window_content = "\n".join(lines[line_num-1:window_end])
                
                # Check if it returns a JSX tag
                # Match tags like <div>, <li className="...">, <Card
                tag_match = re.search(r'=>\s*(?:\(?\s*)<([a-zA-Z0-9_]+)\b', window_content, re.MULTILINE)
                if not tag_match:
                    # Try matching if map has a parenthesis or newline
                    tag_match = re.search(r'\bmap\s*\([^)]+\)\s*=>\s*\(?\s*\n\s*<([a-zA-Z0-9_]+)\b', window_content, re.IGNORECASE)
                
                if tag_match:
                    # check if "key=" is in the tag attributes
                    match_idx = window_content.find("<" + tag_match.group(1))
                    tag_close_idx = window_content.find(">", match_idx)
                    if tag_close_idx != -1:
                        tag_attributes = window_content[match_idx:tag_close_idx]
                        if "key=" not in tag_attributes:
                            tag_name = tag_match.group(1)
                            violations.append(Violation(
                                file_path=file_path,
                                line_number=line_num,
                                rule_id="REACT_MISSING_KEY_PROP",
                                description=f"Rendered list element '<{tag_name}>' is missing a unique 'key' prop. This causes DOM recycling glitches and performance bugs.",
                                severity=Severity.HIGH,
                                suggested_fix=f"Add a unique 'key' attribute to the parent tag: <{tag_name} key={{item.id}}>."
                            ))

        # Check multi-line useEffects if we can
        # (A simple check for useEffect + empty array within 10 lines of each other)
        content_lower = content.lower()
        if "useeffect" in content_lower and "set" in content_lower:
            # Look for instances of useEffect(..., []) containing state sets
            matches = re.finditer(r'useeffect\s*\(\s*\(\s*\)\s*=>\s*\{([^}]+)\}\s*,\s*\[\s*\]\s*\)', content, re.IGNORECASE | re.MULTILINE)
            for m in matches:
                block = m.group(1)
                if "set" in block:
                    # Skip if it is an async fetch call, subscription, promise, or timer
                    if any(kw in block for kw in ["fetch", "setInterval", "setTimeout", "Promise", "then", "await"]):
                        continue
                    # Find approximate line number
                    start_char = m.start()
                    line_num = content[:start_char].count('\n') + 1
                    # Avoid duplicate reporting
                    if not any(v.line_number == line_num and v.rule_id == "REACT_USEEFFECT_STATE_SYNC" for v in violations):
                        violations.append(Violation(
                            file_path=file_path,
                            line_number=line_num,
                            rule_id="REACT_USEEFFECT_STATE_SYNC",
                            description="Multi-line useEffect state synchronization with empty dependency array found.",
                            severity=Severity.MEDIUM,
                            suggested_fix="Sync state during event dispatching or render calculations rather than in a post-render effect."
                        ))

        return violations
