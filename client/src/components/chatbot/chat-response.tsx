import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";

interface ChatResponseProps {
  message: string;
  sender: 'user' | 'bot';
}

export default function ChatResponse({ message, sender }: ChatResponseProps) {
  if (sender === 'user') {
    return (
      <motion.div 
        className="flex items-start justify-end"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="chat-bubble-user bg-primary/10 dark:bg-primary/20 p-3 rounded-lg max-w-[85%]">
          <p className="text-sm">{message}</p>
        </div>
        <div className="flex-shrink-0 ml-3">
          <div className="w-8 h-8 rounded-full bg-accent/10 dark:bg-accent/20 flex items-center justify-center">
            <User className="text-accent dark:text-accent-light h-4 w-4" />
          </div>
        </div>
      </motion.div>
    );
  }
  
  // Format bot message if it contains a list
  const formatBotMessage = (text: string) => {
    // Check if the message contains a list (items following a dash or bullet point)
    if (text.includes('\n- ') || text.includes('\n• ')) {
      const parts = text.split(/\n(?=[-•])/);
      
      return (
        <>
          {parts.map((part, index) => {
            // Check if this part is a list item
            if (part.startsWith('- ') || part.startsWith('• ')) {
              return <li key={index} className="ml-5 text-sm list-disc">{part.substring(2)}</li>;
            }
            return <p key={index} className="text-sm mb-2">{part}</p>;
          })}
        </>
      );
    }
    
    return <p className="text-sm">{text}</p>;
  };

  return (
    <motion.div 
      className="flex items-start"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex-shrink-0 mr-3">
        <div className="w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
          <Bot className="text-primary dark:text-primary-light h-4 w-4" />
        </div>
      </div>
      <div className="chat-bubble-bot bg-muted dark:bg-muted p-3 rounded-lg max-w-[85%]">
        {formatBotMessage(message)}
      </div>
    </motion.div>
  );
}
