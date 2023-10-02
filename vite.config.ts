import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "src/data",
          dest: "src/",
        },
        {
          src: "src/assets/images",
          dest: "src/assets",
        },
      ],
    }),
  ],
});
