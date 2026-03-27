import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-select', '@radix-ui/react-switch'],
          'admin': [
            './src/pages/admin/AdminDashboard',
            './src/pages/admin/AdminNotices',
            './src/pages/admin/AdminEvents',
            './src/pages/admin/AdminGallery',
            './src/pages/admin/AdminDownloads',
            './src/pages/admin/AdminFaculty',
            './src/pages/admin/AdminMessages',
            './src/pages/admin/AdminBanners',
            './src/pages/admin/AdminFeeStructure',
            './src/pages/admin/AdminScholarships',
            './src/pages/admin/AdminSamplePapers',
          ],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
}));
