import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "@/common/config/i18n";

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Pathnames are not internationalized
  pathnames: {
    "/": "/",
    "/about": "/about",
    "/projects": "/projects",
    "/achievements": "/achievements",
    "/dashboard": "/dashboard",
    "/chat": "/chat",
    "/contact": "/contact",
  },
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
