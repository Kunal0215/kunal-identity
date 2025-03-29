import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { format } from "date-fns";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  tags: string[];
  url: string;
  readTime: string;
}

export default function BlogCard({
  title,
  excerpt,
  date,
  imageUrl,
  tags,
  url,
  readTime
}: BlogCardProps) {
  // Format the date nicely
  const formattedDate = format(new Date(date), "MMMM dd, yyyy");

  return (
    <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      
      <CardContent className="p-6">
        <div className="flex gap-4 text-xs text-muted-foreground mb-3">
          <div className="flex items-center">
            <Calendar className="h-3 w-3 mr-1" />
            {formattedDate}
          </div>
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {readTime}
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-2 line-clamp-2 hover:text-primary transition-colors">
          <a href={url}>{title}</a>
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <a 
          href={url} 
          className="inline-block mt-4 text-sm font-medium text-primary hover:underline"
        >
          Read Article →
        </a>
      </CardContent>
    </Card>
  );
}
