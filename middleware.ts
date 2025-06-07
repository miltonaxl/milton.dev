import createMiddleware from "next-intl/middleware"

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "es"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "en",

  // Domains can also be used for locale detection
  localeDetection: true,

  // This is the default path that will be used when switching locales
  localePrefix: "always",
})

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}
