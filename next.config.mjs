import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: false, // ✅ Enable linting during build
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ Temporarily ignore TypeScript errors during build
  },
  experimental: {
    optimizePackageImports: ['@vercel/analytics'],
  },
  // Add output configuration for better deployment
  output: 'standalone',
};

export default withNextIntl(nextConfig);
