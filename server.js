// server.js
import express from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SEO_DATA } from './src/SeoConfig.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProd = process.env.NODE_ENV === 'production';
const BASE_URL = process.env.PUBLIC_SITE_URL || 'http://localhost:3000';
const DEFAULT_IMAGE = `${BASE_URL}/og-default.jpg`;

const ROUTE_MATCHERS = [
  { key: 'home', match: (p) => p === '/' || p === '' },
  { key: 'about', match: (p) => p === '/about' },
  { key: 'checkout', match: (p) => p === '/checkout' },
  // Special: product pages – we'll handle dynamically below
];

function escapeHtml(text = '') {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return String(text).replace(/[&<>"']/g, (c) => map[c]);
}

function generateMetaTags(meta) {
  const tags = [];
  tags.push(`    <title>${escapeHtml(meta.title)}</title>`);
  tags.push(`    <meta name="description" content="${escapeHtml(meta.description)}" />`);
  tags.push(`    <meta property="og:title" content="${escapeHtml(meta.title)}" />`);
  tags.push(`    <meta property="og:description" content="${escapeHtml(meta.description)}" />`);
  tags.push(`    <meta property="og:image" content="${escapeHtml(meta.image)}" />`);
  tags.push(`    <meta property="og:url" content="${escapeHtml(meta.url)}" />`);
  tags.push(`    <meta property="og:type" content="website" />`);
  tags.push(`    <meta property="og:site_name" content="Saith Syb" />`);
  tags.push(`    <meta name="twitter:card" content="summary_large_image" />`);
  tags.push(`    <meta name="twitter:title" content="${escapeHtml(meta.title)}" />`);
  tags.push(`    <meta name="twitter:description" content="${escapeHtml(meta.description)}" />`);
  tags.push(`    <meta name="twitter:image" content="${escapeHtml(meta.image)}" />`);
  tags.push(`    <link rel="canonical" href="${escapeHtml(meta.url)}" />`);
  return tags.join('\n');
}

function getMetaForRoute(pathname) {
  if (!pathname || pathname === '') pathname = '/';

  // Normalize: remove trailing slash
  if (pathname !== '/' && pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1);
  }

  // Check static routes first
  const matched = ROUTE_MATCHERS.find((m) => m.match(pathname));
  if (matched) {
    const data = SEO_DATA[matched.key] || SEO_DATA.default;
    return {
      title: data.title,
      description: data.description,
      image: data.image
        ? `${BASE_URL}${data.image.startsWith('/') ? data.image : '/' + data.image}`
        : DEFAULT_IMAGE,
      url: `${BASE_URL}${pathname === '/' ? '' : pathname}`,
    };
  }

  // Dynamic: Product Detail Page – /product/your-slug-here
  if (pathname.startsWith('/product/')) {
    const slug = pathname.slice('/product/'.length); // e.g. "iphone-15-pro"
    
    if (slug) {
      // Convert slug to title case: iphone-15-pro → Iphone 15 Pro
      const productName = slug
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      const productData = SEO_DATA['product-detail'] || SEO_DATA.default;

      return {
        title: `${productName} | Saith Syb`,
        description: `Buy ${productName} online at Saith Syb. Premium quality, fast shipping, and best prices in Pakistan.`,
        image: productData.image
          ? `${BASE_URL}${productData.image.startsWith('/') ? productData.image : '/' + productData.image}`
          : DEFAULT_IMAGE,
        url: `${BASE_URL}${pathname}`,
      };
    }
  }

  // Fallback to default
  const data = SEO_DATA.default;
  return {
    title: data.title,
    description: data.description,
    image: data.image
      ? `${BASE_URL}${data.image.startsWith('/') ? data.image : '/' + data.image}`
      : DEFAULT_IMAGE,
    url: `${BASE_URL}${pathname === '/' ? '' : pathname}`,
  };
}

async function createServer() {
  const app = express();
  let vite;

  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    app.use('/assets', express.static(path.resolve(__dirname, 'dist/assets')));
    app.use(express.static(path.resolve(__dirname, 'dist'), { index: false }));
  }

  app.use(express.static(path.resolve(__dirname, 'public')));

  // Express v5 compatible catch-all route
  app.get('/*', async (req, res) => {
    try {
      const pathname = req.path;

      const meta = getMetaForRoute(pathname);
      const metaTags = generateMetaTags(meta);

      let template;
      if (!isProd) {
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(req.originalUrl, template);
      } else {
        template = fs.readFileSync(path.resolve(__dirname, 'dist/index.html'), 'utf-8');
      }

      const html = template.replace('<!-- META_TAGS -->', metaTags);

      res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
    } catch (e) {
      if (vite) vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).send('Server Error');
    }
  });

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`\n🚀 SSR Server running at http://localhost:${port}`);
    console.log(`   Dynamic SEO with slug support active! 🎉\n`);
  });
}

createServer();