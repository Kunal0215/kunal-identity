export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  description: string;
}

interface ResumeData {
  specializations: string[];
  experience: Experience[];
  education: Education[];
}

export const resumeData: ResumeData = {
  specializations: [
    "AI & Machine Learning",
    "Drupal (7, 8, 9, 10) Development",
    "OpenAI Model Integration",
    "Full Stack Web Development",
    "AI-driven Solutions",
    "Technical Leadership"
  ],

  experience: [
    {
      title: "Technical Architect / Tech Lead",
      company: "Semantic Search Implementation",
      period: "2023 - Present",
      description: "Led a team of 10 to implement vector-based semantic search using OpenAI embeddings and Pinecone. Improved search accuracy, increasing search-driven traffic and lead engagement by 20%.",
      technologies: ["Drupal 10", "OpenAI embeddings", "Pinecone", "PHP", "MySQL"]
    },
    {
      title: "Tech Lead / AI Module Developer",
      company: "AI-Powered Multi-Lingual Framework",
      period: "2022 - 2023",
      description: "Led a team of 8 to develop an automated multi-language content workflow system, reducing manual translation efforts while ensuring high-quality AI-powered translations, improving global content reach.",
      technologies: ["Drupal 10", "OpenAI translation models", "PHP", "NLP"]
    },
    {
      title: "AI Solutions Architect / Tech Lead",
      company: "Generative AI Search Engine",
      period: "2021 - 2022",
      description: "Designed context-aware AI search engine replacing traditional search for a team of 10. Elevated user experience with AI-generated insights using pre-trained transformer models.",
      technologies: ["Pre-trained Transformer Models", "Drupal 10", "Pinecone", "PHP", "JavaScript"]
    },
    {
      title: "Technical Architect / Developer",
      company: "AI-Enabled Customer Experience Center (CEC)",
      period: "2020 - 2021",
      description: "Built interactive AI-powered customer engagement platform with a team of 11. Enabled AI-based content personalization and insights, developing voice and text-based AI chatbot for real-time interactions.",
      technologies: ["OpenAI", "Vector Databases", "Drupal", "Demandbase", "PHP"]
    },
    {
      title: "Lead Developer",
      company: "TechTadka: AI-Powered Mobile & Web App",
      period: "2019 - 2020",
      description: "Launched cross-platform AI-integrated app (Web + Mobile) with a team of 9. Delivered unified user experiences across devices with AI-powered features.",
      technologies: ["Drupal 10", "React Native", "REST APIs", "AI Integrations"]
    }
  ],

  education: [
    {
      degree: "Masters of Science (M.Sc.) in Full Stack Development",
      school: "Liverpool Kunal Moores University, UK",
      period: "2024 - 2025 (Awaiting Degree)",
      description: "Advanced studies in full stack development methodologies and technologies."
    },
    {
      degree: "Executive Post Graduate (EPG) in Full Stack Development",
      school: "IIIT Bangalore",
      period: "2023",
      description: "Specialized training in comprehensive full stack development techniques and modern web technologies."
    },
    {
      degree: "Bachelor of Technology (B.Tech) in Electronics & Communication Engineering",
      school: "Poornima College of Engineering, Jaipur",
      period: "2016 - 2020",
      description: "Foundation in engineering principles with specialized focus on electronic systems and communication technologies."
    }
  ]
};
