import re
from base_validator import BaseValidator, Violation, Severity

class SecurityValidator(BaseValidator):
    def __init__(self):
        super().__init__(
            name="Security Auditor",
            skill_id="skill-security-auditor",
            file_patterns=["*.js", "*.jsx", "*.ts", "*.tsx", "*.sql"]
        )

    def audit(self, file_path, content):
        violations = []
        lines = content.splitlines()

        # 1. XSS Audit: check for dangerouslySetInnerHTML
        xss_pattern = re.compile(r'dangerouslySetInnerHTML\b', re.IGNORECASE)

        # 2. Database RLS Audit (only for SQL migration files)
        # We search for any CREATE TABLE table_name and make sure there is a statement enabling RLS on it.
        create_table_pattern = re.compile(r'CREATE\s+TABLE\s+(?:IF\s+NOT\s+EXISTS\s+)?([a-zA-Z0-9_."\'`]+)', re.IGNORECASE)
        rls_pattern_template = r'ALTER\s+TABLE\s+{table}\s+ENABLE\s+ROW\s+LEVEL\s+SECURITY'

        # Collect created tables in this SQL file
        created_tables = []
        
        for line_num, line in enumerate(lines, 1):
            # 1. XSS Check
            if xss_pattern.search(line):
                violations.append(Violation(
                    file_path=file_path,
                    line_number=line_num,
                    rule_id="SEC_DANGEROUS_HTML",
                    description="Usage of 'dangerouslySetInnerHTML' detected. Raw HTML insertion is vulnerable to Cross-Site Scripting (XSS) attacks.",
                    severity=Severity.HIGH,
                    suggested_fix="Sanitize the HTML string using a library like 'dompurify' or 'safe-html' before rendering, or refactor to use standard text nodes."
                ))

            # 2. Extract tables for SQL checks
            if file_path.suffix == ".sql":
                table_match = create_table_pattern.search(line)
                if table_match:
                    table_name = table_match.group(1).strip('"\'`')
                    # Remove schema prefix if present (e.g. public.users -> users)
                    if "." in table_name:
                        table_name = table_name.split(".")[-1].strip('"\'`')
                    created_tables.append((line_num, table_name))

        # Check if RLS is enabled for all created tables
        if file_path.suffix == ".sql" and created_tables:
            content_upper = content.upper()
            for line_num, table in created_tables:
                # Create a regex to match enabling RLS for this specific table (case-insensitive)
                # Matches: ALTER TABLE <table_name> ENABLE ROW LEVEL SECURITY;
                # Also matches if table is quoted or schema-prefixed in alter statement
                table_escaped = re.escape(table)
                rls_check = re.compile(
                    rf'ALTER\s+TABLE\s+(?:"?public"?\.)?"?{table_escaped}"?\s+ENABLE\s+ROW\s+LEVEL\s+SECURITY',
                    re.IGNORECASE
                )
                
                if not rls_check.search(content):
                    violations.append(Violation(
                        file_path=file_path,
                        line_number=line_num,
                        rule_id="SEC_MISSING_RLS",
                        description=f"Table '{table}' was created but Row Level Security (RLS) is not enabled. Without RLS, Supabase tables are exposed to unauthorized public access.",
                        severity=Severity.HIGH,
                        suggested_fix=f"Add 'ALTER TABLE {table} ENABLE ROW LEVEL SECURITY;' to enable policy checks on this table."
                    ))

        return violations
