import re
from base_validator import BaseValidator, Violation, Severity

class SEOValidator(BaseValidator):
    def __init__(self):
        super().__init__(
            name="SEO Fundamentals",
            skill_id="skill-seo-fundamentals",
            file_patterns=["*.html", "*.htm", "*.tsx", "*.jsx"]
        )

    def audit(self, file_path, content):
        violations = []
        lines = content.splitlines()

        # 1. Image alt attribute check
        # We look for img tags (both HTML and TSX formats) that do not contain an "alt" prop.
        # Regex explanation: Match <img, verify it doesn't have an "alt" attribute before closing.
        img_no_alt = re.compile(r'<img\s+(?![^>]*\balt\b)[^>]*>', re.IGNORECASE)

        # 2. Count H1 elements in the entire file
        # We look for <h1>, <h1 >, or <h1> elements
        h1_tags = re.findall(r'<h1\b[^>]*>', content, re.IGNORECASE)
        h1_jsx_tags = re.findall(r'<H1\b[^>]*>', content)  # Capital H1 in styled components or custom elements

        total_h1 = len(h1_tags) + len(h1_jsx_tags)

        # 3. Empty heading tags
        empty_headings = re.compile(r'<h[1-6]\b[^>]*>\s*</h[1-6]>', re.IGNORECASE)

        for line_num, line in enumerate(lines, 1):
            # Alt tag check
            if "<img" in line.lower():
                # Make sure it's a real tag, not a comment or import
                if not line.strip().startswith("//") and not line.strip().startswith("/*"):
                    if img_no_alt.search(line):
                        violations.append(Violation(
                            file_path=file_path,
                            line_number=line_num,
                            rule_id="SEO_MISSING_ALT",
                            description="Image element <img> is missing a descriptive 'alt' attribute. This hurts SEO indexability and screen-reader accessibility.",
                            severity=Severity.LOW,
                            suggested_fix="Add 'alt=\"image description\"' or alt={variable} to the image tag."
                        ))

            # Empty headings check
            if empty_headings.search(line):
                violations.append(Violation(
                    file_path=file_path,
                    line_number=line_num,
                    rule_id="SEO_EMPTY_HEADING",
                    description="Empty heading element detected. Headings without text confuse crawler algorithms.",
                    severity=Severity.LOW,
                    suggested_fix="Add descriptive heading text inside the element or remove it entirely if it's unused."
                ))

        # Check for multiple H1 tags in the whole file
        if total_h1 > 1:
            violations.append(Violation(
                file_path=file_path,
                line_number=1,
                rule_id="SEO_MULTIPLE_H1",
                description=f"Multiple ({total_h1}) <h1> heading tags detected. A page must contain exactly one primary <h1> tag to establish correct semantic hierarchy.",
                severity=Severity.HIGH,
                suggested_fix="Downgrade secondary <h1> headers to <h2> or <h3> tags."
            ))

        # Check for metadata in Page layout (Next.js config or HTML header)
        if file_path.suffix in [".html", ".htm"]:
            if "<head>" in content.lower():
                # Check for meta description
                meta_desc_pattern = re.compile(r'<meta[^>]+name=["\']description["\']', re.IGNORECASE)
                title_pattern = re.compile(r'<title>[^<]+</title>', re.IGNORECASE)
                
                if not meta_desc_pattern.search(content):
                    violations.append(Violation(
                        file_path=file_path,
                        line_number=1,
                        rule_id="SEO_MISSING_DESCRIPTION",
                        description="Meta-description tag is missing in the HTML header. This results in empty/default snippets in search engine results pages.",
                        severity=Severity.MEDIUM,
                        suggested_fix="Add '<meta name=\"description\" content=\"Brief page summary here (150-160 chars).\">' inside the <head>."
                    ))
                if not title_pattern.search(content):
                    violations.append(Violation(
                        file_path=file_path,
                        line_number=1,
                        rule_id="SEO_MISSING_TITLE",
                        description="Page <title> tag is missing or empty. Crawlers use titles for main index mapping.",
                        severity=Severity.MEDIUM,
                        suggested_fix="Add a unique '<title>Page Name | Site Brand</title>' element in the header."
                    ))

        return violations
