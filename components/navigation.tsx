"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname, useRouter } from "next/navigation"
import { useParams } from "next/navigation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const t = useTranslations("nav")
  const pathname = usePathname()
  const router = useRouter()
  const params = useParams()
  const currentLocale = params.locale as string

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { key: "home", href: "#home" },
    { key: "projects", href: "#projects" },
    { key: "stack", href: "#stack" },
    { key: "contact", href: "#contact" },
  ]

  const switchLanguage = (locale: string) => {
    // Get the path without the locale prefix
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "")

    // Navigate to the same path but with the new locale
    const newPath = `/${locale}${pathWithoutLocale || ""}`
    router.push(newPath)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xl font-bold text-primary">
            Milton.dev
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                {t(item.key)}
              </a>
            ))}
          </div>

          {/* Theme Toggle & Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <div className="flex items-center space-x-2 border rounded-md p-1">
              <Button
                variant={currentLocale === "en" ? "default" : "ghost"}
                size="sm"
                onClick={() => switchLanguage("en")}
                className="text-xs px-2"
              >
                🇺🇸 EN
              </Button>
              <Button
                variant={currentLocale === "es" ? "default" : "ghost"}
                size="sm"
                onClick={() => switchLanguage("es")}
                className="text-xs px-2"
              >
                🇨🇴 ES
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-t"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    className="block px-3 py-2 text-foreground/80 hover:text-primary transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {t(item.key)}
                  </a>
                ))}
                <div className="flex items-center justify-between px-3 py-2">
                  <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </Button>
                  <div className="flex items-center space-x-2 border rounded-md p-1">
                    <Button
                      variant={currentLocale === "en" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => switchLanguage("en")}
                      className="text-xs px-2"
                    >
                      🇺🇸 EN
                    </Button>
                    <Button
                      variant={currentLocale === "es" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => switchLanguage("es")}
                      className="text-xs px-2"
                    >
                      🇨🇴 ES
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
