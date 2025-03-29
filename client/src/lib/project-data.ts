export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: 'ai' | 'drupal' | 'other';
}

export const projects: Project[] = [
  {
    id: "semantic-search",
    title: "Semantic Search Implementation",
    description: "Vector-based semantic search using OpenAI embeddings and Pinecone, improving search accuracy and increasing search-driven traffic by 20%.",
    imageUrl: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?auto=format&fit=crop&q=80",
    tags: ["OpenAI", "Pinecone", "Drupal 10", "PHP", "MySQL", "Vector Search"],
    category: "ai"
  },
  {
    id: "ai-multilingual",
    title: "AI-Powered Multi-Lingual Framework",
    description: "Automated multi-language content workflow system that reduces manual translation efforts while ensuring high-quality AI-powered translations.",
    imageUrl: "https://images.unsplash.com/photo-1563207153-f403bf289096?auto=format&fit=crop&q=80",
    tags: ["OpenAI", "Drupal 10", "Translations", "PHP", "NLP"],
    category: "ai"
  },
  {
    id: "generative-search",
    title: "Generative AI Search Engine",
    description: "Context-aware AI search engine replacing traditional search with AI-generated insights using pre-trained transformer models.",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80",
    tags: ["Pre-trained Transformers", "Drupal 10", "Pinecone", "PHP", "JavaScript"],
    category: "ai"
  },
  {
    id: "tts-integration",
    title: "Text-to-Speech Integration",
    description: "Voice output interfaces enhancing accessibility and driving higher content engagement through audio features.",
    imageUrl: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?auto=format&fit=crop&q=80",
    tags: ["Drupal 10", "TTS APIs", "PHP", "Accessibility", "Audio"],
    category: "ai"
  },
  {
    id: "ai-model-tuning",
    title: "AI Model Fine-Tuning & Optimization",
    description: "Fine-tuned AI models for cost, speed, and quality balance, achieving robust performance and reduced latency.",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80",
    tags: ["OpenAI", "Fine-tuning", "Python", "Performance Optimization"],
    category: "ai"
  },
  {
    id: "drupal-cec",
    title: "AI-Enabled Customer Experience Center",
    description: "Interactive AI-powered customer engagement platform with AI-based content personalization and insights, featuring both voice and text-based AI chatbot.",
    imageUrl: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80",
    tags: ["Drupal", "OpenAI", "Vector Databases", "Demandbase", "PHP"],
    category: "drupal"
  },
  {
    id: "gcp-drupal",
    title: "GCP Marketplace Integration with Drupal",
    description: "Seamless GCP SaaS deployment via Drupal, improving cloud scalability and automation.",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80",
    tags: ["Drupal 10", "GCP APIs", "PHP", "CI/CD", "Cloud Integration"],
    category: "drupal"
  },
  {
    id: "ecommerce-checkout",
    title: "AI-Powered E-Commerce Checkout Optimization",
    description: "AI-enhanced checkout flows optimizing conversion and reducing cart drop-offs, enhancing sales pipeline.",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80",
    tags: ["Drupal Commerce", "PHP", "JavaScript", "AI Optimization"],
    category: "drupal"
  },
  {
    id: "techtadka",
    title: "TechTadka: AI-Powered Mobile & Web App",
    description: "Cross-platform AI-integrated application for Web and Mobile, delivering unified user experiences across devices.",
    imageUrl: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80",
    tags: ["Drupal 10", "React Native", "REST APIs", "AI Integrations", "Cross-platform"],
    category: "other"
  },
  {
    id: "realtime-ai-bot",
    title: "Realtime Conversational AI Bot",
    description: "Voice and text-based AI chatbot for real-time interactions with advanced voice-to-text capabilities.",
    imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80",
    tags: ["OpenAI", "Vector Databases", "Drupal", "Conversational AI", "Voice Recognition"],
    category: "other"
  },
  {
    id: "predictive-text",
    title: "Predictive Text Completion for CMS",
    description: "AI-based text prediction for content creators, streamlining editorial workflows and reducing manual effort.",
    imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80",
    tags: ["OpenAI GPT", "Drupal", "PHP", "Python", "Content Creation"],
    category: "other"
  }
];
