import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// apps/web-react/vite.config.ts

// ... other imports

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Keep this for your local src folder
      "@": path.resolve(__dirname, "./src"),

      // --- THIS IS THE CRITICAL CHANGE ---
      // Create a direct alias for EACH platform entry point.
      // This tells Vite exactly where to find the module.
      "@shadcn/ui/web": path.resolve(
        __dirname,
        "../../packages/ui/src/components/web/index.ts"
      ),

      // Also add your config alias
      "@config/ui": path.resolve(__dirname, "../../packages/config"),
    },
  },
});
