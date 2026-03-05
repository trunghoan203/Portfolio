import { Github, Linkedin, Mail, Heart, ShieldCheck, Terminal } from 'lucide-react'
import { SITE_CONFIG } from '@/utils/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <a href="#" className="text-2xl font-bold text-accent flex items-center gap-2">
              <Terminal className="w-6 h-6" />
              <span>Cao Trung Hoan</span>
            </a>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Software Engineer specializing in Full-stack Development and Automated Quality Assurance. 
              Building scalable, crash-free applications.
            </p>
            <div className="flex items-center gap-2 text-xs text-foreground/50 bg-secondary/50 p-2 rounded w-fit">
               <ShieldCheck size={14} />
               <span>Open to relocation</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Navigation</h4>
            <nav className="flex flex-col gap-3 text-sm">
              <a href="#about" className="text-foreground/60 hover:text-accent transition-colors flex items-center gap-2">
                About Me
              </a>
              <a href="#experience" className="text-foreground/60 hover:text-accent transition-colors flex items-center gap-2">
                Experience & Education
              </a>
              <a href="#devops" className="text-foreground/60 hover:text-accent transition-colors flex items-center gap-2">
                DevOps & Architecture
              </a>
              <a href="#projects" className="text-foreground/60 hover:text-accent transition-colors flex items-center gap-2">
                Featured Projects
              </a>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Let's Connect</h4>
            <p className="text-sm text-foreground/60">
                Have a project in mind or looking for a dedicated engineer? Feel free to reach out.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-foreground/70 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 hover:-translate-y-1 shadow-sm"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-foreground/70 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300 hover:-translate-y-1 shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-foreground/70 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300 hover:-translate-y-1 shadow-sm"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-border to-transparent" />

        {/* Copyright & Tech Stack Info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/50">
          <p>
            © {currentYear} Cao Trung Hoan. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4">
            <p className="flex items-center gap-1">
              Built with <Heart className="h-3 w-3 text-red-500 fill-red-500 animate-pulse" /> using
            </p>
            <div className="flex gap-3 font-mono text-xs">
                <span className='hover:text-foreground transition-colors'>Next.js 14</span>
                <span>•</span>
                <span className='hover:text-foreground transition-colors'>Tailwind</span>
                <span>•</span>
                <span className='hover:text-foreground transition-colors'>Docker</span>
                <span>•</span>
                <span className='hover:text-foreground transition-colors'>AWS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
