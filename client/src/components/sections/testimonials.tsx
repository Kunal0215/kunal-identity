import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquareQuote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/lib/testimonial-data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalTestimonials = testimonials.length;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setActiveIndex((prevIndex) => (prevIndex + 1) % totalTestimonials),
      8000
    );

    return () => {
      resetTimeout();
    };
  }, [activeIndex, totalTestimonials]);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalTestimonials) % totalTestimonials);
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="py-16 bg-muted/50 dark:bg-muted/10">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          {...fadeIn(0.1)}
        >
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light text-sm font-medium mb-6">
            <MessageSquareQuote className="h-4 w-4 mr-2" />
            <span>Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Client Feedback</h2>
          <p className="text-muted-foreground">
            What clients and colleagues say about working with me on various projects.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-card dark:bg-card shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-6 relative">
                          <img 
                            src={testimonial.avatarUrl} 
                            alt={testimonial.name}
                            className="w-20 h-20 rounded-full object-cover border-4 border-background" 
                          />
                          <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center">
                            <MessageSquareQuote className="h-4 w-4" />
                          </span>
                        </div>
                        <blockquote className="text-xl mb-6 italic">"{testimonial.quote}"</blockquote>
                        <div>
                          <h3 className="font-bold text-lg">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">{testimonial.title}, {testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-background h-10 w-10 rounded-full border shadow-md"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-background h-10 w-10 rounded-full border shadow-md"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  activeIndex === index ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                onClick={() => goToTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div 
          className="mt-12 text-center"
          {...fadeIn(0.4)}
        >
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 underline"
          >
            View more recommendations on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
