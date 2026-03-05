import { Card } from '@/components/ui/card'
import { EXPERIENCE } from '@/utils/constants'
import { TechBadge } from '@/components/tech-badge'
import { CheckCircle2 } from 'lucide-react'

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
          <p className="text-lg text-foreground/70">
            A proven track record of delivering scalable software solutions. 
            My journey combines <strong>Full-Stack Development</strong> with <strong>Quality Assurance</strong> standards 
            to ensure product excellence.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {EXPERIENCE.map((exp, index) => (
            <Card key={exp.id} className="p-8 border border-border hover:border-accent/50 transition-colors">
              <div className="flex gap-4">
                {/* Timeline marker */}
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-accent mt-1.5" />
                  {index < EXPERIENCE.length - 1 && (
                    <div className="w-0.5 h-24 bg-border my-4" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-foreground/70">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground font-medium">{exp.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/70">{exp.description}</p>

                  {/* Key Achievements */}
                  <div className="space-y-2">
                    {exp.keyAchievements.map((achievement, idx) => (
                      <div key={idx} className="flex gap-2 items-start">
                        <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                        <span className="text-sm text-foreground/70">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Impact */}
                  <div className="p-3 bg-accent/5 rounded-lg border border-accent/20">
                    <p className="text-sm text-foreground/80">
                      <span className="font-semibold text-accent">Impact: </span>
                      {exp.impact}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <TechBadge key={tech} name={tech} variant="primary" />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
