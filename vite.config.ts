import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    minify: false,
    rollupOptions: {
      treeshake: false,
      input: {
        background: "src/background/index.ts",
        leetcodes: "src/leetcode/index.ts",
        constants: "src/utils/constants.ts",
        programmers: "src/programmers/index.ts",
        storage: "src/utils/storage.ts",
        commit: "src/utils/commit.ts",
        github: "src/utils/github.ts",
        parser: "src/utils/parser.ts",
        api: "src/utils/api.ts",
        permission: "src/utils/permission.ts",
      },
      output: {
        entryFileNames: "scripts/[name].js",
      },
    },
  },
  plugins: [
    react(),
    tsconfigPaths(),
    createHtmlPlugin({
      minify: false,
      pages: [
        {
          entry: "src/popup/index.tsx",
          filename: "index.html",
          template: "index.html",
          // injectOptions: {
          //   data: {
          //     injectScript: `<script src="src/utils/storage.ts"></script>`,
          //   },
          // },
        },
      ],
    }),
  ],
});

// function getInputFiles(dir) {
//   const fs = require('fs');
//   const path = require('path');
//
//   const files = fs.readdirSync(dir);
//   const inputFiles = {};
//
//   files.forEach(file => {
//     if (file.endsWith('.ts')) {
//       const name = file.replace('.ts', '');
//       inputFiles[name] = path.resolve(__dirname, `${dir}/${file}`);
//     }
//   });
//
//   return inputFiles;
// }
