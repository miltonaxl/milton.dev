"use client"

import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const t = useTranslations("hero")

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 gradient-bg opacity-10" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block text-foreground">{t("greeting")}</span>
              <span className="block text-primary mt-2">{t("headline")}</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="#contact">
                {t("cta_hire")} <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <a href="#projects">{t("cta_projects")}</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{t("location")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:miltonandresaxl@gmail.com" className="hover:text-primary transition-colors">
                miltonandresaxl@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href="https://wa.me/573506791746" className="hover:text-primary transition-colors">
                +57 350 679 1746
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
