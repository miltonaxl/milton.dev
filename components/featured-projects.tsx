"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react" // Ensure ExternalLink is imported

const projects = [
  {
    id: 1,
    title: "Pluriza - Estori.co E-commerce Platform",
    description: "All-in-One eCommerce platform for Latin America, offering personalized shopping experiences. Migrated from monolithic to serverless architecture.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBMpqFRu6HLihOM8Z-BnorzIr-gUI6qtWYzw&s?height=300&width=500", // You'll want to replace this with a relevant image
    tags: ["NestJS", "AWS Lambda", "MongoDB", "Serverless", "CloudFormation", "S3", "API Gateway", "EventBridge", "SQS"],
    category: "ecommerce",
    github: "#", // Add actual GitHub link if available
    demo: "https://www.estori.co/",
    companyName: "Pluriza",
    companyUrl: "https://www.pluriza.com/",
  },
  {
    id: 2,
    title: "Leanware - Monstro.com Financial Data Aggregation",
    description: "Platform to aggregate and normalize financial and real estate user data from various bank APIs (Plaid, Finicity) using an ETL-like process.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToRP8XuAhkRQvxNKII-z12JqnXCVaNoJulag&s?height=300&width=500", // You'll want to replace this with a relevant image
    tags: ["NestJS", "DynamoDB", "Serverless Framework", "AWS Lambda", "EventBridge", "CloudFormation", "API Gateway", "Grafana", "S3", "Step Functions", "SQS", "SNS"],
    category: "fintech",
    github: "#", // Add actual GitHub link if available
    demo: "https://monstro.com/", // Assuming this is the correct URL
    companyName: "Leanware",
    companyUrl: "https://www.leanware.co/",
  },
  {
    id: 3,
    title: "Leanware - Canadian Orthodontic Partners Web Portal",
    description: "Full-stack web application for Canadian Orthodontic Partners, providing support services to independent practitioners to optimize patient care.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS86Ih4bD1SJ0jsKFIyvJLKXBq2NjLqKYygAA&s?height=300&width=500", // You'll want to replace this with a relevant image
    tags: ["Node.js", "Express.js", "React", "MySQL", "GCP", "Full-stack"],
    category: "healthcare", // Or 'saas' depending on the business model
    github: "#", // Add actual GitHub link if available
    demo: "https://www.canadianorthodonticpartners.com/", // Assuming this is the correct URL
    companyName: "Leanware",
    companyUrl: "https://www.leanware.co/",
  },
  {
    id: 4,
    title: "Leanware - Plannerd.com Wedding Planning Platform",
    description: "Collaborative wedding planning platform for couples and their support teams, featuring robust backend and responsive frontend.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEeiZNhvOiE2tvTlKMvJ-cOXeozYMtx0qVWA&s?height=300&width=500", // You'll want to replace this with a relevant image
    tags: ["Django", "Python", "PostgreSQL", "React", "AWS Lambda", "Cognito", "EventBridge", "SNS"],
    category: "saas",
    github: "#", // Add actual GitHub link if available
    demo: "https://www.plannerd.com/", // Assuming this is the correct URL
    companyName: "Leanware",
    companyUrl: "https://www.leanware.co/",
  },
  {
    id: 5,
    title: "Blossom - Credit Union Banking Solution",
    description: "All-in-one core and digital banking platform for credit unions, providing mission-critical systems and administrative tools.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWATWVqINt9ibM8-m6jgjLfUuL47GPhVptw&s?height=300&width=500", // You'll want to replace this with a relevant image
    tags: ["Node.js", "Express.js", "Sequelize", "PostgreSQL", "AWS CloudWatch"],
    category: "fintech", // Or 'saas'
    github: "#", // Add actual GitHub link if available
    demo: "https://www.blossom.net/",
    companyName: "Blossom",
    companyUrl: "https://www.blossom.net/",
  },
  {
    id: 6,
    title: "Geeks5G - CPA Bookkeeping AI-Powered Transaction Processing",
    description: "AI-driven platform to extract and process financial transactions from bank statements (PDF/image) using serverless architecture.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Mva2cXPYfL1ZMVTQrhqoJLwX35OQixJGDA&s?height=300&width=500", // You'll want to replace this with a relevant image
    tags: ["NestJS", "AWS Lambda", "PostgreSQL RDS", "EventBridge", "S3", "AWS SDK", "Cognito", "Google Authentication", "AI"],
    category: "fintech", // Or 'ai' or 'saas'
    github: "#", // Add actual GitHub link if available
    demo: "https://www.geeks5g.com", // Add actual demo link if available
    companyName: "Geeks5G",
    companyUrl: "https://www.geeks5g.com/",
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
                    {/* The old demo/github buttons (commented out in your original code) */}
                     <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                    {/* New Company Link Component */}
                    {project.companyName && project.companyUrl && (
                      <div className="mt-2">
                        <a href={project.companyUrl} target="_blank" rel="noopener noreferrer">
                          <Badge variant="outline" className="cursor-pointer hover:bg-muted-foreground/10 transition-colors">
                            {project.companyName}
                            <ExternalLink className="ml-2 h-3 w-3" />
                          </Badge>
                        </a>
                      </div>
                    )}
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