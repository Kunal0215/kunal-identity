import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Sparkles, Database, Palette, LineChart } from "lucide-react";
import SkillBar from "@/components/ui/skill-bar";
import { skillData } from "@/lib/skill-data";

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          {...fadeIn(0.1)}
        >
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light text-sm font-medium mb-6">
            <Code className="h-4 w-4 mr-2" />
            <span>Skills & Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Proficiency</h2>
          <p className="text-muted-foreground">
            My technical skill set spans multiple domains including AI/ML, web development, and enterprise CMS solutions.
          </p>
        </motion.div>
        
        <Tabs defaultValue="coding" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="grid grid-cols-2 sm:grid-cols-5 w-full max-w-3xl">
              <TabsTrigger value="coding" className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                <span className="hidden sm:inline">Coding</span>
              </TabsTrigger>
              <TabsTrigger value="ai" className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                <span className="hidden sm:inline">AI/ML</span>
              </TabsTrigger>
              <TabsTrigger value="backend" className="flex items-center gap-2">
                <Database className="h-4 w-4" />
                <span className="hidden sm:inline">Backend</span>
              </TabsTrigger>
              <TabsTrigger value="frontend" className="flex items-center gap-2">
                <Palette className="h-4 w-4" />
                <span className="hidden sm:inline">Frontend</span>
              </TabsTrigger>
              <TabsTrigger value="other" className="flex items-center gap-2">
                <LineChart className="h-4 w-4" />
                <span className="hidden sm:inline">Other</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          {Object.entries(skillData).map(([category, skills]) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div {...fadeIn(0.2)}>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-6">
                        {category === "coding" ? "Programming Languages" : 
                         category === "ai" ? "AI & Machine Learning" :
                         category === "backend" ? "Backend Technologies" :
                         category === "frontend" ? "Frontend Development" : "Additional Skills"}
                      </h3>
                      <div className="space-y-5">
                        {skills.slice(0, Math.ceil(skills.length/2)).map((skill) => (
                          <SkillBar 
                            key={skill.name} 
                            name={skill.name} 
                            level={skill.level} 
                            color={skill.color} 
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                
                <motion.div {...fadeIn(0.3)}>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-6">
                        {category === "coding" ? "Development Tools" : 
                         category === "ai" ? "Data Science" :
                         category === "backend" ? "Databases & Services" :
                         category === "frontend" ? "UI/UX & Frameworks" : "Soft Skills"}
                      </h3>
                      <div className="space-y-5">
                        {skills.slice(Math.ceil(skills.length/2)).map((skill) => (
                          <SkillBar 
                            key={skill.name} 
                            name={skill.name} 
                            level={skill.level} 
                            color={skill.color} 
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
              
              <motion.div 
                className="mt-8 text-center"
                {...fadeIn(0.4)}
              >
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-medium text-muted-foreground">
                      {category === "coding" ? "Experience with both low-level and high-level programming languages for various application domains." : 
                       category === "ai" ? "Deep expertise in machine learning algorithms, neural networks, and natural language processing." :
                       category === "backend" ? "Proficient in scalable server architecture, API development, and database optimization." :
                       category === "frontend" ? "Creating responsive, accessible, and performant user interfaces with modern frameworks." : 
                       "Additional competencies that complement my technical expertise and enhance project delivery."}
                    </h4>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <motion.div 
          className="flex flex-wrap justify-center gap-8 mt-16"
          {...fadeIn(0.5)}
        >
          <Card className="flex-1 min-w-0 max-w-md">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-full">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="ml-4 text-xl font-bold">AI Expertise</h3>
              </div>
              <p className="text-muted-foreground">Specialized in developing machine learning models, natural language processing systems, and computer vision applications for real-world business problems.</p>
            </CardContent>
          </Card>
          
          <Card className="flex-1 min-w-0 max-w-md">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-secondary/10 dark:bg-secondary/20 p-3 rounded-full">
                  <Code className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="ml-4 text-xl font-bold">Drupal Development</h3>
              </div>
              <p className="text-muted-foreground">Expert-level Drupal developer with extensive experience building enterprise CMS solutions, custom modules, and integrating with third-party services.</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
