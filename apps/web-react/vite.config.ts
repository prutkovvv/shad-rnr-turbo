import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import reactNativeWeb from "vite-plugin-react-native-web";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          // "react-native-reanimated/plugin",
        ],
        presets: ["nativewind/babel"],
      },
    }),
    reactNativeWeb(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),

      "@shadcn/ui/web": path.resolve(
        __dirname,
        "../../packages/ui/src/components/web/index.ts"
      ),

      "@config/ui": path.resolve(__dirname, "../../packages/config"),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
        ".mjs": "jsx",
      },
    },
  },
});
