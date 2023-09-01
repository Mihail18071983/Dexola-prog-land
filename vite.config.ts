import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import scss from "rollup-plugin-scss";
import resolve from "@rollup/plugin-node-resolve";
// https://vitejs.dev/config/
export default defineConfig({
  root: '/',
  plugins: [
    svgr(),
    react(),
    scss(),
    resolve({
      extensions: [".js", ".jsx", ".ts", ".tsx", ".scss"],
    }),
  ],
});
