import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/sections/hero'
import { AboutSection } from '@/sections/about'
import { ExperienceSection } from '@/sections/experience'
import { SkillsSection } from '@/sections/skills'
import { ProjectsSection } from '@/sections/projects'
import { DevOpsSection } from '@/sections/devops'
import { BlogSection } from '@/sections/blog'
import { ContactSection } from '@/sections/contact'
import { Footer } from '@/sections/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <DevOpsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
