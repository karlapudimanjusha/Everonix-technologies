export interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export interface Category {
  name: string;
  count: number;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "The Future of AI in Enterprise Transformation",
    excerpt: "Explore how generative AI is revolutionizing business processes and creating new opportunities for enterprise transformation.",
    category: "AI & Innovation",
    author: "Dr. Rajesh Kumar",
    date: "June 28, 2026",
    readTime: "8 min read",
    image: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    featured: true,
  },
  {
    id: 2,
    title: "Cloud Migration: Best Practices for 2026",
    excerpt: "A comprehensive guide to planning and executing successful cloud migrations with minimal downtime and maximum efficiency.",
    category: "Cloud",
    author: "Sarah Chen",
    date: "June 25, 2026",
    readTime: "10 min read",
    image: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    featured: true,
  },
  {
    id: 3,
    title: "Cybersecurity Trends: Zero Trust Architecture",
    excerpt: "Understanding zero-trust security models and how they're reshaping enterprise security strategies in 2026.",
    category: "Security",
    author: "Michael Rodriguez",
    date: "June 22, 2026",
    readTime: "7 min read",
    image: "bg-gradient-to-br from-red-500/20 to-orange-500/20",
    featured: true,
  },
  {
    id: 4,
    title: "Building High-Performance Teams in Tech",
    excerpt: "Insights on talent management, team dynamics, and creating a culture of innovation in technology organizations.",
    category: "Talent & Culture",
    author: "Priya Sharma",
    date: "June 20, 2026",
    readTime: "6 min read",
    image: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
  },
  {
    id: 5,
    title: "DevOps Revolution: From CI/CD to Continuous Everything",
    excerpt: "How modern DevOps practices are enabling faster deployment cycles and continuous delivery of value.",
    category: "DevOps",
    author: "James Wilson",
    date: "June 18, 2026",
    readTime: "9 min read",
    image: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
  },
  {
    id: 6,
    title: "Data-Driven Decision Making in Digital Transformation",
    excerpt: "Leveraging data analytics and business intelligence to drive informed decisions during digital transformation initiatives.",
    category: "Analytics",
    author: "Lisa Anderson",
    date: "June 15, 2026",
    readTime: "8 min read",
    image: "bg-gradient-to-br from-yellow-500/20 to-orange-500/20",
  },
  {
    id: 7,
    title: "Microservices Architecture: Scaling for Success",
    excerpt: "Best practices for designing and implementing microservices architectures that scale with your business needs.",
    category: "Architecture",
    author: "David Park",
    date: "June 12, 2026",
    readTime: "11 min read",
    image: "bg-gradient-to-br from-teal-500/20 to-cyan-500/20",
  },
  {
    id: 8,
    title: "The Skills Gap: Bridging the Talent Shortage in Tech",
    excerpt: "Analyzing the current tech talent shortage and strategies for upskilling the workforce to meet industry demands.",
    category: "Talent & Culture",
    author: "Emma Thompson",
    date: "June 10, 2026",
    readTime: "7 min read",
    image: "bg-gradient-to-br from-pink-500/20 to-rose-500/20",
  },
];

export const categories: Category[] = [
  { name: "All", count: 24 },
  { name: "AI & Innovation", count: 5 },
  { name: "Cloud", count: 6 },
  { name: "Security", count: 4 },
  { name: "DevOps", count: 3 },
  { name: "Talent & Culture", count: 3 },
];
