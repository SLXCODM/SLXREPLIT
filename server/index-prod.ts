import fs from "node:fs";
import "dotenv/config";
import path from "node:path";
import { type Server } from "node:http";

import express, { type Express } from "express";
import runApp from "./app";

export async function serveStatic(app: Express, _server: Server) {
  const distPath = path.resolve(import.meta.dirname, "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // Explicitly serve attached_assets
  const attachedAssetsPath = path.resolve(import.meta.dirname, "..", "client", "public", "attached_assets");
  if (fs.existsSync(attachedAssetsPath)) {
    app.use("/attached_assets", express.static(attachedAssetsPath));
  }

  // For any other request that is not an API route, fall through to index.html
  // This ensures that client-side routing works for non-API paths.
  app.use((req, res, next) => {
    if (req.path.startsWith('/api')) {
      return next(); // Let API 404s be handled naturally
    }
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}

// Export app for serverless use
export { app } from "./app";

// Initialize app but don't listen if imported (for tests/serverless), unless directly run or not in Vercel
const isVercel = process.env.VERCEL === '1';
const shouldListen = !isVercel;

export const setupPromise = runApp(serveStatic, shouldListen);
