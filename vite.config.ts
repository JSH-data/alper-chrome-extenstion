import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        background: "src/background/index.ts",
      },
      output: {
        entryFileNames: "scripts/[name].js",
      },
    },
  },
  plugins: [
    react(),
    createHtmlPlugin({
      minify: false,
      pages: [
        {
          entry: "src/popup/index.tsx",
          filename: "index.html",
          template: "index.html",
        },
      ],
    }),
  ],
});
