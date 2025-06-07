"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Monstro - Fintech Lambda Orchestration",
    description: "Serverless fintech platform with NestJS, AWS Lambda, and PostgreSQL for payment processing",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["NestJS", "AWS Lambda", "PostgreSQL", "Fintech"],
    category: "fintech",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Tendeciapp - E-commerce Platform",
    description: "Full-stack e-commerce solution with Flutter mobile app and AWS backend",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Flutter", "AWS", "Node.js", "MongoDB"],
    category: "saas",
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "AI Assistant with LangChain",
    description: "Intelligent assistant using Django, LangChain, OpenAI, and pgvector for embeddings",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Django", "LangChain", "OpenAI", "pgvector"],
    category: "ai",
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "Task Manager with Roles",
    description: "Enterprise task management system with advanced permissions and workflows",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Node.js", "PostgreSQL", "Auth"],
    category: "saas",
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    title: "Stripe SaaS Billing",
    description: "Complete SaaS billing solution with authentication, subscriptions, and webhooks",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Stripe", "Next.js", "Supabase", "Webhooks"],
    category: "saas",
    github: "#",
    demo: "#",
  },
  {
    id: 6,
    title: "DevOps CI/CD Pipeline",
    description: "Automated deployment pipeline with Docker, GitHub Actions, and Terraform",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Docker", "GitHub Actions", "Terraform", "AWS"],
    category: "devops",
    github: "#",
    demo: "#",
  },
]

export function FeaturedProjects() {
  const t = useTranslations("projects")
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = ["all", "fintech", "saas", "ai", "devops"]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="py-20">
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

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className="capitalize"
            >
              {t(`filter_${filter}`)}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                    // image is in public folder 
                      src={project.image || "/placeholder.svg?height=300&width=500"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div> */}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
