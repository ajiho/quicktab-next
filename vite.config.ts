import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/js/index.ts"),
      name: "QuickTab",
      fileName: "quicktab",
    },
    rollupOptions: {
      external: ["jquery"],
      output: {
        globals: {
          jquery: "$",
        },
      },
    },
  },
});
