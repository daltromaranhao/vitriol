import createIntlMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

// Create i18n middleware with proper configuration
export default createIntlMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed', // Changed from 'always' to avoid conflicts
  localeDetection: true, // Auto-detect user locale
});

export const config = {
  // Only match i18n routes, skip root which is handled by app/page.tsx
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
