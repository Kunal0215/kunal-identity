import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { FileText } from "lucide-react";
import BlogCard from "@/components/ui/blog-card";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/blog-data";

export default function Blog() {
  // Display only the most recent 3 blog posts
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          {...fadeIn(0.1)}
        >
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light text-sm font-medium mb-6">
            <FileText className="h-4 w-4 mr-2" />
            <span>Articles & Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">From My Blog</h2>
          <p className="text-muted-foreground">
            Technical articles, tutorials, and thoughts on AI, Drupal development, and software engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {recentPosts.map((post, index) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogCard
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                imageUrl={post.imageUrl}
                tags={post.tags}
                url={`/blog/${post.id}`}
                readTime={post.readTime}
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          {...fadeIn(0.4)}
        >
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.location.href = "/blog"}
          >
            View All Articles
          </Button>
        </motion.div>

        {/* Tech Conference Image */}
        <motion.div 
          className="mt-20 relative rounded-lg overflow-hidden shadow-xl"
          {...fadeIn(0.5)}
        >
          <img 
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80" 
            alt="Speaking at tech conference" 
            className="w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
            <h3 className="text-white text-xl md:text-2xl font-bold mb-2">Speaking & Conferences</h3>
            <p className="text-white/90 mb-4 max-w-lg">
              I regularly speak at industry conferences on AI implementation, Drupal development, and emerging technologies. Check out my upcoming speaking engagements.
            </p>
            <Button 
              className="w-fit"
              onClick={() => window.open("https://www.drupal.org/community/events", "_blank")}
            >
              View Schedule
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
