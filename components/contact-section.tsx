"use client"

import type React from "react"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MessageCircle, Send, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const t = useTranslations("contact")
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Success!",
          description: t("success"),
        })
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: t("error"),
        variant: "destructive",
      })
      // Redirect to WhatsApp as fallback
      window.open(
        "https://wa.me/573506791746?text=Hi+Milton%2C+I+saw+your+portfolio+and+would+like+to+discuss+a+project...",
        "_blank",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder={t("form.name")}
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder={t("form.email")}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder={t("form.message")}
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t("form.sending")}
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        {t("form.send")}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-card rounded-lg border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">miltonandresaxl@gmail.com</p>
                  <p className="text-sm text-muted-foreground mt-1">I typically respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card rounded-lg border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground">+57 350 679 1746</p>
                  <p className="text-sm text-muted-foreground mt-1">Available for calls Mon-Fri, 9AM-6PM COT</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card rounded-lg border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">WhatsApp</h3>
                  <p className="text-muted-foreground">Quick response guaranteed</p>
                  <Button variant="outline" size="sm" className="mt-2" asChild>
                    <a
                      href="https://wa.me/573506791746?text=Hi+Milton%2C+I+saw+your+portfolio+and+would+like+to+discuss+a+project..."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("whatsapp")}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
