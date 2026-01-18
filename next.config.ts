import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Experimental features для оптимизации
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  // Оптимизация изображений
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 год
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2tpw6ibsnrlae.cloudfront.net",
        pathname: "/**",
      },
    ],
  },

  // Компиляция и минификация
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // React strict mode для выявления проблем
  reactStrictMode: true,

  // Оптимизация production build
  poweredByHeader: false,
  compress: true,

  // Заголовки безопасности и SEO
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://tagmanager.google.com https://www.google-analytics.com",
              "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com https://analytics.google.com https://*.google-analytics.com",
              "img-src 'self' data: https: https://www.google-analytics.com https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline'",
              "font-src 'self' data:",
              "frame-src https://www.googletagmanager.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },

  // Redirects для SEO (добавьте по необходимости)
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
