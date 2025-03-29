import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, User, Send, Shield } from "lucide-react";
import ChatResponse from "./chat-response";
import { getChatResponse } from "@/lib/chat-responses";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface SuggestionButton {
  id: string;
  text: string;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hi there! 👋 I'm KunalBot, your personal assistant for this portfolio. Ask me anything about Kunal's skills, projects, or experience.",
      sender: "bot",
      timestamp: new Date()
    }
  ]);

  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestionButtons: SuggestionButton[] = [
    { id: "ai-skills", text: "What are your AI skills?" },
    { id: "recent-projects", text: "Show recent projects" },
    { id: "drupal-experience", text: "Drupal experience" }
  ];

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input on load
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();

    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot typing delay (500-1500ms)
    const typingDelay = Math.random() * 1000 + 500;

    setTimeout(() => {
      // Add bot response
      const botResponse = getChatResponse(inputValue.trim());
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: "bot",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, typingDelay);
  };

  const handleSuggestionClick = (suggestionText: string) => {
    setInputValue(suggestionText);

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: suggestionText,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot typing delay (500-1500ms)
    const typingDelay = Math.random() * 1000 + 500;

    setTimeout(() => {
      // Add bot response
      const botResponse = getChatResponse(suggestionText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: "bot",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, typingDelay);
  };

  return (
    <div className="bg-card dark:bg-card rounded-2xl shadow-lg border border-border p-5 gradient-border">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold flex items-center">
          <Bot className="text-primary dark:text-primary-light mr-2 h-5 w-5" />
          <span>Kunal<span className="text-primary dark:text-primary-light">Bot</span></span>
        </h2>
        <div className="flex items-center space-x-3">
          <span className="text-xs text-muted-foreground">AI Powered</span>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
          </span>
        </div>
      </div>

      {/* Chat messages container */}
      <div className="space-y-4 mb-4 h-72 overflow-y-auto p-1 scrollbar-thin">
        {/* Display messages */}
        {messages.map((message) => (
          <ChatResponse
            key={message.id}
            message={message.content}
            sender={message.sender}
          />
        ))}

        {/* Suggestions (only show after welcome message if no other messages) */}
        {messages.length === 1 && (
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                <Bot className="text-primary dark:text-primary-light h-4 w-4" />
              </div>
            </div>
            <div className="space-y-2 max-w-[85%]">
              <p className="text-xs text-muted-foreground ml-1">Try asking:</p>
              <div className="flex flex-wrap gap-2">
                {suggestionButtons.map(button => (
                  <button
                    key={button.id}
                    onClick={() => handleSuggestionClick(button.text)}
                    className="px-3 py-1.5 text-xs bg-muted dark:bg-muted text-muted-foreground dark:text-muted-foreground rounded-full hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary transition"
                  >
                    {button.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                <Bot className="text-primary dark:text-primary-light h-4 w-4" />
              </div>
            </div>
            <div className="chat-bubble-bot bg-muted dark:bg-muted p-3 rounded-lg">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}

        {/* Invisible element to allow scrolling to bottom */}
        <div ref={messagesEndRef}></div>
      </div>

      {/* Chat input */}
      <div className="relative">
        <form onSubmit={handleSendMessage} className="flex">
          <Input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask me about Kunal's skills, projects, etc..."
            className="w-full px-4 py-3 rounded-l-lg focus:ring-primary"
          />
          <Button
            type="submit"
            className="bg-primary hover:bg-primary/80 text-primary-foreground px-4 rounded-r-lg"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
        <p className="absolute -bottom-6 left-0 text-xs text-muted-foreground flex items-center">
          <Shield className="h-3 w-3 mr-1" />
          Powered by secure AI - no data stored
        </p>
      </div>

      {/* Code decorations */}
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gradient-to-tr from-primary/10 to-accent/5 rounded-full blur-2xl -z-10"></div>
      <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-secondary/10 to-primary/5 rounded-full blur-xl -z-10"></div>

      {/* Code decoration */}
      <div className="absolute -right-4 top-4 font-mono text-[10px] text-primary/40 dark:text-primary/30 opacity-70">
        &lt;div class="ai-assistant"&gt;<br/>
        &nbsp;&nbsp;state = "learning"<br/>
        &lt;/div&gt;
      </div>
    </div>
  );
}
