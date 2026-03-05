import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BLOG_POSTS } from '@/utils/constants'
import { Calendar, ArrowRight } from 'lucide-react'

export function BlogSection() {
  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Latest Articles</h2>
          <p className="text-lg text-foreground/70">
            Sharing what I learn along the way—tutorials, project reflections, and lessons from building.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BLOG_POSTS.map((post) => (
            <Card key={post.id} className="p-6 border border-border hover:border-accent/50 transition-colors group">
              <div className="space-y-4 h-full flex flex-col">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded border border-accent/20">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-foreground/70 grow">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </div>
                  <Button variant="ghost" size="sm" className="gap-1 text-accent hover:text-accent">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All */}
        <div className="text-center pt-8">
          <Button size="lg" variant="outline" className="gap-2 hover:text-accent">
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
