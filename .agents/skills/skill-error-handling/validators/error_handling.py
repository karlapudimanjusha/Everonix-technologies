import re
from base_validator import BaseValidator, Violation, Severity

class ErrorHandlingValidator(BaseValidator):
    def __init__(self):
        super().__init__(
            name="Error Handling Patterns",
            skill_id="skill-error-handling",
            file_patterns=["*.js", "*.jsx", "*.ts", "*.tsx"]
        )

    def audit(self, file_path, content):
        violations = []
        lines = content.splitlines()

        # 1. Empty catch block regex: e.g. catch (err) { }
        # Matches catch (any_var) { any_whitespace }
        empty_catch_pattern = re.compile(r'catch\s*\(\s*[a-zA-Z0-9_]*\s*\)\s*\{\s*\}')

        # 2. Naked fetch audit: e.g. fetch("url").then(...) without try/catch or .catch()
        # We search line-by-line for fetch() calls and analyze surrounding context.
        fetch_pattern = re.compile(r'\bfetch\s*\(')

        for line_num, line in enumerate(lines, 1):
            # Empty catch checks
            if "catch" in line and "{" in line:
                # Basic check for single-line empty catch
                if empty_catch_pattern.search(line):
                    violations.append(Violation(
                        file_path=file_path,
                        line_number=line_num,
                        rule_id="ERR_EMPTY_CATCH",
                        description="Empty catch block detected. Silently swallowing exceptions masks critical runtime bugs and blocks diagnostics.",
                        severity=Severity.HIGH,
                        suggested_fix="Log the error using console.error(err) or trigger a graceful UI error boundary/toast alert."
                    ))

            # Naked fetch checks
            if fetch_pattern.search(line):
                # Analyze a window of 8 lines around the fetch call
                window_start = max(0, line_num - 15)
                window_end = min(len(lines), line_num + 15)
                context_block = "\n".join(lines[window_start:window_end])
                
                # Check if context contains standard catch keywords
                has_try_catch = "try" in context_block or "catch" in context_block or ".catch" in context_block
                
                if not has_try_catch:
                    violations.append(Violation(
                        file_path=file_path,
                        line_number=line_num,
                        rule_id="ERR_NAKED_FETCH",
                        description="Naked 'fetch()' call detected. Network requests must be wrapped in try/catch blocks or use '.catch()' to prevent unhandled promise rejections.",
                        severity=Severity.HIGH,
                        suggested_fix="Wrap the fetch call in a try/catch block, or append '.catch(err => ...)' to the promise chain."
                    ))

        # Check for multi-line empty catch blocks: catch(e) { \n \n }
        # Look for catch(...) { with only comments or whitespace inside
        content_clean = re.sub(r'//.*', '', content)  # Strip single-line comments
        content_clean = re.sub(r'/\*.*?\*/', '', content_clean, flags=re.DOTALL)  # Strip block comments
        
        multi_line_catch = re.finditer(r'catch\s*\(\s*[a-zA-Z0-9_]*\s*\)\s*\{\s*\}', content_clean)
        last_index = 0
        for m in multi_line_catch:
            match_str = m.group(0)
            orig_idx = content.find(match_str, last_index)
            if orig_idx != -1:
                line_num = content[:orig_idx].count('\n') + 1
                last_index = orig_idx + len(match_str)
            else:
                start_char = m.start()
                line_num = content[:start_char].count('\n') + 1
            # Check if we already logged this line to avoid duplicate warnings
            if not any(v.line_number == line_num and v.rule_id == "ERR_EMPTY_CATCH" for v in violations):
                violations.append(Violation(
                    file_path=file_path,
                    line_number=line_num,
                    rule_id="ERR_EMPTY_CATCH",
                    description="Empty catch block found.",
                    severity=Severity.HIGH,
                    suggested_fix="Ensure the error is logged or handled gracefully: catch(err) { console.error(err); }"
                ))

        return violations
