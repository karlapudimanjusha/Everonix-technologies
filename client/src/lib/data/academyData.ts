export interface Course {
  id: number;
  title: string;
  category: string;
  level: string;
  duration: string;
  students: number;
  rating: number;
  description: string;
  topics: string[];
  price: string;
  instructor: string;
}

export interface Feature {
  iconName: "Users" | "Clock" | "Award" | "CheckCircle";
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    category: "Web Development",
    level: "Intermediate",
    duration: "12 weeks",
    students: 450,
    rating: 4.8,
    description: "Master React, Node.js, and MongoDB to build modern web applications.",
    topics: ["React", "Node.js", "MongoDB", "REST APIs", "Deployment"],
    price: "$499",
    instructor: "Expert Web Developers",
  },
  {
    id: 2,
    title: "Cloud Architecture on AWS",
    category: "Cloud",
    level: "Advanced",
    duration: "10 weeks",
    students: 320,
    rating: 4.9,
    description: "Design and deploy scalable cloud solutions on Amazon Web Services.",
    topics: ["EC2", "S3", "Lambda", "RDS", "CloudFormation"],
    price: "$599",
    instructor: "AWS Certified Architects",
  },
  {
    id: 3,
    title: "Data Science & Machine Learning",
    category: "AI & Data",
    level: "Advanced",
    duration: "14 weeks",
    students: 280,
    rating: 4.7,
    description: "Build predictive models and analyze data using Python and TensorFlow.",
    topics: ["Python", "Pandas", "TensorFlow", "Scikit-learn", "Data Visualization"],
    price: "$699",
    instructor: "ML Engineers & Data Scientists",
  },
  {
    id: 4,
    title: "Cybersecurity Fundamentals",
    category: "Security",
    level: "Beginner",
    duration: "8 weeks",
    students: 380,
    rating: 4.6,
    description: "Learn essential cybersecurity concepts and best practices for enterprise security.",
    topics: ["Network Security", "Encryption", "Firewalls", "Threat Analysis", "Compliance"],
    price: "$399",
    instructor: "Security Experts",
  },
  {
    id: 5,
    title: "Digital Marketing Mastery",
    category: "Marketing",
    level: "Beginner",
    duration: "6 weeks",
    students: 520,
    rating: 4.5,
    description: "Master SEO, SEM, social media, and content marketing strategies.",
    topics: ["SEO", "SEM", "Social Media", "Content Marketing", "Analytics"],
    price: "$299",
    instructor: "Marketing Professionals",
  },
  {
    id: 6,
    title: "DevOps & Kubernetes",
    category: "DevOps",
    level: "Advanced",
    duration: "10 weeks",
    students: 240,
    rating: 4.8,
    description: "Master containerization and orchestration with Docker and Kubernetes.",
    topics: ["Docker", "Kubernetes", "CI/CD", "Infrastructure", "Monitoring"],
    price: "$549",
    instructor: "DevOps Engineers",
  },
];

export const features: Feature[] = [
  {
    iconName: "Users",
    title: "Expert Instructors",
    description: "Learn from industry professionals with 10+ years of experience",
  },
  {
    iconName: "Clock",
    title: "24/7 Support",
    description: "Get help anytime with our dedicated support team",
  },
  {
    iconName: "Award",
    title: "Industry Certifications",
    description: "Earn recognized certifications upon course completion",
  },
  {
    iconName: "CheckCircle",
    title: "Real-World Projects",
    description: "Work on actual projects and build your portfolio",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    role: "Software Engineer",
    company: "TechCorp",
    text: "The Full Stack course transformed my career. I landed a senior role within 3 months of completion!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Data Scientist",
    company: "DataFlow Inc",
    text: "Excellent curriculum and hands-on projects. The instructors were incredibly supportive.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Cloud Architect",
    company: "CloudSys",
    text: "The AWS course gave me the skills to architect enterprise-scale solutions.",
    rating: 4.8,
  },
];
