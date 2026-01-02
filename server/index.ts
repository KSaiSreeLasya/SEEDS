import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { handleDemo } from "./routes/demo";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // In production, serve static files and handle SPA routing
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../dist/spa")));

    // Catch-all route - serve index.html for all non-API routes (SPA routing)
    app.get(/.*/, (_req, res) => {
      res.sendFile(path.join(__dirname, "../dist/spa/index.html"));
    });
  }

  return app;
}
