import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Milton Hernandez - Senior Backend Developer | Fullstack Engineer",
  description:
    "Full-Stack Developer with 6+ years of experience in Python, Node.js, AWS, and scalable backend systems. Available for freelance and contract work.",
  keywords: "backend developer, fullstack engineer, python, nodejs, aws, postgresql, devops, freelance developer",
  authors: [{ name: "Milton Andres Hernandez Camargo" }],
  openGraph: {
    title: "Milton Hernandez - Senior Backend Developer",
    description: "Scalable backends, APIs, and cloud-powered platforms for startups",
    url: "https://milton-dev.vercel.app",
    siteName: "Milton Hernandez Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Milton Hernandez - Backend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Milton Hernandez - Senior Backend Developer",
    description: "Scalable backends, APIs, and cloud-powered platforms for startups",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
