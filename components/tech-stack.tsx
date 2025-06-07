"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

const techStack = {
  backend: ["NestJS", "Django", "Node.js", "Express", "FastAPI", "Python"],
  databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "pgvector", "Supabase"],
  cloud: ["AWS Lambda", "Docker", "Terraform", "GitHub Actions", "Vercel", "S3"],
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Angular", "Flutter"],
  ai: ["LangChain", "OpenAI", "Embeddings", "Vector DB", "Hugging Face", "TensorFlow"],
}

export function TechStack() {
  const t = useTranslations("stack")

  return (
    <section id="stack" className="py-20 bg-muted/30">
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
          {Object.entries(techStack).map(([category, technologies], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-6 border hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary capitalize">{t(category)}</h3>
              <div className="tech-grid">
                {technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + techIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-muted rounded-lg p-3 text-center text-sm font-medium hover:bg-primary/10 transition-colors duration-200 cursor-default"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
