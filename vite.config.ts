import { defineConfig } from 'vite'
import path from "path";
import react from '@vitejs/plugin-react'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  resolve: {
    alias: {
      "@pages": path.resolve("src/pages"),
      "@components": path.resolve("src/components"),
      "@atoms": path.resolve("src/atoms"),
      "@hooks": path.resolve("src/hooks"),
      "@utils": path.resolve("src/utils"),
      "@assets": path.resolve("src/assets"),
      "@locales": path.resolve("src/locales"),
      "@lib": path.resolve("src/lib"),
    },
  },
})
