// Chat response helper functions to generate responses based on user queries

export function getChatResponse(query: string): string {
  const lowerQuery = query.toLowerCase();

  // AI and Machine Learning related queries
  if (
    lowerQuery.includes("ai") ||
    lowerQuery.includes("machine learning") ||
    lowerQuery.includes("artificial intelligence") ||
    lowerQuery.includes("ml")
  ) {
    return `Kunal specializes in AI and Machine Learning with expertise in:
- Developing end-to-end machine learning pipelines
- Natural language processing (NLP) systems for automated content analysis
- Computer vision applications for industrial applications
- Recommendation engines and predictive analytics models
- Integration of AI models with web applications

He's worked with TensorFlow, PyTorch, scikit-learn, and built custom models for clients across various industries.`;
  }

  // Drupal related queries
  if (
    lowerQuery.includes("drupal") ||
    lowerQuery.includes("cms") ||
    lowerQuery.includes("content management")
  ) {
    return `Kunal is an expert Drupal developer with 8+ years of experience:
- Building enterprise-level Drupal websites and applications
- Developing custom Drupal modules and themes
- Integrating Drupal with various third-party services and APIs
- Migrating legacy systems to modern Drupal architecture
- Performance optimization and security hardening

He's worked with Drupal versions 7, 8, 9, and 10, specializing in complex data architectures and custom extensions.`;
  }

  // Projects related queries
  if (
    lowerQuery.includes("project") ||
    lowerQuery.includes("work") ||
    lowerQuery.includes("portfolio") ||
    lowerQuery.includes("showcase")
  ) {
    return `Kunal has worked on numerous projects including:
- AI-powered analytics dashboard for a Fortune 500 retail company
- Enterprise Drupal platform supporting multi-site architecture for a media organization
- Natural language processing system for automated customer support
- Computer vision application for quality control in manufacturing
- Custom CMS for a healthcare provider with strict compliance requirements

You can explore these projects in more detail in the Projects section of this portfolio.`;
  }

  // Skills related queries
  if (
    lowerQuery.includes("skill") ||
    lowerQuery.includes("technology") ||
    lowerQuery.includes("tech stack") ||
    lowerQuery.includes("programming")
  ) {
    return `Kunal's technical skills include:
- Programming: Python, JavaScript/TypeScript, PHP, SQL
- AI/ML: TensorFlow, PyTorch, scikit-learn, NLP, Computer Vision
- Web Development: React, Vue.js, Node.js, GraphQL
- CMS: Drupal (expert level), WordPress
- Cloud: AWS, Google Cloud Platform, Docker, Kubernetes
- Database: PostgreSQL, MySQL, MongoDB

He continuously updates his skills to stay current with technology trends and best practices.`;
  }

  // Experience related queries
  if (
    lowerQuery.includes("experience") ||
    lowerQuery.includes("background") ||
    lowerQuery.includes("career")
  ) {
    return `Kunal has over 8 years of professional experience:
- 3+ years as a Senior Software Engineer at TechInnovate, leading AI and web projects
- 2 years as a Drupal Developer at WebSolutions, building enterprise CMS solutions
- 2 years as Full Stack Developer at DataDriven, focusing on data visualization apps
- Various freelance and consulting roles for specialized projects

His experience spans multiple industries including finance, healthcare, e-commerce, and manufacturing.`;
  }

  // Education related queries
  if (
    lowerQuery.includes("education") ||
    lowerQuery.includes("degree") ||
    lowerQuery.includes("university") ||
    lowerQuery.includes("academic")
  ) {
    return `Kunal's educational background includes:
- M.S. in Computer Science with specialization in Machine Learning
- B.S. in Software Engineering
- Multiple certifications in cloud technologies, Drupal development, and AI
- Regular participation in professional development courses and workshops

He believes in continuous learning and stays updated with the latest advancements in his field.`;
  }

  // Contact related queries
  if (
    lowerQuery.includes("contact") ||
    lowerQuery.includes("hire") ||
    lowerQuery.includes("email") ||
    lowerQuery.includes("get in touch") ||
    lowerQuery.includes("reach")
  ) {
    return `You can reach Kunal through:
- The contact form at the bottom of this page
- Email: reachouttokunal@gmail.com
- LinkedIn: linkedin.com/in/Kunalchaudhary
- GitHub: github.com/Kunalchaudhary

He's currently open to consulting opportunities and selective full-time positions in AI development and Drupal architecture.`;
  }

  // Resume or CV related queries
  if (
    lowerQuery.includes("resume") ||
    lowerQuery.includes("cv") ||
    lowerQuery.includes("curriculum vitae")
  ) {
    return `You can download Kunal's complete resume from the link at the top of the page. It includes:
- Detailed work history with project descriptions
- Complete list of technical skills and proficiency levels
- Education and certifications
- Professional achievements and awards
- References available upon request`;
  }

  // Blog or writing related queries
  if (
    lowerQuery.includes("blog") ||
    lowerQuery.includes("article") ||
    lowerQuery.includes("writing") ||
    lowerQuery.includes("post")
  ) {
    return `Kunal regularly publishes technical articles on:
- AI implementation strategies and case studies
- Drupal development best practices
- Web performance optimization
- Software architecture patterns
- Technology trends and insights

Check out the Blog section for his latest articles, or visit his Medium profile for additional content.`;
  }

  // Default response for other queries
  return `Thank you for your interest! I'm Kunal's AI assistant and can help answer questions about his experience in AI development, Drupal, web development, projects, and more. Feel free to ask about specific areas of his expertise or work.`;
}
