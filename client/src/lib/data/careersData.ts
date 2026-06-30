export interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  skills: string[];
}

export interface CultureValue {
  icon: string;
  title: string;
  description: string;
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "5+ years",
    description: "Build scalable cloud-native applications using React, Node.js, and AWS.",
    skills: ["React", "Node.js", "AWS", "TypeScript"],
  },
  {
    id: 2,
    title: "Cloud Architect",
    department: "Infrastructure",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "7+ years",
    description: "Design and implement secure, scalable cloud solutions for enterprise clients.",
    skills: ["AWS", "Azure", "Kubernetes", "Infrastructure as Code"],
  },
  {
    id: 3,
    title: "Data Scientist",
    department: "AI & Analytics",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    description: "Develop machine learning models and predictive analytics solutions.",
    skills: ["Python", "Machine Learning", "TensorFlow", "Data Analysis"],
  },
  {
    id: 4,
    title: "Cybersecurity Specialist",
    department: "Security",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "6+ years",
    description: "Implement zero-trust security frameworks and threat monitoring systems.",
    skills: ["Security", "Compliance", "Threat Analysis", "Cloud Security"],
  },
  {
    id: 5,
    title: "Technical Training Specialist",
    department: "Operations",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead curriculum development and technical training execution for internal teams and client projects.",
    skills: ["Training", "Technical Writing", "Instructional Design", "Mentoring"],
  },
  {
    id: 6,
    title: "Business Development Executive",
    department: "Sales",
    location: "Multiple Cities",
    type: "Full-time",
    experience: "3+ years",
    description: "Drive business growth by identifying and closing enterprise IT service deals.",
    skills: ["Sales", "Negotiation", "Client Relations", "IT Knowledge"],
  },
];

export const cultureValues: CultureValue[] = [
  {
    icon: "🚀",
    title: "Innovation First",
    description: "We encourage robust engineering principles and reliable solutions to complex problems.",
  },
  {
    icon: "👥",
    title: "Collaborative Culture",
    description: "Work with talented teams that value diverse perspectives and open communication.",
  },
  {
    icon: "📈",
    title: "Growth & Learning",
    description: "Continuous professional development with access to latest technologies and certifications.",
  },
  {
    icon: "⚖️",
    title: "Work-Life Balance",
    description: "Flexible work arrangements and comprehensive benefits for your wellbeing.",
  },
  {
    icon: "🎯",
    title: "Impact-Driven",
    description: "Your work directly contributes to scaling infrastructure and driving system reliability.",
  },
  {
    icon: "🌍",
    title: "Global Perspective",
    description: "Work on international projects and collaborate with global teams.",
  },
];

export const benefits: string[] = [
  "Competitive salary and performance bonuses",
  "Health insurance (medical, dental, vision)",
  "Retirement benefits (401k/EPF)",
  "Professional development budget",
  "Flexible work hours and remote options",
  "Paid time off (25+ days annually)",
  "Career advancement opportunities",
  "Stock options (for senior roles)",
];
