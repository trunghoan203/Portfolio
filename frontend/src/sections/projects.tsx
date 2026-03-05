import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PROJECTS } from '@/utils/constants'
import { TechBadge } from '@/components/tech-badge'
import { ExternalLink, Github, Lock } from 'lucide-react'

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <p className="text-lg text-foreground/70">
            Real-world applications where I bridged the gap between <strong>complex requirements</strong> and <strong>efficient delivery</strong>.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {PROJECTS.map((project, index) => {
            const isPrivateRepo = project.links.github === '#';
            return (
            <Card key={project.id} className="p-8 border border-border hover:border-accent/50 transition-colors">
              <div className="space-y-6">
                {/* Title and Description */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  {isPrivateRepo && (
                          <span className="px-2 py-1 text-xs font-medium border border-border rounded-full flex items-center gap-1 bg-secondary">
                            <Lock size={12} /> Enterprise
                          </span>
                        )}
                  <p className="text-foreground/70">{project.description}</p>
                </div>

                {/* Problem & Solution */}
                <div className="grid md:grid-cols-2 gap-6 py-4 border-y border-border/50">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-accent">Problem</h4>
                    <p className="text-sm text-foreground/70">{project.problem}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-accent">Solution</h4>
                    <p className="text-sm text-foreground/70">{project.solution}</p>
                  </div>
                </div>

                {/* Impact */}
                <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg space-y-2">
                  <h4 className="font-semibold text-accent">Impact</h4>
                  <p className="text-sm text-foreground/80">{project.impact}</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="space-y-1">
                      <p className="text-xs text-foreground/60 font-medium">{metric.label}</p>
                      <p className="text-lg font-bold text-accent">{metric.value}</p>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  {isPrivateRepo ? (
                    <Button variant="ghost" disabled className="gap-2 opacity-70 cursor-not-allowed">
                      <Lock className="h-4 w-4" />
                      Private Codebase
                    </Button>
                ) : (
                  <Button variant="outline" size="sm" className="gap-2 hover:text-accent" asChild>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Source Code
                    </a>
                  </Button>
                )}
                {project.links.demo !== '#' && (
                      <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90 text-white" asChild>
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
              </div>
            </div>
          </Card>
          )
        })}
      </div>
    </div>
  </section>
  )
}
