import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
  isLast?: boolean;
}

export default function TimelineItem({
  title,
  company,
  period,
  description,
  technologies,
  isLast = false
}: TimelineItemProps) {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
        <div className="w-3 h-3 bg-primary rounded-full" />
        {!isLast && <div className="w-0.5 h-full bg-border mt-1" />}
      </div>
      
      <motion.div 
        className="pb-8 flex-1"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardContent className="p-6">
            <div className="mb-2">
              <span className="text-xs font-medium text-muted-foreground bg-muted dark:bg-muted/30 px-2 py-1 rounded">
                {period}
              </span>
            </div>
            
            <h3 className="text-xl font-bold mb-1">{title}</h3>
            <h4 className="text-muted-foreground mb-4">{company}</h4>
            
            <p className="text-muted-foreground mb-4">{description}</p>
            
            {technologies && (
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="bg-primary/5">
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
