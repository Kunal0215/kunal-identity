export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  tags: string[];
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "machine-learning-in-production",
    title: "Implementing Machine Learning Models in Production",
    excerpt: "A comprehensive guide to deploying, monitoring, and maintaining machine learning models in production environments with best practices and case studies.",
    date: "2023-05-15",
    imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80",
    tags: ["Machine Learning", "MLOps", "Production", "AI"],
    readTime: "8 min read"
  },
  {
    id: "drupal-10-features",
    title: "Exploring Drupal 10: Key Features and Migration Strategy",
    excerpt: "An in-depth look at the new features in Drupal 10 and a step-by-step guide for planning your migration from earlier versions.",
    date: "2023-03-22",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
    tags: ["Drupal 10", "CMS", "Web Development", "Migration"],
    readTime: "12 min read"
  },
  {
    id: "nlp-customer-feedback",
    title: "Using NLP to Analyze Customer Feedback at Scale",
    excerpt: "How natural language processing can transform your approach to customer feedback analysis, with practical implementation examples.",
    date: "2023-01-10",
    imageUrl: "https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&q=80",
    tags: ["NLP", "Customer Experience", "AI", "Data Analysis"],
    readTime: "10 min read"
  },
  {
    id: "headless-drupal-react",
    title: "Building a Headless Drupal Architecture with React",
    excerpt: "A technical walkthrough for creating a decoupled Drupal application with React as the frontend, featuring performance optimizations and security considerations.",
    date: "2022-11-05",
    imageUrl: "https://images.unsplash.com/photo-1633984799334-9efd2aa93c8f?auto=format&fit=crop&q=80",
    tags: ["Drupal", "React", "Headless CMS", "API"],
    readTime: "15 min read"
  },
  {
    id: "react-performance-optimization",
    title: "Advanced React Performance Optimization Techniques",
    excerpt: "Learn how to identify and fix performance bottlenecks in React applications using memoization, code splitting, and the latest React features.",
    date: "2022-09-18",
    imageUrl: "https://images.unsplash.com/photo-1629656106627-368be5f5a0ff?auto=format&fit=crop&q=80",
    tags: ["React", "Performance", "JavaScript", "Web Development"],
    readTime: "11 min read"
  },
  {
    id: "deep-learning-computer-vision",
    title: "Deep Learning for Computer Vision: Industrial Applications",
    excerpt: "Exploring real-world industrial applications of computer vision using deep learning, from quality control to predictive maintenance.",
    date: "2022-07-30",
    imageUrl: "https://images.unsplash.com/photo-1631268881217-b6254cc54f9f?auto=format&fit=crop&q=80",
    tags: ["Computer Vision", "Deep Learning", "Industry 4.0", "AI"],
    readTime: "9 min read"
  }
];
