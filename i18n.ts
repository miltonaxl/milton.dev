import { getRequestConfig } from "next-intl/server"

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale = ["en", "es"].includes(locale ?? "") ? locale! : "en"; // Ensure locale is always a string
  return {
    locale: resolvedLocale, // Include the resolved locale property
    messages: (await import(`./locales/${resolvedLocale}.json`)).default,
  }
})
