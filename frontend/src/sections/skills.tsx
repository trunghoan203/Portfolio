'use client'

import { SKILLS } from '@/utils/constants'
import { SkillCard } from '@/components/skill-card'
import { Card } from '@/components/ui/card'

export function SkillsSection() {
  const skillCategories = [
    { name: 'Frontend', key: 'frontend' },
    { name: 'Backend', key: 'backend' },
    { name: 'Database', key: 'database' },
    { name: 'DevOps & Cloud', key: 'devops' },
    { name: 'Testing & QA', key: 'testing' },
    { name: 'Tools & Workflow', key: 'tools' },
  ] as const

  return (
    <section id="skills" className="py-20 px-4 bg-card/50">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Technical Skills</h2>
          <p className="text-lg text-foreground/70">
            A hybrid skillset combining <strong>development speed</strong> with <strong>quality assurance precision</strong>.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => {
            const categorySkills = SKILLS.filter(
              (skill) => skill.category === category.key
            )

            return (
              <Card key={category.key} className="p-6 border border-border">
                <h3 className="text-lg font-semibold mb-6 text-accent">
                  {category.name}
                </h3>
                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </Card>
            )
          })}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-4 p-6 bg-accent/5 border border-accent/20 rounded-lg">
          <div className="text-center space-y-1">
            <div className="text-2xl font-bold text-accent">20+</div>
            <p className="text-xs text-foreground/70">Technologies</p>
          </div>
          <div className="text-center space-y-1">
            <div className="text-2xl font-bold text-accent">1+</div>
            <p className="text-xs text-foreground/70">Years Experience</p>
          </div>
          <div className="text-center space-y-1">
            <div className="text-2xl font-bold text-accent">15k+</div>
            <p className="text-xs text-foreground/70">Pages Tested</p>
          </div>
        </div>
      </div>
    </section>
  )
}
