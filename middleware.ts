import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "id"],

  // Used when no locale matches
  defaultLocale: "en",

  // Disable automatic locale detection for better debugging
  localeDetection: false,
});

export const config = {
  // Match only internationalized pathnames, exclude API routes
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',
    
    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    '/(id|en)/:path*',
    
    // Enable redirects that add missing locales
    // Exclude API routes, _next, _vercel, and files with extensions
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
