import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    "process.env.REACT_APP_RADIO_API_KEY": JSON.stringify(
      process.env.REACT_APP_RADIO_API_KEY
    ),
  },
});
