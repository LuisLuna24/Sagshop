// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

export default defineConfig({
  integrations: [
    react() 
  ],

  vite: {
    plugins: [
      tailwindcss() 
    ],
    ssr: {
      // Agregamos react-hot-toast junto a sileo
      noExternal: ['react-hot-toast'] 
    }
  }
});