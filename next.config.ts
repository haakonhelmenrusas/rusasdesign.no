import { withSentryConfig } from '@sentry/nextjs';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co' },
    ],
  },
};

export default withSentryConfig(nextConfig, {
  org: 'haakon-rusas',
  project: 'rusas-design',

// Only print logs for uploading source maps in CI
  silent: !process.env.CI,

// Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

// Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
// This can increase your server load as well as your hosting bill.
// Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
// side errors will fail.
  tunnelRoute: '/monitoring',
  disableLogger: true,
});