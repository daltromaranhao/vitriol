import createIntlMiddleware from 'next-intl/middleware';
import { auth } from '@/auth';
import { locales, defaultLocale } from './i18n';
import { NextRequest, NextResponse } from 'next/server';

// Create i18n middleware
const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always', // Always include locale in URL
});

// Protected routes that require authentication
const protectedRoutes = [
  '/dashboard',
  '/profile',
  '/messages',
  '/members',
  '/connections',
  '/settings',
  '/feed',
  '/notifications',
  '/help-requests',
  '/onboarding',
];

export default async function middleware(request: NextRequest) {
  // First, handle i18n
  const response = intlMiddleware(request);

  // Get the pathname without locale prefix
  const pathname = request.nextUrl.pathname;
  const pathnameWithoutLocale = pathname.replace(/^\/(en-US|pt-BR|es-ES|fr-FR)/, '') || '/';

  // Check if the route is protected
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathnameWithoutLocale.startsWith(route)
  );

  if (isProtectedRoute) {
    // Check authentication for protected routes
    const session = await auth();
    
    if (!session?.user) {
      const locale = pathname.match(/^\/(en-US|pt-BR|es-ES|fr-FR)/)?.[1] || defaultLocale;
      const loginUrl = new URL(`/${locale}/auth/login`, request.url);
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return response;
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
