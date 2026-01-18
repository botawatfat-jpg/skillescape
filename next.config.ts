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
