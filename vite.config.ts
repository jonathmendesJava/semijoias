
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Base é importante para deploy em subpastas
  base: "./",
  build: {
    // Gera source maps para melhor debugging
    sourcemap: true,
    // Otimiza o tamanho do pacote de saída
    chunkSizeWarningLimit: 1000,
  },
});
