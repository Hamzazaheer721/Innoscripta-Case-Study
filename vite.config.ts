import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    // host: "0.0.0.0", // Bind to all network interfaces
    open: true,
    host: true,
    strictPort: true,
    port: 8080,
  },
});
