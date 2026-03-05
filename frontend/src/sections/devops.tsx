import { Card } from '@/components/ui/card'
import { Settings, Activity, ShieldCheck, Container, GitBranch, Cloud, Server } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function DevOpsSection() {
  const systems = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Deploying scalable applications on AWS using industry-standard practices.',
      items: ['AWS EC2 Hosting', 'Nginx Reverse Proxy', 'SSL/TLS Security', 'Domain Management'],
      cta: 'View Architecture'
    },
    {
      icon: GitBranch,
      title: 'CI/CD Pipelines',
      description: 'Automating the software delivery process to ensure speed and reliability.',
      items: ['GitHub Actions', 'Auto-Deployment to VPS', 'Secret Management', 'Build & Test Steps'],
      cta: 'View Workflow'
    },
    {
      icon: Container,
      title: 'Containerization',
      description: 'Ensuring consistency across environments with Docker.',
      items: ['Docker Compose', 'Multi-stage Builds', 'Image Optimization', 'Volume Management'],
      cta: 'View Dockerfile'
    },
    {
      icon: ShieldCheck,
      title: 'Quality Gates (QA Ops)',
      description: 'Integrating testing strategies directly into the development lifecycle.',
      items: ['SonarCloud Analysis', 'Automated Unit Tests', 'Pre-commit Hooks', 'Linting & Formatting'],
      cta: 'View Strategy'
    },
    {
      icon: Activity,
      title: 'Performance & Monitoring',
      description: 'Keeping systems healthy and performant under load.',
      items: ['PM2 Process Manager', 'Server Health Checks', 'Gzip Compression', 'Database Indexing'],
      cta: 'Check Metrics'
    },
    {
      icon: Settings,
      title: 'Agile Workflow',
      description: 'Collaborating effectively in cross-functional teams.',
      items: ['Jira / Scrum', 'Git Flow Strategy', 'Code Reviews', 'Sprint Planning'],
      cta: 'View Process'
    },
  ]

  return (
    <section id="learning" className="py-20 px-4 bg-card/50">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">System & DevOps</h2>
          <p className="text-lg text-foreground/70">
            I don't just write code; I deploy, monitor, and scale it. My approach bridges the gap between 
            <strong> Development</strong> and <strong>Operations</strong> to ensure seamless delivery.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {systems.map((system, index) => {
            const Icon = system.icon
            return (
              <Card key={index} className="p-6 border border-border hover:border-accent/50 transition-colors flex flex-col">
                <Icon className="h-6 w-6 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2">{system.title}</h3>
                <p className="text-sm text-foreground/70 mb-4">{system.description}</p>
                
                {/* Items */}
                <ul className="space-y-1 mb-4 flex-1">
                  {system.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-foreground/60 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {/* <Button 
                  size="sm" 
                  variant="outline"
                  className="w-full text-xs hover:text-accent cursor-pointer"
                >
                  {system.cta}
                </Button> */}
              </Card>
            )
          })}
        </div>

        {/* Philosophy Card */}
        <Card className="p-8 border border-border bg-linear-to-r from-primary/5 to-transparent relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Server className="h-6 w-6 text-primary" />
              My Architecture Philosophy
            </h3>
            <div className="text-foreground/80 leading-relaxed space-y-4 max-w-4xl">
              <p>
                <strong>"Works on my machine" is not enough.</strong> Through my experience at FPT Software and personal projects like ScoreLens, I've learned that a robust CI/CD pipeline and a well-configured server are just as important as clean code.
              </p>
              <p>
                I prioritize <strong>Automation</strong> (to reduce human error), <strong>Security</strong> (SSL, Env management), and <strong>Performance</strong> (Caching, Optimization) in every project I build. This ensures that the applications I deliver are production-ready from Day 1.
              </p>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-20 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl"></div>
        </Card>
      </div>
    </section>
  )
}