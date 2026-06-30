import { LucideIcon, Users, Code, Zap, BookOpen, Search, ShieldCheck, Briefcase, Award } from 'lucide-react';

export interface HiringModel {
  title: string;
  description: string;
}

export interface RoleCategory {
  title: string;
  roles: string[];
}

export interface ServiceData {
  name: string;
  slug: string;
  category: 'IT Staffing' | 'Non-IT Staffing' | 'Talent Solutions' | 'Value-Added';
  description: string;
  longDescription: string;
  iconName: 'Users' | 'Code' | 'Zap' | 'BookOpen' | 'Search' | 'ShieldCheck' | 'Briefcase' | 'Award';
  hiringModels: HiringModel[];
  categories: RoleCategory[];
}

export interface IndustryData {
  name: string;
  slug: string;
  description: string;
  iconName: 'Code' | 'Users' | 'BookOpen' | 'Briefcase' | 'ShieldCheck';
  typicalRoles: string[];
  bullets: string[];
}

export interface ValueAddedService {
  name: string;
  description: string;
  iconName: 'ShieldCheck' | 'Briefcase' | 'Award';
}

export const servicesData: ServiceData[] = [
  {
    name: 'IT Staffing',
    slug: 'it-staffing',
    category: 'IT Staffing',
    description: 'Deploy vetted software engineers, Cloud architects, and DevOps specialists with a 99.4% SLA adherence.',
    longDescription: 'Our IT Staffing solutions connect you with pre-vetted, high-caliber technology professionals. We evaluate candidates on both technical capabilities (live system design, coding) and cultural fit, selecting only the top 4.2% of profiles to ensure immediate alignment and a 99.4% SLA adherence rate.',
    iconName: 'Code',
    hiringModels: [
      { title: 'Contract Staffing', description: 'Scale your team quickly for short-term projects or peak periods without long-term overhead.' },
      { title: 'Permanent Placement', description: 'Acquire dedicated, long-term talent aligned with your corporate culture and engineering standard.' },
      { title: 'Contract-to-Hire', description: 'Evaluate a candidate on-the-job before making a permanent hiring decision, reducing risk.' },
      { title: 'Offshore & Remote', description: 'Access global talent pools with flexible, cost-optimized remote or offshore working setups.' }
    ],
    categories: [
      {
        title: 'Software Development',
        roles: ['Frontend Engineer', 'Backend Developer', 'Full Stack Engineer', 'Mobile App Developer (iOS/Android)', 'QA Automation Engineer']
      },
      {
        title: 'Cloud & DevOps',
        roles: ['Cloud Architect (AWS/Azure/GCP)', 'DevOps Engineer', 'Site Reliability Engineer (SRE)', 'Platform Engineer']
      },
      {
        title: 'Data & AI',
        roles: ['Data Engineer', 'Data Analyst', 'Data Scientist', 'Machine Learning Engineer', 'AI Specialist']
      },
      {
        title: 'Enterprise Applications',
        roles: ['SAP Consultant', 'Oracle Specialist', 'Salesforce Developer', 'ServiceNow Administrator', 'Workday Consultant']
      },
      {
        title: 'Automation & Robotics',
        roles: ['PLC Programmer', 'SCADA Engineer', 'Industrial Automation Specialist', 'IoT Solutions Architect', 'Embedded Systems Engineer']
      },
      {
        title: 'Infrastructure & Support',
        roles: ['Network Administrator', 'Systems Administrator', 'Database Administrator (DBA)', 'IT Help Desk Support', 'Cybersecurity Analyst']
      }
    ]
  },
  {
    name: 'Non-IT Staffing',
    slug: 'non-it-staffing',
    category: 'Non-IT Staffing',
    description: 'Deploy industrial, healthcare, and corporate professionals with a 98.6% compliance rate.',
    longDescription: 'We provide comprehensive recruitment services for non-technology sectors. From highly skilled financial analysts to reliable factory floor operations, we ensure you have the talent to keep operations running smoothly with a 98.6% compliance and retention rate.',
    iconName: 'Users',
    hiringModels: [
      { title: 'Temporary Staffing', description: 'Manage seasonal spikes, leaves, or operational surges with flexible temporary workers.' },
      { title: 'Direct Hire', description: 'Source and hire permanent operational professionals directly into your workforce.' },
      { title: 'High-Volume Hiring', description: 'Quickly onboard large operational cohorts for new sites, warehouses, or assembly lines.' }
    ],
    categories: [
      {
        title: 'Manufacturing & Engineering',
        roles: ['Mechanical Engineer', 'Electrical Technician', 'Civil Site Engineer', 'Production Supervisor', 'Quality Assurance Inspector', 'CNC Operator', 'Welder/Fitter']
      },
      {
        title: 'Healthcare & Life Sciences',
        roles: ['Registered Nurse (RN)', 'Medical Assistant', 'Laboratory Technician', 'Pharmacist', 'Medical Coder', 'Clinical Researcher']
      },
      {
        title: 'Logistics & Supply Chain',
        roles: ['Warehouse Coordinator', 'Inventory Specialist', 'Supply Chain Analyst', 'Procurement Specialist', 'Delivery Logistics Coordinator']
      },
      {
        title: 'Finance & Accounting',
        roles: ['Accountant', 'Financial Analyst', 'Payroll Specialist', 'Auditor', 'Tax Consultant']
      },
      {
        title: 'HR & Administration',
        roles: ['HR Specialist', 'Recruiting Coordinator', 'Executive Assistant', 'Office Administrator', 'Receptionist', 'Data Entry Operator']
      },
      {
        title: 'Sales & Marketing',
        roles: ['Sales Executive', 'Marketing Coordinator', 'SEO/Digital Marketer', 'Brand Representative']
      }
    ]
  },
  {
    name: 'Contract Staffing',
    slug: 'contract-staffing',
    category: 'Talent Solutions',
    description: 'Scale your engineering velocity on-demand with contractors placed in under 48 hours.',
    longDescription: 'Flexible workforce configurations designed for speed. We deploy qualified contractors in under 48 hours, managing sourcing, contracting, and compliance so you can focus on executing project deliverables.',
    iconName: 'Briefcase',
    hiringModels: [
      { title: 'Staff Augmentation', description: 'Integrate external professionals directly under your existing team structure.' },
      { title: 'Project-Based', description: 'Onboard discrete project teams to take complete ownership of specific deliverables.' }
    ],
    categories: [
      {
        title: 'Available Contract Roles',
        roles: ['Contract IT Engineers', 'Interim Managers', 'Project Coordinators', 'Freelance Consultants', 'Seasonal Production Workers']
      }
    ]
  },
  {
    name: 'Permanent Placement',
    slug: 'permanent-placement',
    category: 'Talent Solutions',
    description: 'Direct-hire recruitment solutions boasting a 94.6% 1-year candidate retention rate.',
    longDescription: 'We handle the complete hiring cycle—from deep profiling and rigorous screening to offer negotiation and initial onboarding support—to find professionals who stay and grow with you, boasting a 94.6% 1-year retention rate.',
    iconName: 'Award',
    hiringModels: [
      { title: 'Contingent Search', description: 'Pay only upon successful placement of the selected candidate.' },
      { title: 'Retained Recruitment', description: 'Dedicated, exclusive search pipeline for critical or highly specialized positions.' }
    ],
    categories: [
      {
        title: 'Permanent Focus Areas',
        roles: ['Core Technical Leaders', 'Finance & HR Heads', 'Operations Managers', 'Compliance Officers', 'Sales Directors']
      }
    ]
  },
  {
    name: 'Executive Search',
    slug: 'executive-search',
    category: 'Talent Solutions',
    description: 'Sourcing C-Suite, VP, and Director level leaders with a 98.2% leadership success rate.',
    longDescription: 'Specialized executive headhunting focused on identifying leaders capable of driving organizational strategy, culture transformation, and business growth, backed by a 98.2% leadership retention rate.',
    iconName: 'Search',
    hiringModels: [
      { title: 'C-Suite & Board', description: 'Discreet, highly strategic sourcing for CEOs, CTOs, CFOs, and Board Directors.' },
      { title: 'VPs & Directors', description: 'Targeted recruitment for departmental leaders and regional directors.' }
    ],
    categories: [
      {
        title: 'Executive Placements',
        roles: ['Chief Technology Officer (CTO)', 'Chief Financial Officer (CFO)', 'VP of Engineering', 'Director of Operations', 'HR Director']
      }
    ]
  },
  {
    name: 'RPO (Recruitment Process Outsourcing)',
    slug: 'rpo',
    category: 'Talent Solutions',
    description: 'End-to-end outsourced talent acquisition lowering cost-per-hire by up to 34.2%.',
    longDescription: 'We assume operational responsibility for your entire talent acquisition cycle—from employer branding and candidate sourcing to onboarding—delivering scalable efficiency and lowering cost-per-hire by up to 34.2%.',
    iconName: 'Zap',
    hiringModels: [
      { title: 'Enterprise RPO', description: 'Complete outsourcing of all hiring functions across all departments and locations.' },
      { title: 'Project RPO', description: 'Outsourced staffing operations dedicated to a specific division, launch, or timeframe.' }
    ],
    categories: [
      {
        title: 'RPO Solutions',
        roles: ['Dedicated Talent Acquisition Teams', 'Recruitment Tech Stack Integration', 'Candidate Experience Optimization', 'Hiring Analytics & Reporting']
      }
    ]
  },
  {
    name: 'MSP (Managed Service Provider)',
    slug: 'msp',
    category: 'Talent Solutions',
    description: 'Consolidated contingent workforce management reducing compliance risks to 0%.',
    longDescription: 'We manage your external vendors, contractors, and agency partners through unified compliance checking, performance management, and consolidated billing, reducing co-employment legal risks to 0.0%.',
    iconName: 'ShieldCheck',
    hiringModels: [
      { title: 'Vendor Management', description: 'Manage vendor selection, rate negotiation, SLA compliance, and contract standards.' },
      { title: 'Compliance Audits', description: 'Ongoing audits of contractor statuses, tax rules, and local legal compliance.' }
    ],
    categories: [
      {
        title: 'MSP Management Areas',
        roles: ['Contingent Workforce Tracking', 'VMS Technology Administration', 'Co-employment Risk Mitigation', 'Rate Card Benchmarking']
      }
    ]
  },
  {
    name: 'Payroll & Compliance',
    slug: 'payroll-compliance',
    category: 'Talent Solutions',
    description: 'Automated payroll and employment compliance auditing protecting against audit exposure.',
    longDescription: 'Outsource your payroll operations, tax filings, contract compliance, and employee benefits management, ensuring 100% compliance with local employment laws and zero audit exposure.',
    iconName: 'ShieldCheck',
    hiringModels: [
      { title: 'Global Payroll', description: 'Coordinate payroll across multiple states or international borders compliantly.' },
      { title: 'Employer of Record (EOR)', description: 'Legally employ workers on your behalf in regions where you do not have an entity.' }
    ],
    categories: [
      {
        title: 'Payroll Solutions',
        roles: ['Tax Filing & Withholdings', 'Employee Benefits Administration', 'Contractor Classification Auditing', 'Local Labor Law Alignment']
      }
    ]
  },
  {
    name: 'HR Consulting',
    slug: 'hr-consulting',
    category: 'Talent Solutions',
    description: 'Strategic advisory services to optimize workforce design, onboarding, and engagement.',
    longDescription: 'Expert consulting to help you restructure HR policies, establish competitive compensation structures, plan talent pipelines, and drive employee engagement.',
    iconName: 'BookOpen',
    hiringModels: [
      { title: 'HR Audits', description: 'Evaluate current HR structures and policy alignments against industry benchmarks.' },
      { title: 'Workforce Planning', description: 'Design long-term organizational structures matching business growth projections.' }
    ],
    categories: [
      {
        title: 'HR Consulting Areas',
        roles: ['Compensation & Benefits Benchmarking', 'Performance Management Systems', 'Onboarding Workflows', 'Employee Retention Strategies']
      }
    ]
  }
];

export const industriesData: IndustryData[] = [
  {
    name: 'Technology',
    slug: 'technology',
    description: 'Supplying software engineering, cloud, cybersecurity, and data talent to leading product companies and SaaS teams.',
    iconName: 'Code',
    typicalRoles: ['Frontend/Backend/Full Stack Developers', 'DevOps & SRE Architects', 'Data Scientists & ML Engineers', 'Product Managers'],
    bullets: [
      'Live-coding, system design, and security screening protocols',
      'SLA adherence guaranteeing matches in under 48 hours',
      'Engineers trained in secure coding (OWASP) & SOC-2 compliance',
      'Expertise in high-throughput cloud architectures & analytics'
    ]
  },
  {
    name: 'Healthcare & Life Sciences',
    slug: 'healthcare',
    description: 'Vetted clinical professionals, laboratory personnel, medical coders, and pharma researchers.',
    iconName: 'Users',
    typicalRoles: ['Registered Nurses (RN)', 'Clinical Research Associates', 'Medical Coders & Billers', 'Lab Technicians'],
    bullets: [
      'Primary source verification of licenses and certifications',
      'Strict compliance with HIPAA, OSHA, and Joint Commission standards',
      'Vetted nurses, lab technicians, and clinical researchers',
      '24/7 on-call coordinator support for scheduling shifts'
    ]
  },
  {
    name: 'Manufacturing & Automotive',
    slug: 'manufacturing',
    description: 'Providing plant managers, industrial designers, maintenance specialists, and assembly supervisors.',
    iconName: 'Briefcase',
    typicalRoles: ['Mechanical & Electrical Engineers', 'Quality Assurance Technicians', 'PLC/SCADA Programmers', 'Production Supervisors'],
    bullets: [
      'Strict safety background checks and certification validation',
      'Familiarity with ISO-9001 and IATF-16949 quality regulations',
      'Certified PLC programmers, heavy machine technicians, and inspectors',
      'High-volume staging for warehouse and assembly floor launches'
    ]
  },
  {
    name: 'BFSI (Banking, Financial Services & Insurance)',
    slug: 'bfsi',
    description: 'Certified financial analysts, corporate accountants, risk managers, and operations specialists.',
    iconName: 'ShieldCheck',
    typicalRoles: ['Risk & Compliance Managers', 'Chartered Accountants', 'Financial Analysts', 'Payroll & Audit Officers'],
    bullets: [
      'Mandatory credit checks and comprehensive background verification',
      'Certified specialists in FINRA, SEC, and SOX regulatory frameworks',
      'Qualified CPAs, risk analysts, and internal auditors',
      'Staffing solutions tailored for strict data privacy policies'
    ]
  },
  {
    name: 'Retail & E-commerce',
    slug: 'retail',
    description: 'Supply chain experts, logistics staff, retail managers, and customer success cohorts.',
    iconName: 'Users',
    typicalRoles: ['Warehouse Coordinators', 'Store Operations Managers', 'Inventory Controllers', 'Digital Marketing Leads'],
    bullets: [
      'High-volume seasonal staffing and workforce scaling support',
      'Warehouse inventory control and ERP integration expertise',
      'Trained retail managers and customer support cohorts',
      '24/7 logistics shift planning and execution support'
    ]
  },
  {
    name: 'Logistics & Transportation',
    slug: 'logistics',
    description: 'Procurement managers, fleet coordinators, and warehouse operations supervisors.',
    iconName: 'Briefcase',
    typicalRoles: ['Supply Chain Analysts', 'Fleet Supervisors', 'Procurement Officers', 'Logistics Coordinators'],
    bullets: [
      'Strict verification of commercial licenses and driving records',
      'Compliance with DOT safety standards and OSHA guidelines',
      'Warehouse inventory controllers, fleet supervisors, and operators',
      'Consolidated RPO/MSP configurations for supply chains'
    ]
  }
];

export const valueAddedServices: ValueAddedService[] = [
  { name: 'Background Verification', description: 'Comprehensive criminal, education, reference, and past employment screening.', iconName: 'ShieldCheck' },
  { name: 'Visa & Immigration Support', description: 'Legal sponsorship advisory, documentation, and processing support.', iconName: 'Briefcase' },
  { name: 'Skill Assessment Staging', description: 'Pre-hiring coding, aptitude, and verbal tests mapped to roles.', iconName: 'Award' },
  { name: 'Onboarding Integration', description: 'Customized digital onboarding support to accelerate time-to-productivity.', iconName: 'Users' as any }
];

export const getIconComponent = (name: string): LucideIcon => {
  const map: Record<string, LucideIcon> = {
    Users,
    Code,
    Zap,
    BookOpen,
    Search,
    ShieldCheck,
    Briefcase,
    Award
  };
  return map[name] || Briefcase;
};
