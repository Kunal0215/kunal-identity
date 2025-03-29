import { Link } from "wouter";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Terminal, Heart, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-muted dark:bg-muted/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-4 gap-8 pb-8 border-b border-border"
          {...fadeIn(0.1)}
        >
          {/* Brand/Logo Column */}
          <div className="md:col-span-1">
            <Link href="/">
              <a className="text-primary dark:text-primary-light font-mono font-semibold text-xl flex items-center">
                <Terminal className="mr-2 h-5 w-5" />
                Kunal<span className="text-accent dark:text-accent-light">.dev</span>
              </a>
            </Link>
            <p className="mt-4 text-muted-foreground">
              Senior Software Engineer and AI Developer with expertise in machine learning, Drupal, and web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary">About Me</a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-primary">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary">Projects</a>
              </li>
              <li>
                <a href="#blog" className="text-muted-foreground hover:text-primary">Blog</a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary">Contact</a>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div className="md:col-span-1">
            <h3 className="font-bold mb-4">Technologies</h3>
            <ul className="space-y-2">
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-primary">AI & Machine Learning</a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-primary">Drupal Development</a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-primary">Full Stack Web</a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-primary">Cloud Architecture</a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-primary">Database Design</a>
              </li>
            </ul>
          </div>

          {/* Contact/Social */}
          <div className="md:col-span-1">
            <h3 className="font-bold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground/5 hover:bg-primary/10 hover:text-primary transition p-2 rounded-full"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground/5 hover:bg-primary/10 hover:text-primary transition p-2 rounded-full"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground/5 hover:bg-primary/10 hover:text-primary transition p-2 rounded-full"
                aria-label="Twitter"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
            </div>
            <a
              href="mailto:reachouttokunal@gmail.com"
              className="inline-flex items-center text-muted-foreground hover:text-primary"
            >
              <Mail className="h-4 w-4 mr-2" />
              reachouttokunal@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-col md:flex-row justify-between items-center"
          {...fadeIn(0.2)}
        >
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Kunal Chaudhary. All rights reserved.
          </div>

          <div className="flex items-center">
            <span className="text-muted-foreground text-sm mr-2">
              Built with <Heart className="h-3 w-3 inline text-red-500" /> using React & Tailwind
            </span>
            <Button
              variant="outline"
              size="icon"
              className="ml-4 rounded-full"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
