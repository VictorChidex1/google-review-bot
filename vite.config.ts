import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import type { IncomingMessage, ServerResponse } from "http";

// Helper to parse body
const parseBody = async (req: IncomingMessage) => {
  return new Promise((resolve) => {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      try {
        resolve(JSON.parse(body));
      } catch {
        resolve({});
      }
    });
  });
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "api-middleware",
      configureServer(server) {
        server.middlewares.use(
          "/api/generate",
          async (req: any, res: any, next) => {
            try {
              // Parse body for the handler
              if (req.method === "POST") {
                req.body = await parseBody(req);
              }

              // Mock Vercel Response helpers
              res.status = (code: number) => {
                res.statusCode = code;
                return res;
              };
              res.json = (data: any) => {
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify(data));
                return res;
              };

              // Load the API module using Vite's SSR loader
              const module = await server.ssrLoadModule("/api/generate.ts");
              await module.default(req, res);
            } catch (err) {
              console.error("API Middleware Error:", err);
              res.statusCode = 500;
              res.end(JSON.stringify({ error: "Internal Server Error" }));
            }
          }
        );
      },
    },
  ],
});
