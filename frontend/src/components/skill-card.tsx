import { Skill } from '@/types/portfolio'

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{skill.proficiency}%</span>
      </div>
      <div className="h-2 bg-border rounded-full overflow-hidden">
        <div
          className="h-full bg-linear-to-r from-accent to-primary rounded-full transition-all duration-500"
          style={{ width: `${skill.proficiency}%` }}
        />
      </div>
    </div>
  )
}
