import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Rocket } from "lucide-react";
import ProjectCard from "@/components/ui/project-card";
import { projects } from "@/lib/project-data";

type ProjectCategory = "all" | "ai" | "drupal" | "other";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          {...fadeIn(0.1)}
        >
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light text-sm font-medium mb-6">
            <Rocket className="h-4 w-4 mr-2" />
            <span>Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Work</h2>
          <p className="text-muted-foreground">
            Browse through a selection of my professional projects showcasing expertise in AI, Drupal development, and full-stack web applications.
          </p>
        </motion.div>

        <Tabs 
          defaultValue="all" 
          value={activeCategory}
          onValueChange={(value) => setActiveCategory(value as ProjectCategory)}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-4 w-full max-w-md">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="ai">AI</TabsTrigger>
              <TabsTrigger value="drupal">Drupal</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeCategory} className="mt-0">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                No projects found in this category.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      imageUrl={project.imageUrl}
                      tags={project.tags}
                      demoUrl={project.demoUrl}
                      githubUrl={project.githubUrl}
                      category={project.category}
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>

        <motion.div 
          className="text-center mt-12"
          {...fadeIn(0.4)}
        >
          <p className="text-muted-foreground">
            Looking for more? Check out my 
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 mx-1">
              GitHub profile
            </a>
            for additional projects and contributions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
