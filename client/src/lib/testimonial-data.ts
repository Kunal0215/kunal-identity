interface Testimonial {
  name: string;
  title: string;
  company: string;
  quote: string;
  avatarUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Kunalson",
    title: "CTO",
    company: "TechVision Inc",
    quote: "Kunal's AI expertise was instrumental in developing our predictive analytics platform. His ability to translate complex technical concepts into practical business solutions is remarkable.",
    avatarUrl: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    name: "Michael Chen",
    title: "Director of Digital",
    company: "Global Media Group",
    quote: "The Drupal platform Kunal built for our organization transformed our content management workflow. His technical knowledge combined with understanding our business needs made the project a huge success.",
    avatarUrl: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    name: "Emily Rodriguez",
    title: "Product Manager",
    company: "InnovateAI",
    quote: "Working with Kunal on our machine learning integration was a fantastic experience. His problem-solving abilities and attention to detail ensured our project was delivered on time and exceeded expectations.",
    avatarUrl: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "David Williams",
    title: "VP of Engineering",
    company: "Enterprise Solutions",
    quote: "Kunal is that rare technologist who combines deep technical expertise with excellent communication skills. His work on our Drupal migration was flawless, and he guided our team throughout the process.",
    avatarUrl: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    name: "Alexandra Kim",
    title: "CEO",
    company: "DataDriven Startup",
    quote: "Kunal's contributions to our AI-powered analytics dashboard were game-changing. His technical leadership and innovative approach helped us deliver a product that truly stands out in the market.",
    avatarUrl: "https://randomuser.me/api/portraits/women/47.jpg"
  }
];
