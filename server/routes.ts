import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Handle contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const submission = await storage.saveContactSubmission(contactData);
      res.status(201).json({ 
        success: true, 
        message: "Contact submission received", 
        data: submission 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: validationError.message 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Server error while processing your submission" 
        });
      }
    }
  });

  // Get resume data
  app.get("/api/resume", async (req, res) => {
    try {
      res.status(200).json({
        success: true,
        data: {
          pdfUrl: "/resume.pdf",
          lastUpdated: new Date().toISOString()
        }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error while retrieving resume data"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
