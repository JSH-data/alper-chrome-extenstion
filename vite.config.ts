import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";
import tsconfigPaths from "vite-tsconfig-paths";
import * as fs from "fs";

export default defineConfig(() => {
  function getInputFiles(dir = "src/utils") {
    const files = fs.readdirSync(dir);
    const inputFiles: { [key: string]: string } = {};

    files.forEach((file) => {
      if (file.endsWith(".ts")) {
        const name = file.replace(".ts", "");
        inputFiles[name] = `${dir}/${file}`;
      }
    });

    return inputFiles;
  }

  const input: { [key: string]: string } = {
    leetcodes: "src/leetcode/index.ts",
    programmers: "src/programmers/index.ts",
    ...getInputFiles(),
  };

  return {
    build: {
      minify: false,
      rollupOptions: {
        treeshake: false,
        input,
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
  };
});
