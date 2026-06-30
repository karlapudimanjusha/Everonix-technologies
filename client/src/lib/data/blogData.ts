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
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=600&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "DevOps Revolution: From CI/CD to Continuous Everything",
    excerpt: "How modern DevOps practices are enabling faster deployment cycles and continuous delivery of value.",
    category: "DevOps",
    author: "James Wilson",
    date: "June 18, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1618401471353-b98aedd07871?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Data-Driven Decision Making in Digital Transformation",
    excerpt: "Leveraging data analytics and business intelligence to drive informed decisions during digital transformation initiatives.",
    category: "Analytics",
    author: "Lisa Anderson",
    date: "June 15, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Microservices Architecture: Scaling for Success",
    excerpt: "Best practices for designing and implementing microservices architectures that scale with your business needs.",
    category: "Architecture",
    author: "David Park",
    date: "June 12, 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "The Skills Gap: Bridging the Talent Shortage in Tech",
    excerpt: "Analyzing the current tech talent shortage and strategies for upskilling the workforce to meet industry demands.",
    category: "Talent & Culture",
    author: "Emma Thompson",
    date: "June 10, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
  },
];

export const categories: Category[] = [
  { name: "All", count: 8 },
  { name: "AI & Innovation", count: 1 },
  { name: "Cloud", count: 1 },
  { name: "Security", count: 1 },
  { name: "DevOps", count: 1 },
  { name: "Talent & Culture", count: 2 },
  { name: "Analytics", count: 1 },
  { name: "Architecture", count: 1 },
];
