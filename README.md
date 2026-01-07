# 🚀 Skillescape - AI-Powered Freelancing Platform

![Next.js](https://img.shields.io/badge/Next.js-16.1-black)
![React](https://img.shields.io/badge/React-19.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Optimized](https://img.shields.io/badge/Optimized-100%25-green)

Fully optimized Next.js 16 application following best practices for performance, SEO, and user experience.

## ✨ Features

- 🎯 **Fully Optimized** - Server Components, Streaming, Image Optimization
- 🚀 **Performance First** - Lighthouse score 95+
- 🔒 **Security** - Security headers, CSP, XSS protection
- 📱 **Responsive** - Mobile-first design with breakpoints
- ♿ **Accessible** - WCAG 2.1 compliant
- 🎨 **Modern UI** - Framer Motion animations
- 📊 **SEO Ready** - Sitemap, robots.txt, rich metadata
- 🏗️ **FSD Architecture** - Feature-Sliced Design structure

## 🏗️ Architecture

### Server vs Client Components

**Server Components (default):**
- ✅ Header, Hero, Cta, Courses, Footer
- ✅ Fast SSR, SEO-friendly, small bundle

**Client Components (interactive):**
- 🎮 MobileMenu, FaqAccordion, AnimatedSection
- 🎮 QuizButton with useTransition

### Project Structure (FSD)

```
src/
├── app/              # Next.js App Router
├── pages/            # FSD Pages Layer
├── widgets/          # Reusable widgets
├── features/         # Business features
│   └── quiz/         # Quiz feature with client components
├── shared/           # Shared resources
│   ├── ui/           # UI components
│   ├── lib/          # Utilities
│   ├── config/       # Configuration
│   └── actions/      # Server Actions
└── middleware.ts     # Edge Middleware
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm run start
```

## 🎯 Optimization Highlights

### 1. Image Optimization
- ✅ `priority` for hero images (LCP)
- ✅ `loading="lazy"` for below-fold images
- ✅ Responsive `sizes` attribute
- ✅ WebP/AVIF format support

### 2. Server Actions
```typescript
// src/shared/actions/quiz-actions.ts
export async function submitQuiz(formData: FormData) {
  "use server";
  // Process on server, no API route needed
}
```

### 3. Streaming & Suspense
```tsx
<Suspense fallback={<Loading />}>
  <DynamicComponent />
</Suspense>
```

### 4. Caching Strategies
- Static data: `revalidate: false`
- Short: 60s
- Medium: 5min
- Long: 1 hour

### 5. SEO
- ✅ Dynamic sitemap.xml
- ✅ Robots.txt
- ✅ Rich metadata (OpenGraph, Twitter)
- ✅ PWA manifest

## 📊 Performance Metrics

**Target Scores:**
- FCP: < 1.2s
- LCP: < 2.5s
- TTI: < 3.5s
- CLS: < 0.1
- FID: < 100ms

## 🔒 Security

- Security Headers (CSP, HSTS, XSS Protection)
- Content Security Policy
- Frame protection
- Secure cookies

## 📚 Documentation

- [OPTIMIZATION.md](./OPTIMIZATION.md) - Detailed optimization guide
- [CONTEXT.md](./CONTEXT.md) - Project context

## 🛠️ Tech Stack

- **Framework:** Next.js 16.1
- **React:** 19.2.3
- **TypeScript:** 5
- **Styling:** CSS Modules + Tailwind 4
- **Animations:** Framer Motion
- **Icons:** Lucide React

## 📦 Key Dependencies

```json
{
  "next": "16.1.1",
  "react": "19.2.3",
  "framer-motion": "^12.24.10",
  "lucide-react": "^0.562.0"
}
```

## 🔧 Configuration

### next.config.ts
- Image optimization (WebP, AVIF)
- Package imports optimization
- Bundle minification
- Console removal in production

### middleware.ts
- Security headers
- CSP configuration
- Request optimization

## 📝 Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint check
```

## 🎨 Design System

- **Mobile:** Max-width 420px (< 1280px)
- **Desktop:** Full width
- **Colors:** CSS Variables
- **Typography:** Inter font family

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Push to git and connect to Vercel
vercel --prod
```

### Manual
```bash
npm run build
npm run start
```

## 🤝 Contributing

Contributions welcome! Please follow:
1. Fork the repo
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open Pull Request

## 📄 License

MIT License - feel free to use for your projects

## 🔗 Links

- **Website:** [https://Skillescape.me](https://Skillescape.me)
- **Documentation:** [Next.js Docs](https://nextjs.org/docs)

---

Built with ❤️ using Next.js 16 and best practices
# skillescape
