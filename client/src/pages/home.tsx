import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ChatInterface from "@/components/chatbot/chat-interface";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Testimonials from "@/components/sections/testimonials";
import Blog from "@/components/sections/blog";
import Contact from "@/components/sections/contact";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { FaGithub, FaLinkedin, FaTwitter, FaFilePdf } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [typingText, setTypingText] = useState("");
  const textOptions = [
    "AI & OpenAI Integration Expert",
    "Drupal Technical Architect",
    "Semantic Search Specialist",
    "Technical Team Lead"
  ];
  const [textIndex, setTextIndex] = useState(0);
  const typingRef = useRef<HTMLParagraphElement>(null);

  const { data: resumeData } = useQuery({
    queryKey: ['/api/resume'],
  });

  // Text typing animation
  useEffect(() => {
    const typeText = () => {
      setTypingText('');
      
      if (typingRef.current) {
        typingRef.current.classList.remove('typewriter-text');
        void typingRef.current.offsetWidth; // Trigger reflow
        typingRef.current.classList.add('typewriter-text');
      }
      
      setTypingText(textOptions[textIndex]);
      setTextIndex((prev) => (prev + 1) % textOptions.length);
    };

    typeText();
    const interval = setInterval(typeText, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with Chatbot */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden code-bg" id="home">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left column - Introduction */}
              <motion.div 
                className="space-y-6 md:pr-6"
                {...fadeIn(0.1)}
              >
                <div className="space-y-4">
                  <p className="font-mono text-primary dark:text-primary-light font-medium">Hello, I'm</p>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                    <span>Kunal Chaudhury</span>
                  </h1>
                  <div className="h-8 overflow-hidden">
                    <p 
                      ref={typingRef}
                      className="typewriter-text font-mono text-lg md:text-xl text-accent dark:text-accent-light"
                    >
                      {typingText}
                    </p>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground max-w-lg">
                  AI expert and technical leader with 5+ years of experience in web development, AI integrations, and Drupal development, specializing in semantic search and AI-driven personalization.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="#projects" 
                    className="px-6 py-3 bg-primary hover:bg-primary/80 text-primary-foreground font-medium rounded-lg shadow-sm hover:shadow transition-all"
                  >
                    View Projects
                  </a>
                  <a 
                    href="#contact" 
                    className="px-6 py-3 border border-primary hover:border-primary/80 text-primary hover:text-primary/80 dark:text-primary-light dark:hover:text-primary-light/80 font-medium rounded-lg shadow-sm hover:shadow transition-all"
                  >
                    Contact Me
                  </a>
                </div>
                
                <div className="flex items-center space-x-4 pt-2">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary dark:hover:text-primary-light transition" 
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary dark:hover:text-primary-light transition" 
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary dark:hover:text-primary-light transition" 
                    aria-label="Twitter"
                  >
                    <FaTwitter className="text-xl" />
                  </a>
                  <a 
                    href={resumeData?.data?.pdfUrl || "#"}
                    download="kunal-chaudhury-resume.pdf"
                    className="ml-2 flex items-center text-muted-foreground hover:text-primary dark:hover:text-primary-light text-sm font-medium transition"
                  >
                    <FaFilePdf className="mr-2" />
                    <span>Download Resume</span>
                  </a>
                </div>
              </motion.div>
              
              {/* Chatbot Interface */}
              <motion.div 
                className="relative"
                {...fadeIn(0.3)}
              >
                <ChatInterface />
              </motion.div>
            </div>
          </div>
        </section>

        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
