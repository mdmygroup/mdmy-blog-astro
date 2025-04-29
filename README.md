# MDMY Blog - Professional Astro Blog Repository

A professional, Markdown-first blog built with [Astro](https://astro.build). This project provides a clean, SEO-optimized, accessible, and responsive blog website with content collections for efficient content management.

## Features

- 🚀 **Built with Astro v3+** - Fast, modern static site generation
- 📝 **Markdown-First Content** - Easy authoring with Markdown/MDX
- 🗂️ **Content Collections** - Type-safe schemas for your content
- 🎨 **TailwindCSS** - Utility-first CSS framework with dark mode
- 📱 **Fully Responsive** - Mobile-first design approach
- ⚡ **Optimized Performance** - Minimal JavaScript, optimized assets
- 🔍 **SEO Ready** - Meta tags, sitemap, and RSS feed
- ♿ **Accessible** - ARIA attributes and semantic HTML
- 🌙 **Dark Mode** - Toggle between light and dark themes

## 📁 Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── content/         # Content type definitions 
│   ├── layouts/         # Page layouts
│   ├── pages/           # Routes and pages
│   └── styles/          # Global styles
└── content/
    └── blog/            # Blog posts in Markdown
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (LTS)
- npm or yarn or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/mdmy-blog-astro.git
cd mdmy-blog-astro

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to see your blog.

## 📝 Content Management

Add your blog posts as Markdown files in the `content/blog/` directory. Each post should include the following frontmatter:

```markdown
---
title: "Your Blog Post Title"
description: "A brief description of your blog post"
pubDate: 2025-04-28
updatedDate: 2025-04-28 # Optional
heroImage: "/path/to/image.jpg" # Optional
alt: "Image description for accessibility" # Optional
tags: ["tag1", "tag2"] # Optional
draft: false # Optional (true = not published)
---

Your blog post content here...
```

## 🛠️ Customization

### Site Configuration

Edit the `astro.config.mjs` file to update your site URL and other Astro settings.

### Theme Customization

Modify the Tailwind theme in `tailwind.config.js` to customize colors, typography, and more.

### Components

All UI components are in the `src/components/` directory. Edit these to customize the appearance of your blog.

## 📦 Building for Production

```bash
# Build the site
npm run build

# Preview the production build
npm run preview
```

The built site will be in the `dist/` directory.

## 🚀 Deployment

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/mdmy-blog-astro)

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/mdmy-blog-astro)

### Manual Deployment

For GitHub Pages or other hosting options, use the following GitHub Actions workflow:

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - name: Install dependencies
        run: npm ci
      - name: Build website
        run: npm run build
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 📄 License

MIT License - Feel free to use, modify, and distribute as you wish.

## 🙏 Acknowledgments

- [Astro](https://astro.build)
- [TailwindCSS](https://tailwindcss.com)
- [heroicons](https://heroicons.com)