import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/utils/constants'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          Software Engineer
        </div>

        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Cao Trung Hoan
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-accent to-primary">
              Full-Stack & Automation
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            I build scalable web applications with <strong>Next.js & Node.js</strong> and ensure 
            rock-solid quality through <strong>Automation Testing & CI/CD</strong>. 
            Bridging the gap between Development and Quality Assurance.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 py-8 border-y border-border/50">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent">1+</div>
            <p className="text-sm text-foreground/60">Years Experience</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent">3</div>
            <p className="text-sm text-foreground/60">Key Projects</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent">15k+</div>
            <p className="text-sm text-foreground/60">Pages Migrated</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground"
            asChild
          >
            <a href="#projects">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>

          {/* Dropdown Resume */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 cursor-pointer hover:text-accent"
              >
                Download Resume
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="center">
              <DropdownMenuItem asChild>
                <a
                  href="/CV-Developer-CaoTrungHoan.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CV Developer
                </a>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <a
                  href="/CV-Tester-CaoTrungHoan.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CV Tester
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <Button variant="ghost" size="icon" asChild>
            <a href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={SITE_CONFIG.linkedIn} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={`mailto:${SITE_CONFIG.email}`}>
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
