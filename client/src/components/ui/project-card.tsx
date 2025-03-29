import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  category: 'ai' | 'drupal' | 'other';
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  tags,
  demoUrl,
  githubUrl,
  category
}: ProjectCardProps) {
  // Define color based on category
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'ai':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'drupal':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'other':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all hover:shadow-md">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <Badge className={getCategoryColor(category)}>
            {category.toUpperCase()}
          </Badge>
        </div>
      </div>
      
      <CardContent className="py-6 flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-primary/5 text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 pb-6 flex justify-between">
        {demoUrl && (
          <Button
            size="sm"
            variant="default"
            onClick={() => window.open(demoUrl, "_blank")}
            className="flex items-center gap-1 flex-1 mr-2"
          >
            <ExternalLink className="h-4 w-4" />
            <span>Demo</span>
          </Button>
        )}
        
        {githubUrl && (
          <Button
            size="sm"
            variant="outline"
            onClick={() => window.open(githubUrl, "_blank")}
            className="flex items-center gap-1 flex-1"
          >
            <Github className="h-4 w-4" />
            <span>Code</span>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
