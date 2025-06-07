"use client"

import { useTranslations } from "next-intl"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const t = useTranslations("footer")

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold text-primary mb-2">Milton.dev</div>
            <p className="text-sm text-muted-foreground">© 2024 Milton Andres Hernandez Camargo. {t("rights")}</p>
            <p className="text-sm text-muted-foreground">{t("built")}</p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/miltonandres"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/andres-hc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:miltonandresaxl@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
