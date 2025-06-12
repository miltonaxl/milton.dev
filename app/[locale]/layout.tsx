import type React from "react"
import { NextIntlClientProvider } from "next-intl"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// Can be imported from a shared config
const locales = ["en", "es"]

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound()

  let messages
  try {
    messages = (await import(`../../locales/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="min-h-screen bg-background">
        <Navigation />
        {/* sadsad margin on top  */}
        <div className=" sm:py-8 lg:py-10 pt-16">
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </NextIntlClientProvider>
  )
}
