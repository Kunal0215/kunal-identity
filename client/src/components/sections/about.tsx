import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import TimelineItem from "@/components/ui/timeline-item";
import { Clock, Award, Briefcase, Calendar } from "lucide-react";
import { resumeData } from "@/lib/resume-data";

export default function About() {
  return (
    <section id="about" className="py-16 bg-muted/50 dark:bg-muted/10">
      <div className="container mx-auto px-4 space-y-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          {...fadeIn(0.1)}
        >
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light text-sm font-medium mb-6">
            <Clock className="h-4 w-4 mr-2" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">AI Expert & Drupal Tech Lead</h2>
          <p className="text-muted-foreground">
            As a seasoned AI expert and technical leader, I blend cutting-edge artificial intelligence with Drupal excellence to deliver innovative solutions that transform business capabilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Professional Bio */}
          <motion.div 
            className="md:col-span-2"
            {...fadeIn(0.2)}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  Professional Summary
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    With 5+ years of experience in web development and AI integrations, I've established myself as a technical leader specializing in Drupal (7, 8, 9, 10) and OpenAI model implementations. My expertise includes semantic search, machine translations, text-to-speech, and predictive AI solutions.
                  </p>
                  <p>
                    I excel at leading cross-functional teams to deliver sophisticated AI-driven platforms that enhance user engagement and business performance. My focus on performance optimization and cutting-edge AI adoption has consistently delivered measurable results for clients.
                  </p>
                  <p>
                    As a strategic technical leader, I align AI initiatives with business goals, mentor team members, and architect scalable systems that leverage the latest in AI technology while maintaining robust performance.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  {resumeData.specializations.map((spec, index) => (
                    <Badge key={index} variant="outline" className="bg-primary/5">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Professional Image */}
          <motion.div
            {...fadeIn(0.3)}
          >
            <Card className="h-full overflow-hidden">
              <CardContent className="p-0 h-full">
                <div className="relative h-full w-full">
                  <img 
                    src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&q=80" 
                    alt="Professional headshot" 
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white font-bold">Kunal Chaudhury</h3>
                    <p className="text-white/80 text-sm">AI Expert & Technical Lead</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Work Experience Timeline */}
        <motion.div
          className="pt-8"
          {...fadeIn(0.4)}
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Briefcase className="h-5 w-5 mr-2 text-primary" />
            Work Experience
          </h3>
          
          <div className="space-y-6">
            {resumeData.experience.map((exp, index) => (
              <TimelineItem
                key={index}
                title={exp.title}
                company={exp.company}
                period={exp.period}
                description={exp.description}
                technologies={exp.technologies}
                isLast={index === resumeData.experience.length - 1}
              />
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          className="pt-8"
          {...fadeIn(0.5)}
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-primary" />
            Education
          </h3>
          
          <div className="space-y-6">
            {resumeData.education.map((edu, index) => (
              <TimelineItem
                key={index}
                title={edu.degree}
                company={edu.school}
                period={edu.period}
                description={edu.description}
                isLast={index === resumeData.education.length - 1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
