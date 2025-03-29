interface Skill {
  name: string;
  level: number; // 0-100
  color: string;
}

type SkillCategory = 'coding' | 'ai' | 'backend' | 'frontend' | 'other';

type SkillData = Record<SkillCategory, Skill[]>;

export const skillData: SkillData = {
  coding: [
    { name: "PHP", level: 95, color: "bg-purple-500" },
    { name: "Python", level: 92, color: "bg-blue-500" },
    { name: "JavaScript", level: 90, color: "bg-yellow-500" },
    { name: "Java", level: 85, color: "bg-orange-500" },
    { name: "React", level: 88, color: "bg-blue-400" },
    { name: "Node.js", level: 88, color: "bg-green-500" },
    { name: "Git", level: 92, color: "bg-gray-500" },
    { name: "Docker", level: 88, color: "bg-blue-600" },
    { name: "Jenkins", level: 85, color: "bg-red-500" },
    { name: "CI/CD", level: 82, color: "bg-green-600" }
  ],
  
  ai: [
    { name: "OpenAI GPT Models", level: 94, color: "bg-indigo-500" },
    { name: "OpenAI Embeddings", level: 92, color: "bg-green-600" },
    { name: "OpenAI Fine-tuning", level: 90, color: "bg-orange-500" },
    { name: "Natural Language Processing", level: 92, color: "bg-purple-600" },
    { name: "Vector Databases (Pinecone)", level: 90, color: "bg-blue-600" },
    { name: "Generative AI", level: 93, color: "bg-pink-500" },
    { name: "Conversational AI", level: 90, color: "bg-teal-500" },
    { name: "AI-driven Personalization", level: 88, color: "bg-yellow-500" },
    { name: "Machine Translation", level: 89, color: "bg-indigo-600" },
    { name: "GCP ML APIs", level: 87, color: "bg-red-500" }
  ],
  
  backend: [
    { name: "Drupal 10", level: 96, color: "bg-blue-500" },
    { name: "Drupal 9", level: 95, color: "bg-blue-600" },
    { name: "Drupal 8", level: 94, color: "bg-blue-700" },
    { name: "Drupal 7", level: 92, color: "bg-blue-800" },
    { name: "Node.js", level: 88, color: "bg-green-500" },
    { name: "REST APIs", level: 92, color: "bg-indigo-500" },
    { name: "MySQL", level: 90, color: "bg-orange-500" },
    { name: "MariaDB", level: 89, color: "bg-orange-600" },
    { name: "MongoDB", level: 85, color: "bg-green-600" },
    { name: "Semantic Search", level: 93, color: "bg-purple-500" }
  ],
  
  frontend: [
    { name: "React", level: 90, color: "bg-blue-500" },
    { name: "React Native", level: 88, color: "bg-blue-400" },
    { name: "JavaScript", level: 92, color: "bg-yellow-500" },
    { name: "HTML/CSS", level: 90, color: "bg-orange-500" },
    { name: "Responsive Design", level: 88, color: "bg-purple-500" },
    { name: "UI/UX Design", level: 85, color: "bg-pink-500" },
    { name: "Accessibility", level: 83, color: "bg-red-500" },
    { name: "Cross-platform Development", level: 87, color: "bg-green-500" },
    { name: "Progressive Web Apps", level: 84, color: "bg-indigo-500" },
    { name: "Mobile Web", level: 85, color: "bg-teal-500" }
  ],
  
  other: [
    { name: "Technical Leadership", level: 94, color: "bg-purple-500" },
    { name: "System Architecture", level: 92, color: "bg-green-600" },
    { name: "Cloud (AWS/GCP/Azure)", level: 90, color: "bg-blue-500" },
    { name: "AI Integration", level: 95, color: "bg-indigo-500" },
    { name: "Team Management", level: 92, color: "bg-yellow-500" },
    { name: "Mentorship", level: 90, color: "bg-teal-500" },
    { name: "Performance Optimization", level: 89, color: "bg-red-500" },
    { name: "Text-to-Speech", level: 86, color: "bg-pink-500" },
    { name: "Voice & Text Search", level: 88, color: "bg-orange-600" },
    { name: "Multi-lingual Systems", level: 87, color: "bg-blue-600" }
  ]
};