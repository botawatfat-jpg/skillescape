# JobJam Frontend - Architecture Context

This document contains critical architectural decisions and rules for the project. **All rules here must be strictly followed.**

---

## Architecture: Feature-Sliced Design (FSD)

This project uses **Feature-Sliced Design (FSD)** methodology combined with **Next.js App Router**.

### Core FSD Principles

1. **Layers** (from top to bottom):
   - `app` - Application initialization, providers, global styles
   - `pages` - Full page compositions (FSD pages, NOT Next.js pages)
   - `widgets` - Large, independent UI blocks
   - `features` - User interactions and business logic
   - `entities` - Business entities and their logic
   - `shared` - Reusable utilities, UI kit, API clients

2. **Import Rules** (Strictly enforced):
   - ❌ Lower layers CANNOT import from upper layers
   - ✅ Upper layers CAN import from lower layers
   - ✅ Layers can import from themselves (same layer)
   
   ```
   app → pages → widgets → features → entities → shared
   (Can only import →)
   ```

3. **Slice Structure**:
   ```
   pages/
   ├── home/
   │   ├── index.ts         # Public API
   │   ├── ui/              # UI components
   │   ├── model/           # State, stores, business logic
   │   ├── api/             # API requests specific to this slice
   │   └── lib/             # Helper functions
   ```

---

## Next.js Integration

### Folder Structure

```
frontend/
├── app/                    # Next.js App Router (routing only)
│   ├── layout.tsx
│   ├── page.tsx           # Re-exports from src/pages
│   └── api/               # API routes
├── pages/                 # EMPTY (prevents Next.js conflict)
│   └── README.md
├── src/                   # FSD Architecture
│   ├── app/              # FSD app layer
│   ├── pages/            # FSD pages layer (NOT Next.js pages)
│   ├── widgets/
│   ├── features/
│   ├── entities/
│   └── shared/
├── CONTEXT.md            # This file
└── package.json
```

### Critical Rules

1. **Next.js `app/` folder** (root):
   - Located in project root
   - Contains ONLY routing logic and re-exports
   - Each route file imports from `src/pages`
   - Example:
     ```tsx
     // app/home/page.tsx
     export { HomePage as default, metadata } from '@/pages/home';
     ```

2. **Empty `pages/` folder** (root):
   - MUST exist and remain empty
   - Prevents Next.js from treating `src/pages/` as Pages Router
   - Contains only README.md explaining its purpose
   - ⚠️ **DO NOT DELETE**

3. **FSD `src/pages/`**:
   - Part of FSD architecture (NOT Next.js routing)
   - Contains actual page components and logic
   - Exports components to Next.js `app/` folder

4. **Middleware & Instrumentation**:
   - Must be in project root (alongside `app/` and `pages/`)
   - Not inside `src/`

---

## Path Aliases

Configure in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/app/*": ["./src/app/*"],
      "@/pages/*": ["./src/pages/*"],
      "@/widgets/*": ["./src/widgets/*"],
      "@/features/*": ["./src/features/*"],
      "@/entities/*": ["./src/entities/*"],
      "@/shared/*": ["./src/shared/*"]
    }
  }
}
```

---

## Development Rules

### 1. Creating New Pages

When adding a new page:

1. Create the page in `src/pages/[page-name]/`:
   ```
   src/pages/about/
   ├── index.ts
   └── ui/
       └── about-page.tsx
   ```

2. Export from `src/pages/about/index.ts`:
   ```tsx
   export { AboutPage as default } from './ui/about-page';
   export { metadata } from './ui/about-page';
   ```

3. Create route in Next.js `app/about/page.tsx`:
   ```tsx
   export { default, metadata } from '@/pages/about';
   ```

### 2. Creating Features

- Features should be isolated and reusable
- Each feature has its own folder in `src/features/`
- Features can use entities and shared, but NOT pages or widgets

### 3. Creating Widgets

- Widgets are large UI blocks
- Can use features, entities, and shared
- Cannot use pages

### 4. Shared Resources

- Common UI components go in `src/shared/ui/`
- API clients go in `src/shared/api/`
- Utilities go in `src/shared/lib/`
- Types go in `src/shared/types/`
- Styles and CSS variables go in `src/shared/styles/`

---

## Styling Architecture

### CSS Modules

**CRITICAL**: All component styles MUST use CSS Modules.

1. **Naming Convention**:
   - Component styles: `component-name.module.css`
   - Always use `.module.css` extension
   - Example: `button.module.css`, `hero.module.css`

2. **Import Pattern**:
   ```tsx
   import styles from './component.module.css';
   
   export const Component = () => {
     return <div className={styles.container}>...</div>;
   };
   ```

3. **Benefits**:
   - ✅ Scoped styles (no global conflicts)
   - ✅ Type-safe class names
   - ✅ Better performance
   - ✅ Easier to maintain

### CSS Variables

**Location**: `src/shared/styles/variables.module.css`

All design tokens are stored as CSS variables for consistency and reusability:

#### Color Variables
```css
/* Brand Colors */
--color-white: #F4F4F5;           /* Белый фон */
--color-accent-blue: #2563EB;     /* Акцентный синий */
--color-accent-orange: #F59E0B;   /* Акцентный оранжевый */
--color-gray: #71717A;            /* Серый */
--color-black: #171717;           /* Черный текст */
--color-green: #30A46C;           /* Зеленый */
--color-footer-bg: #1E293B;       /* Фон футера */
```

#### Spacing Variables
```css
--spacing-xs: 0.25rem;
--spacing-sm: 0.5rem;
--spacing-md: 1rem;
--spacing-lg: 1.5rem;
--spacing-xl: 2rem;
--spacing-2xl: 3rem;
--spacing-3xl: 4rem;
--spacing-4xl: 6rem;
```

#### Typography Variables
```css
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
--text-3xl: 1.875rem;
--text-4xl: 2.25rem;
--text-5xl: 3rem;

--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

#### Other Design Tokens
```css
/* Border radius */
--radius-sm: 0.375rem;
--radius-md: 0.5rem;
--radius-lg: 0.75rem;
--radius-full: 9999px;

/* Shadows */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);

/* Transitions */
--transition-fast: 150ms ease-in-out;
--transition-base: 200ms ease-in-out;
--transition-slow: 300ms ease-in-out;
```

### Usage Rules

1. **ALWAYS use CSS variables** for:
   - Colors
   - Spacing
   - Typography sizes
   - Border radius
   - Shadows
   - Transitions

2. **NEVER hardcode** values that are defined as variables

3. **Example of correct usage**:
   ```css
   .button {
     padding: var(--spacing-md) var(--spacing-xl);
     background-color: var(--color-primary);
     border-radius: var(--radius-full);
     font-size: var(--text-base);
     transition: all var(--transition-base);
   }
   ```

4. **Example of INCORRECT usage**:
   ```css
   /* ❌ DON'T DO THIS */
   .button {
     padding: 16px 32px;
     background-color: #6366f1;
     border-radius: 9999px;
   }
   ```

### Global Styles

**Location**: `app/globals.css`

- Imports CSS variables from `src/shared/styles/variables.module.css`
- Contains only:
  - CSS reset/normalization
  - Global font settings
  - Body styles
- **NO component-specific styles** in globals.css

---

## Migration Notes

### From Standard Next.js to FSD + Next.js

If migrating existing Next.js code:

1. Keep `app/` folder in root for routing
2. Move page logic to `src/pages/`
3. Extract reusable features to `src/features/`
4. Extract business entities to `src/entities/`
5. Move shared code to `src/shared/`

---

## References

- [Feature-Sliced Design Documentation](https://feature-sliced.design/)
- [FSD + Next.js Guide](https://feature-sliced.design/docs/guides/tech/with-nextjs)
- [Next.js App Router](https://nextjs.org/docs/app)

---

## Project Structure Example

```
src/
├── app/                          # FSD app layer
├── pages/                        # FSD pages layer
│   └── home/
│       ├── index.ts             # Public API exports
│       └── ui/
│           └── home-page.tsx    # Page composition
├── widgets/                     # Large UI blocks
│   ├── hero/
│   │   ├── index.ts
│   │   └── ui/
│   │       ├── hero.tsx
│   │       └── hero.module.css
│   ├── courses/
│   ├── testimonials/
│   └── how-it-works/
├── features/                    # User interactions
├── entities/                    # Business entities
└── shared/                      # Reusable code
    ├── ui/                      # UI kit
    │   ├── button/
    │   │   ├── index.ts
    │   │   ├── button.tsx
    │   │   └── button.module.css
    │   ├── card/
    │   └── container/
    ├── styles/                  # CSS variables
    │   └── variables.module.css
    ├── api/                     # API clients
    ├── lib/                     # Utilities
    └── types/                   # TypeScript types
```

---

## Typography

### Fonts

We use **Inter** as the primary font for the entire application.

**Setup**: Inter is loaded via `next/font/google` in `app/layout.tsx` for optimal performance.

**Usage**:
```css
/* In CSS Modules, use the variable */
.text {
  font-family: var(--font-sans);
}
```

**Benefits**:
- ✅ Automatic font optimization by Next.js
- ✅ No layout shift (font loaded instantly)
- ✅ Subset optimization (only Latin characters)
- ✅ Self-hosted (no external requests)

---

## UI Components Library

### Icons

We use **lucide-react** for all icons in the project.

**Installation**: Already installed (`lucide-react`)

**Usage**:
```tsx
import { ChevronRight, Users, Star, ArrowRight } from 'lucide-react';

<ChevronRight size={20} />
<Users className={styles.icon} />
```

**Rules**:
- ✅ Always use lucide-react icons for consistency
- ✅ Pass size prop for icon sizing
- ✅ Use className for styling when needed
- ❌ Don't mix different icon libraries

---

## Current Components

### Shared UI Components

#### Container
- **Location**: `src/shared/ui/container/`
- **Purpose**: Responsive container with max-width
- **Usage**: Wraps content sections

#### Button
- **Location**: `src/shared/ui/button/`
- **Variants**: primary (blue), secondary (outlined)
- **Sizes**: small, medium, large
- **Usage**: CTAs, navigation actions

### Widgets

#### Header
- **Location**: `src/widgets/header/`
- **Features**:
  - Sticky navigation
  - Logo with gradient icon
  - Navigation menu
  - Login link + CTA button
  - Hover effects with underline animation

#### Hero
- **Location**: `src/widgets/hero/`
- **Features**:
  - Two-column grid layout
  - Title with orange highlight for "AI-Powered"
  - CTA button with arrow icon
  - Image placeholder (right column)
  - Floating badges (80k Users, 4.5 Trustpilot)
  - Responsive (single column on mobile)

---

---

## Next.js 15/16 Optimization Strategy

### **CRITICAL**: This project is fully optimized following Next.js 15/16 best practices.

This section outlines the optimization architecture that MUST be maintained and followed for all future development.

---

### Server vs Client Components Philosophy

**Default Rule**: **ALL components are Server Components unless they need client-side interactivity.**

#### Server Components (Default)
```tsx
// NO "use client" directive
export const MyComponent = () => {
  return <div>Server rendered content</div>;
};
```

**Use Server Components for:**
- ✅ Static content display
- ✅ Data fetching
- ✅ Metadata
- ✅ SEO content
- ✅ Layout components
- ✅ Typography and text
- ✅ Images and media
- ✅ Lists and grids

**Benefits:**
- ⚡ Zero JavaScript sent to client
- 🎯 Better SEO (fully rendered HTML)
- 📦 Smaller bundle size
- 🚀 Faster initial page load

#### Client Components (Only When Needed)

```tsx
"use client"; // Required directive

import { useState } from "react";

export const InteractiveComponent = () => {
  const [state, setState] = useState(0);
  return <button onClick={() => setState(s => s + 1)}>{state}</button>;
};
```

**Use Client Components ONLY for:**
- 🎮 Interactive elements (onClick, onChange, etc.)
- 📊 State management (useState, useReducer)
- 🎨 Animations (Framer Motion, etc.)
- 🔄 Effects (useEffect)
- 🎯 Browser APIs (window, document, localStorage)
- 📍 Hooks (useRouter, usePathname, useSearchParams)

**Current Client Components in Project:**
- `src/widgets/header/ui/mobile-menu.tsx` - Mobile menu state
- `src/widgets/faq/ui/faq-accordion.tsx` - Accordion state
- `src/shared/ui/animated-section/` - Framer Motion animations
- `src/features/quiz/ui/quiz-button.tsx` - useTransition for navigation
- `src/shared/ui/loading/` - Lottie animations
- `src/shared/ui/web-vitals/` - Performance tracking

---

### Server Actions

**Location**: `src/shared/actions/`

Server Actions replace traditional API routes for form submissions and server-side operations.

#### Creating Server Actions

```typescript
// src/shared/actions/my-actions.ts
"use server";

export async function myServerAction(formData: FormData) {
  // This runs ONLY on the server
  const data = Object.fromEntries(formData.entries());
  
  // Database operations, API calls, etc.
  await saveToDatabase(data);
  
  return { success: true };
}
```

#### Using Server Actions

```tsx
// Client Component
"use client";

import { myServerAction } from "@/shared/actions/my-actions";
import { useTransition } from "react";

export function MyForm() {
  const [isPending, startTransition] = useTransition();
  
  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const result = await myServerAction(formData);
      // Handle result
    });
  };
  
  return <form action={handleSubmit}>...</form>;
}
```

**Benefits:**
- ✅ No need for API routes
- 🔒 Secure (code runs only on server)
- ⚡ Progressive enhancement
- 🎯 Type-safe with TypeScript
- 🔄 Works with useTransition for optimistic UI

**Current Server Actions:**
- `quiz-actions.ts` - Quiz submission, email validation, newsletter subscription

---

### Image Optimization

**CRITICAL Rules for Images:**

#### Hero/Above-the-Fold Images
```tsx
<Image
  src="/hero.png"
  alt="Hero"
  width={480}
  height={480}
  priority // ✅ CRITICAL: Loads immediately
  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 480px"
/>
```

#### Below-the-Fold Images
```tsx
<Image
  src="/content.png"
  alt="Content"
  width={300}
  height={300}
  loading="lazy" // ✅ Lazy loads when visible
  sizes="(max-width: 768px) 100vw, 300px"
/>
```

**Key Principles:**
1. **priority** for LCP images (hero, main content)
2. **loading="lazy"** for everything else
3. **sizes** attribute for responsive images
4. Always specify **width** and **height**

**Configuration in next.config.ts:**
```typescript
images: {
  formats: ["image/webp", "image/avif"],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  minimumCacheTTL: 31536000, // 1 year
}
```

---

### Data Fetching & Caching

**Location**: `src/shared/lib/cache.ts`

#### Caching Strategies

```typescript
// Static data (never changes)
const staticData = await fetch('/api/data', {
  next: { revalidate: false }
});

// Short cache (1 minute)
const shortCache = await fetch('/api/data', {
  next: { revalidate: 60 }
});

// Medium cache (5 minutes)
const mediumCache = await fetch('/api/data', {
  next: { revalidate: 300 }
});

// Long cache (1 hour)
const longCache = await fetch('/api/data', {
  next: { revalidate: 3600 }
});

// No cache (always fresh)
const noCache = await fetch('/api/data', {
  cache: 'no-store'
});
```

**Use CacheStrategy helper:**
```typescript
import { CacheStrategy } from '@/shared/lib';

const data = await fetch('/api/courses', CacheStrategy.MEDIUM);
```

---

### Streaming & Suspense

Use Suspense boundaries for progressive rendering:

```tsx
import { Suspense } from 'react';

export default function Page() {
  return (
    <>
      <Header /> {/* Renders immediately */}
      
      <Suspense fallback={<Loading />}>
        <HeavyComponent /> {/* Streams in when ready */}
      </Suspense>
    </>
  );
}
```

**Dynamic Imports for Heavy Components:**
```tsx
import dynamic from 'next/dynamic';

const Faq = dynamic(() => import('@/widgets/faq').then(m => m.Faq), {
  ssr: true, // Server-side render for SEO
  loading: () => <div style={{ minHeight: '400px' }} />,
});
```

---

### SEO Optimization

#### Metadata (in layout.tsx or page.tsx)

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
  keywords: ['keyword1', 'keyword2'],
  openGraph: {
    title: 'OG Title',
    description: 'OG Description',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
  },
};
```

#### Dynamic Metadata

```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  const data = await fetchData(params.id);
  
  return {
    title: data.title,
    description: data.description,
  };
}
```

**SEO Files:**
- `app/sitemap.ts` - Automatic sitemap.xml generation
- `app/robots.ts` - Automatic robots.txt generation
- `app/manifest.ts` - PWA manifest

---

### Security (Middleware)

**Location**: `src/middleware.ts`

The middleware adds security headers to all responses:

```typescript
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  
  // Security headers
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Strict-Transport-Security', 'max-age=63072000');
  response.headers.set('Content-Security-Policy', '...');
  
  return response;
}
```

**What it provides:**
- 🔒 XSS Protection
- 🛡️ Clickjacking Protection
- 🔐 HTTPS Enforcement
- 🎯 Content Security Policy

---

### Performance Monitoring

**Location**: `src/shared/ui/web-vitals/`

Web Vitals are automatically tracked and sent to analytics:

```tsx
// app/layout.tsx
import { WebVitals } from '@/shared/ui/web-vitals';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <WebVitals /> {/* Tracks all Core Web Vitals */}
        {children}
      </body>
    </html>
  );
}
```

**Tracked Metrics:**
- FCP (First Contentful Paint)
- LCP (Largest Contentful Paint)
- CLS (Cumulative Layout Shift)
- FID (First Input Delay)
- TTFB (Time to First Byte)
- INP (Interaction to Next Paint)

---

### Error Handling

**Files:**
- `app/error.tsx` - Error boundary for runtime errors
- `app/not-found.tsx` - Custom 404 page
- `app/loading.tsx` - Loading UI for streaming

#### Error Boundary

```tsx
// app/error.tsx
"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}
```

#### 404 Page

```tsx
// app/not-found.tsx
export default function NotFound() {
  return <div>404 - Page not found</div>;
}
```

---

### Bundle Optimization

**next.config.ts Configuration:**

```typescript
const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  reactStrictMode: true,
};
```

**What it does:**
- 📦 Optimizes package imports (tree-shaking)
- 🗑️ Removes console.log in production
- 🎯 Enables React strict mode for better DX
- ⚡ SWC compiler for faster builds

---

### Typography & Fonts

**Setup in app/layout.tsx:**

```typescript
import { Inter } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});
```

**Benefits:**
- ✅ Automatic optimization
- ✅ Self-hosted (no external requests)
- ✅ Zero layout shift
- ✅ Subset optimization

---

### Development Rules for Future Agents

#### 1. Creating New Pages

```tsx
// ❌ WRONG: Making everything client
"use client";
export default function Page() { /* ... */ }

// ✅ CORRECT: Server component by default
export default function Page() {
  return (
    <div>
      <ServerContent />
      <ClientInteractiveButton /> {/* Only this is client */}
    </div>
  );
}
```

#### 2. Adding Interactivity

```tsx
// Create separate client component
// components/interactive-button.tsx
"use client";
export function InteractiveButton() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}

// Use in server component
// page.tsx
import { InteractiveButton } from './components/interactive-button';
export default function Page() {
  return (
    <div>
      <h1>Server Rendered Title</h1>
      <InteractiveButton /> {/* Client component island */}
    </div>
  );
}
```

#### 3. Forms with Server Actions

```tsx
// actions.ts
"use server";
export async function submitForm(formData: FormData) {
  const email = formData.get('email');
  // Process on server
  return { success: true };
}

// form.tsx
"use client";
import { submitForm } from './actions';
export function Form() {
  return <form action={submitForm}>
    <input name="email" />
    <button type="submit">Submit</button>
  </form>;
}
```

#### 4. Image Optimization

```tsx
// Hero section (above fold)
<Image src="/hero.png" priority sizes="..." />

// Content images (below fold)
<Image src="/content.png" loading="lazy" sizes="..." />

// Always specify width, height, and sizes
```

#### 5. Data Fetching

```tsx
// Server Component - fetch directly
export default async function Page() {
  const data = await fetch('/api/data', CacheStrategy.MEDIUM);
  return <div>{/* render data */}</div>;
}

// Client Component - use useEffect or SWR/React Query
"use client";
export function ClientData() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api/data').then(r => r.json()).then(setData);
  }, []);
  return <div>{/* render data */}</div>;
}
```

---

### Performance Targets

**Core Web Vitals Goals:**
- FCP: < 1.2s
- LCP: < 2.5s
- TTI: < 3.5s
- CLS: < 0.1
- FID: < 100ms

**Bundle Size:**
- First Load JS: < 100KB
- Route bundles: < 50KB each

**Lighthouse Scores:**
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

### Common Utilities

#### Performance Utils (`src/shared/lib/performance.ts`)
- `debounce(fn, delay)` - Debounce function calls
- `throttle(fn, limit)` - Throttle function calls
- `measurePerformance(name, fn)` - Measure execution time
- `lazyLoadOnVisible(element, callback)` - Lazy load on intersection

#### Validation Utils (`src/shared/lib/validation.ts`)
- `isValidEmail(email)` - Email validation
- `isValidPhone(phone)` - Phone validation
- `isValidUrl(url)` - URL validation
- `validateForm(data, schema)` - Form validation with schema

#### Cache Utils (`src/shared/lib/cache.ts`)
- `CacheStrategy` - Predefined cache strategies
- `fetchWithCache(url, options)` - Fetch with caching
- `fetchStatic(url)` - Fetch static data (cached forever)

---

### File Structure After Optimization

```
frontend/
├── app/                              # Next.js App Router
│   ├── layout.tsx                    # Root layout with metadata
│   ├── page.tsx                      # Homepage (re-export from src/pages)
│   ├── loading.tsx                   # Loading UI for streaming
│   ├── error.tsx                     # Error boundary
│   ├── not-found.tsx                 # 404 page
│   ├── sitemap.ts                    # Dynamic sitemap
│   ├── robots.ts                     # Robots.txt
│   └── manifest.ts                   # PWA manifest
├── src/
│   ├── middleware.ts                 # Security headers
│   ├── pages/                        # FSD pages
│   │   └── home/
│   │       ├── index.ts
│   │       └── ui/
│   │           └── home-page.tsx     # Server Component
│   ├── widgets/                      # UI widgets (mostly server)
│   │   ├── header/
│   │   │   └── ui/
│   │   │       ├── header.tsx        # Server Component
│   │   │       └── mobile-menu.tsx   # Client Component
│   │   ├── hero/                     # Server Component
│   │   ├── cta/                      # Server Component
│   │   ├── courses/                  # Server Component
│   │   └── faq/
│   │       └── ui/
│   │           ├── faq.tsx           # Server Component
│   │           └── faq-accordion.tsx # Client Component
│   ├── features/                     # Business features
│   │   └── quiz/
│   │       ├── index.ts
│   │       └── ui/
│   │           └── quiz-button.tsx   # Client Component
│   ├── shared/
│   │   ├── ui/                       # UI kit
│   │   │   ├── button/               # Server Component
│   │   │   ├── loading/              # Client Component
│   │   │   ├── animated-section/     # Client Component
│   │   │   └── web-vitals/           # Client Component
│   │   ├── actions/                  # Server Actions
│   │   │   └── quiz-actions.ts       # "use server"
│   │   ├── lib/                      # Utilities
│   │   │   ├── cache.ts
│   │   │   ├── performance.ts
│   │   │   ├── validation.ts
│   │   │   └── index.ts
│   │   ├── config/
│   │   │   └── text-config.ts
│   │   └── styles/
│   │       └── variables.module.css
├── next.config.ts                    # Optimized config
├── OPTIMIZATION.md                   # Detailed optimization guide
├── CHANGES.md                        # Changelog of optimizations
└── CONTEXT.md                        # This file
```

---

### Key Takeaways

1. **Server Components by Default** - Only use "use client" when absolutely necessary
2. **Server Actions over API Routes** - For forms and server-side operations
3. **Image Optimization** - priority for hero, lazy for rest, always specify sizes
4. **Proper Caching** - Use appropriate revalidation strategies
5. **Security First** - Middleware adds security headers automatically
6. **Performance Monitoring** - Web Vitals tracked automatically
7. **SEO Ready** - Metadata, sitemap, robots.txt configured
8. **Error Handling** - Error boundaries and loading states

---

### Migration & Maintenance

When adding new features:

1. ✅ Start with Server Component
2. ✅ Add "use client" only if you need:
   - State (useState, useReducer)
   - Effects (useEffect)
   - Event handlers (onClick, onChange)
   - Browser APIs
   - Animation libraries
3. ✅ Use Server Actions for forms
4. ✅ Optimize images (priority/lazy + sizes)
5. ✅ Add appropriate metadata
6. ✅ Use caching strategies for data fetching
7. ✅ Test with Web Vitals

---

## Brand Information

**Project Name**: Skillescape (formerly JobJam)  
**Domain**: https://Skillescape.me  
**Purpose**: AI-Powered Freelancing Platform - Teaching AI agents for business tasks

---

## Responsive Design Rules

### Mobile-First Breakpoint

**CRITICAL**: At **1280px and below**, the site enters mobile version.

In mobile mode:
- Each section has a **max-width of 420px**
- All content is **centered**
- This applies to ALL sections:
  - Header
  - Hero
  - Cta
  - Courses
  - TakeQuiz
  - HowItWorks
  - FitForYou
  - TakeOurQuiz
  - SocialProof
  - Faq
  - Footer

**CSS Pattern:**
```css
@media (max-width: 1280px) {
  .section {
    max-width: 420px;
    margin: 0 auto;
  }
}
```

---

## Changelog

- **2026-01-06**: Initial FSD architecture setup with Next.js App Router
- **2026-01-06**: Added CSS Modules + CSS Variables styling architecture
- **2026-01-06**: Switched to Inter font for better readability
- **2026-01-06**: Added lucide-react for icons
- **2026-01-07**: Updated brand colors (white, blue, orange, gray, black, green, footer-bg)
- **2026-01-07**: Removed all demo widgets and components for clean start
- **2026-01-07**: Created Header and Hero landing components with new brand colors
- **2026-01-07**: **MAJOR OPTIMIZATION** - Full Next.js 15/16 optimization:
  - ✅ Converted to Server Components architecture
  - ✅ Added Server Actions (quiz-actions.ts)
  - ✅ Optimized all images (priority, lazy, sizes)
  - ✅ Implemented Streaming & Suspense
  - ✅ Added SEO optimization (sitemap, robots, manifest)
  - ✅ Added Security middleware with headers
  - ✅ Added Web Vitals tracking
  - ✅ Added Error boundaries (error.tsx, not-found.tsx)
  - ✅ Optimized bundle (optimizePackageImports)
  - ✅ Added caching strategies
  - ✅ Created performance and validation utilities
  - ✅ Configured next.config.ts for optimization
  - ✅ Added detailed documentation (OPTIMIZATION.md, CHANGES.md)

---

## Important Notes for AI Agents

### Read These Files First

Before making any changes, READ:
1. **CONTEXT.md** (this file) - Architecture and rules
2. **OPTIMIZATION.md** - Detailed optimization guide
3. **CHANGES.md** - What was changed and why

### Always Remember

1. **Server Components are default** - Add "use client" sparingly
2. **Optimize images** - priority for hero, lazy for rest
3. **Use Server Actions** - Don't create API routes for forms
4. **Follow FSD** - Respect layer boundaries
5. **Use CSS Modules** - All styles in .module.css files
6. **Use CSS Variables** - From variables.module.css
7. **Maintain performance** - Check Web Vitals after changes
8. **Mobile-first** - Max-width 420px at 1280px breakpoint

### Questions to Ask Yourself

Before adding a component:
- ❓ Does this need client-side state? → If NO, keep as Server Component
- ❓ Does this need event handlers? → If NO, keep as Server Component
- ❓ Does this need browser APIs? → If NO, keep as Server Component
- ❓ Is this an image above fold? → Use priority
- ❓ Is this a form? → Use Server Actions
- ❓ Am I fetching data? → Use appropriate cache strategy

