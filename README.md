# JLStudios Website

Professional one-page website for JLStudios web design studio. Built with React, TypeScript, Vite, and TailwindCSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Production Deployment

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to Netlify
3. Configure redirects for SPA routing (add `_redirects` file to `public/` with `/* /index.html 200`)

### Vercel
1. Import the repository to Vercel
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist/`

## 🔧 Configuration

### Required Updates Before Launch

1. **WhatsApp Number** - Replace `YOUR_NUMBER` in:
   - `src/components/Header.tsx` (lines 82, 139)
   - `src/components/Hero.tsx` (line 60)
   - `src/components/Contact.tsx` (line 80)
   - Format: international without `+` (e.g., `523331234567`)

2. **Formspree Form ID** - Replace `YOUR_FORM_ID` in:
   - `src/components/Contact.tsx` (line 62)
   - Get your ID from: https://formspree.io

3. **Open Graph Image** - Replace in `index.html`:
   - Upload `og-image.jpg` to `/public/`
   - Already configured to use `/og-image.jpg` (line 18)
   - Recommended size: 1200x630px

4. **Domain in Files**:
   - `public/sitemap.xml` - Replace `https://yourdomain.com/`
   - `index.html` - Update canonical URL (line 10) and JSON-LD (lines 37, 60)

5. **Contact Information in JSON-LD** - Update in `index.html`:
   - Telephone number (line 48)
   - Social media URLs (lines 52-56)

6. **Google Analytics** (Optional) - Add in `index.html` before closing `</head>`:
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

## 🎨 Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS + CSS Variables
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Form Validation**: React Hook Form + Zod
- **Routing**: React Router DOM
- **Icons**: Lucide React

## 📂 Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   ├── Header.tsx       # Sticky navigation
│   ├── Hero.tsx         # Hero section
│   ├── Contact.tsx      # Contact form with validation
│   └── ...              # Other sections
├── pages/               # Route pages
│   ├── Index.tsx        # Main landing page
│   └── NotFound.tsx     # 404 page
├── i18n.ts              # Centralized translations (EN/ES)
├── index.css            # Global styles + design tokens
└── main.tsx             # App entry point

public/
├── sitemap.xml          # SEO sitemap
├── robots.txt           # Search engine directives
└── og-image.jpg         # Social media preview (add yours)
```

## 🌐 i18n (Bilingual Support)

The site supports English and Spanish via a centralized dictionary in `src/i18n.ts`. Language toggle is in the header. All text is swapped without page reload.

## 🛡️ Security Features

- Honeypot spam protection on contact form
- Client-side validation with Zod
- No email addresses exposed in HTML
- Safe external link handling (`rel="noopener noreferrer"`)

## 📊 Performance

- Optimized images with lazy loading
- Tree-shaken CSS (only used Tailwind classes)
- Minimal bundle size (no unused dependencies)
- Fast load times (<2s on mobile)

## ♿ Accessibility

- Semantic HTML5 landmarks
- ARIA labels on interactive elements
- Keyboard navigation support
- WCAG 2.1 AA compliant color contrast
- Focus indicators on all interactive elements

## 📈 SEO Optimizations

- Semantic HTML structure
- Meta tags (title, description, OG, Twitter)
- JSON-LD structured data (Organization, Service)
- Sitemap and robots.txt
- Alt text on all images
- Mobile-first responsive design

## 🔍 Lighthouse Targets

- Performance: ≥ 90
- Accessibility: ≥ 95
- Best Practices: ≥ 95
- SEO: ≥ 95

## 📝 License

© 2025 JLStudios. All rights reserved.

## 💬 Support

For questions or support, contact via WhatsApp or the contact form on the website.
