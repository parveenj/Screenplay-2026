// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://parveenj.github.io/Screenplay-2026/",
  base: "/Screenplay-2026/",
  vite: {
    plugins: [tailwindcss()],
  },
});