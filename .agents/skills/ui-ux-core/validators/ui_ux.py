import re
from base_validator import BaseValidator, Violation, Severity

class UIUXValidator(BaseValidator):
    def __init__(self):
        super().__init__(
            name="UI/UX Core Principles",
            skill_id="skill-ui-ux-pro-max",
            file_patterns=["*.css", "*.scss", "*.tsx", "*.jsx", "*.html", "*.htm"]
        )

    def audit(self, file_path, content):
        violations = []
        lines = content.splitlines()

        # 1. Check for default system fonts
        font_default_pattern = re.compile(
            r'font-family\s*:\s*(?:var\([^)]+\)|[\'"]?(?:Arial|Times New Roman|Courier New|Courier|Georgia|sans-serif|serif|monospace)[\'"]?\s*(?:,|$))',
            re.IGNORECASE
        )
        
        # 2. Check for raw/pure CSS string colors or basic bright hex codes
        raw_colors_hex = re.compile(r'#([fF]{6}|000000|[fF]{2}0000|00[fF]{2}00|0000[fF]{2}|[fF]{2}[fF]{2}00)\b')
        raw_colors_str = re.compile(r'\b(color|background|border)(-color)?\s*:\s*\b(red|blue|green|yellow|cyan|magenta|lime)\b', re.IGNORECASE)

        # 3. Check touch targets: min-width/height < 44px
        small_target_pattern = re.compile(r'(min-width|min-height)\s*:\s*(\d+)px', re.IGNORECASE)

        for line_num, line in enumerate(lines, 1):
            # 1. Font Audit
            if "font-family" in line:
                # If they just declare font-family: sans-serif or font-family: Arial without fallback/theme variables
                if font_default_pattern.search(line) and "var(" not in line.lower():
                    violations.append(Violation(
                        file_path=file_path,
                        line_number=line_num,
                        rule_id="UI_UX_DEFAULT_FONT",
                        description="Generic browser default font stack detected. Use a curated modern font (e.g. Inter, Outfit) or theme design tokens.",
                        severity=Severity.MEDIUM,
                        suggested_fix="Define font-family using tailored custom font variables or design tokens (e.g. var(--font-primary))."
                    ))

            # 2. Color Audit
            if any(prop in line.lower() for prop in ["color", "background", "border", "fill", "stroke"]):
                # Check hex colors first
                hex_match = raw_colors_hex.search(line)
                if hex_match:
                    color_found = hex_match.group(0)
                    # Exclude pure black and white as they are allowed as layout neutrals
                    if color_found.lower() not in ["#ffffff", "#000000"]:
                        violations.append(Violation(
                            file_path=file_path,
                            line_number=line_num,
                            rule_id="UI_UX_RAW_COLOR_HEX",
                            description=f"Raw primary hex color '{color_found}' detected. Use HSL values or curated color palettes.",
                            severity=Severity.MEDIUM,
                            suggested_fix="Define dynamic HSL colors or cohesive color system variables (e.g., var(--primary-accent))."
                        ))
                # Check string colors
                str_match = raw_colors_str.search(line)
                if str_match:
                    color_found = str_match.group(3)
                    violations.append(Violation(
                        file_path=file_path,
                        line_number=line_num,
                        rule_id="UI_UX_RAW_COLOR_STR",
                        description=f"Naked string color '{color_found}' detected. Use curated color variables to maintain design taste.",
                        severity=Severity.MEDIUM,
                        suggested_fix="Replace with variable declarations like color: var(--color-danger) or a hex code matching your palette."
                    ))

            # 3. Touch Target Audit
            target_match = small_target_pattern.search(line)
            if target_match:
                dimension = target_match.group(1)
                size = int(target_match.group(2))
                if size < 44:
                    violations.append(Violation(
                        file_path=file_path,
                        line_number=line_num,
                        rule_id="UI_UX_SMALL_TOUCH_TARGET",
                        description=f"Small interactive target dimension ({dimension}: {size}px) is less than 44px. This violates mobile and WCAG guidelines.",
                        severity=Severity.LOW,
                        suggested_fix=f"Increase the dimension to at least 44px, or add padding/hitslop targeting interactive controls."
                    ))

        # 4. Viewport check (only for HTML files)
        if file_path.suffix in [".html", ".htm"]:
            if "<html" in content and "<meta" in content:
                viewport_pattern = re.compile(r'<meta[^>]+name=["\']viewport["\']', re.IGNORECASE)
                if not viewport_pattern.search(content):
                    violations.append(Violation(
                        file_path=file_path,
                        line_number=1,
                        rule_id="UI_UX_MISSING_VIEWPORT",
                        description="Responsive layout meta-tag is missing. Page will not render correctly on mobile browsers.",
                        severity=Severity.MEDIUM,
                        suggested_fix="Add '<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">' to the '<head>' section."
                    ))

        return violations
