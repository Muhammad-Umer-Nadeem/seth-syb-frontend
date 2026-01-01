// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import Sitemap from 'vite-plugin-sitemap'; 

const hostname = 'https://sethsyb.com';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname,
      dynamicRoutes: [
        '/',
        '/about',
        '/checkout',
        '/product/perfume-123',
      ],
      routes: {
        '/': { changefreq: 'daily', priority: 1.0 },
        '/about': { changefreq: 'monthly', priority: 0.8 },
        '/checkout': { changefreq: 'weekly', priority: 0.7 },
        '*': { changefreq: 'weekly', priority: 0.7 },
      },
      robots: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/checkout'],
          sitemap: `${hostname}/sitemap.xml`,
        },
      ],
    }),
  ],
});