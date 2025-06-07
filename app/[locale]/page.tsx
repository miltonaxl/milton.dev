import { HeroSection } from "@/components/hero-section"
import { WhyWorkWithMe } from "@/components/why-work-with-me"
import { FeaturedProjects } from "@/components/featured-projects"
import { TechStack } from "@/components/tech-stack"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyWorkWithMe />
      <FeaturedProjects />
      <TechStack />
      <ContactSection />
    </>
  )
}
