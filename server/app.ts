import "dotenv/config";
import { type Server } from "node:http";
import path from "node:path";

// GLOBAL BYPASS FOR SUPABASE SELF-SIGNED CERTIFICATES ON VERCEL
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import express, {
  type Express,
  type Request,
  Response,
  NextFunction,
} from "express";

import session from "express-session";
import pgSession from "connect-pg-simple";
import { registerRoutes } from "./routes";

const PostgresStore = pgSession(session);

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export const app = express();

declare module 'http' {
  interface IncomingMessage {
    rawBody: unknown
  }
}
app.use(express.json({
  verify: (req, _res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express.urlencoded({ extended: false }));

// Session configuration (Persistent via Supabase)
app.use(session({
  store: new PostgresStore({
    conObject: {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false
      }
    },
    tableName: 'session',
    createTableIfMissing: true
  }),
  cookie: {
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    secure: process.env.VERCEL === "1", // Secure if on Vercel (HTTPS)
    sameSite: 'lax'
  },
  resave: false,
  saveUninitialized: false,
  secret: process.env.SESSION_SECRET || "slx-community-secret-2026",
}));

// Serve community uploads and attached assets
app.use('/uploads', express.static(path.resolve(process.cwd(), 'uploads')));
app.use('/attached_assets', express.static(path.resolve(process.cwd(), 'client', 'public', 'attached_assets')));

// CORS middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// Note: Middleware like express.static and attached_assets are now handled 
// inside the runApp/setup sequence to preserve route priority.

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

export default async function runApp(
  setup: (app: Express, server: Server) => Promise<void>,
  startListening: boolean = true
) {
  log("Starting application routes registration...");

  // Register API routes first!
  const server = await registerRoutes(app);
  log("API routes registered successfully.");

  // Global Error Handler for API
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    console.error(`[ERROR] ${status}: ${message}`);
    res.status(status).json({ message });
  });

  // Now handle static files and catch-all via setup
  await setup(app, server);

  if (startListening) {
    const PORT = parseInt(process.env.PORT || "3001", 10);
    server.listen(PORT, "0.0.0.0", () => {
      log(`serving on port ${PORT}`);
    });
  }
}
