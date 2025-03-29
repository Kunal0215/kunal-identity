import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Terminal, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ThemeToggle from "@/components/ui/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll events to change header style
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrolled(position > 10);

      // Highlight active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "testimonials", "blog", "contact"];

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { text: "About", href: "#about" },
    { text: "Skills", href: "#skills" },
    { text: "Projects", href: "#projects" },
    { text: "Blog", href: "#blog" },
    { text: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 dark:bg-background/90 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-primary dark:text-primary-light font-mono font-semibold text-lg flex items-center">
                <Terminal className="mr-1 h-5 w-5" />
                Kunal<span className="text-accent dark:text-accent-light">.dev</span>
              </a>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-8">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={`relative ${
                        activeSection === item.href.replace("#", "")
                          ? "text-primary dark:text-primary-light font-medium"
                          : "text-muted-foreground hover:text-primary dark:hover:text-primary-light"
                      } transition`}
                    >
                      {item.text}
                      {activeSection === item.href.replace("#", "") && (
                        <motion.div
                          className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary dark:bg-primary-light"
                          layoutId="activeSection"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <ThemeToggle />
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <div className="flex flex-col h-full py-6">
                  <div className="flex items-center justify-between mb-8">
                    <Link href="/">
                      <a className="text-primary dark:text-primary-light font-mono font-semibold text-lg flex items-center">
                        <Terminal className="mr-1 h-5 w-5" />
                        Kunal<span className="text-accent dark:text-accent-light">.dev</span>
                      </a>
                    </Link>
                    <ThemeToggle />
                  </div>

                  <nav className="flex-1">
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="#home"
                          className={`block py-2 px-4 rounded hover:bg-muted ${
                            activeSection === "home" ? "text-primary font-medium" : "text-foreground"
                          }`}
                        >
                          Home
                        </a>
                      </li>
                      {navItems.map((item) => (
                        <li key={item.href}>
                          <a
                            href={item.href}
                            className={`block py-2 px-4 rounded hover:bg-muted ${
                              activeSection === item.href.replace("#", "")
                                ? "text-primary font-medium"
                                : "text-foreground"
                            }`}
                          >
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  <div className="mt-8 pt-6 border-t border-border">
                    <div className="flex justify-between">
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary"
                      >
                        <i className="fab fa-github text-xl"></i>
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary"
                      >
                        <i className="fab fa-linkedin text-xl"></i>
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary"
                      >
                        <i className="fab fa-twitter text-xl"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
