import { Card } from '@/components/ui/card'
import { Code2, ShieldCheck, Workflow, Trophy } from 'lucide-react'

export function AboutSection() {
  const principles = [
    {
      icon: Code2,
      title: 'Full-Stack Engineering',
      description: 'Proficient in building scalable web apps with Next.js & Node.js. I design RESTful APIs and optimize databases (MongoDB/PostgreSQL) for performance.',
    },
    {
      icon: ShieldCheck,
      title: 'Quality First Mindset',
      description: 'With a strong background in Testing, I write robust, testable code. I combine Manual and Automation testing to ensure a 98% crash-free rate.',
    },
    {
      icon: Workflow,
      title: 'DevOps & Automation',
      description: 'I streamline development workflows using Docker, CI/CD (GitHub Actions), and AWS, reducing manual effort and deployment time significantly.',
    },
    {
      icon: Trophy,
      title: 'Problem Solver',
      description: 'Proven ability to deliver under pressure, recognized by the "Promising Award" at FPT Hackathon 2025. I adapt quickly to new tech and challenges.',
    },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-card/50">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          <p className="text-lg text-foreground/70 max-w-3xl">
            I am a Software Engineer graduating from <strong>FPT University</strong>, with a unique blend of skills in both <strong>Full-Stack Development</strong> and <strong>Quality Assurance</strong>. Unlike typical developers, I don't just write code that works; I write code that lasts, backed by solid testing strategies and automated pipelines.
          </p>
        </div>

        {/* Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((principle, index) => {
            const Icon = principle.icon
            return (
              <Card key={index} className="p-6 border border-border hover:border-accent/50 transition-colors">
                <Icon className="h-6 w-6 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2">{principle.title}</h3>
                <p className="text-sm text-foreground/70">{principle.description}</p>
              </Card>
            )
          })}
        </div>

        {/* Additional Context */}
        <div className="space-y-4 text-foreground/70">
          <p>
            My professional journey includes working on large-scale enterprise projects like <strong>Capitaland</strong>, where I contributed to migrating over 15,000 pages and developing automation scripts that reduced manual workload by 40%. This experience taught me the importance of precision, scalability, and teamwork in an Agile environment.
          </p>
          <p>
            Whether it's building an AI-powered scoring platform like <strong>ScoreLens</strong> or ensuring software quality through rigorous testing, I am driven by a desire to create impactful user experiences. I am <strong>fully willing to relocate</strong> for the right opportunity to contribute to your team's success.
          </p>
        </div>
      </div>
    </section>
  )
}
