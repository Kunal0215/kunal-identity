import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export default function NotFound() {
  return (
    <motion.div
      className="min-h-screen w-full flex items-center justify-center bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <motion.div
            className="flex flex-col items-center text-center gap-4"
            {...fadeIn(0.1)}
          >
            <AlertCircle className="h-16 w-16 text-destructive" />
            <h1 className="text-3xl font-bold text-foreground">404 Page Not Found</h1>
            <p className="text-muted-foreground">
              Oops! The page you're looking for chaudharysn't exist or has been moved.
            </p>
            <Button asChild className="mt-4">
              <Link href="/">Return to Homepage</Link>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
