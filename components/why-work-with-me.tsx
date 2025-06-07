"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { CheckCircle, Cloud, Database, Settings, Shield, Users } from "lucide-react"

export function WhyWorkWithMe() {
  const t = useTranslations("why")

  const icons = [Cloud, Database, Settings, Shield, Users]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t("title")}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t("subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Array.from({ length: 5 }).map((_, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 rounded-lg bg-card border hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-semibold">{t(`points.${index}`)}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
