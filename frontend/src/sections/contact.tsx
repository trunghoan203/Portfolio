'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, Linkedin, Github, AlertCircle, CheckCircle, Loader2 } from 'lucide-react'
import { SITE_CONFIG } from '@/utils/constants'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      
      // Backend: { name, email, message }
      const payload = {
        name: formData.name,
        email: formData.email,
        message: `[Subject: ${formData.subject}]\n\n${formData.message}`
      }

      const res = await fetch(`${apiUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || data.error || "Failed to send message");
      }

      // Success logic
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Tắt thông báo success sau 5s
      setTimeout(() => setStatus('idle'), 5000)

    } catch (error: any) {
      console.error("Submit error:", error);
      setStatus('error')
      setErrorMessage(error.message || "Something went wrong. Please try again.")
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">Let's Work Together</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Have an interesting project or opportunity? I'd love to hear from you. Send me a message and let's discuss how I can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-8 border border-border">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium block mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="bg-input border-border"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium block mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="bg-input border-border"
                />
              </div>

              <div>
                <label htmlFor="subject" className="text-sm font-medium block mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  required
                  className="bg-input border-border"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me more about your project..."
                  rows={5}
                  required
                  className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>

              <Button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-all"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" /> Sent!
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>

              {/* Success Message */}
              {status === 'success' && (
                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-md text-sm text-green-600 dark:text-green-400 flex items-center gap-2">
                  <CheckCircle size={16} />
                  Message sent! I'll get back to you soon.
                </div>
              )}

              {/* Error Message */}
              {status === 'error' && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-md text-sm text-red-600 dark:text-red-400 flex items-center gap-2">
                  <AlertCircle size={16} />
                  {errorMessage}
                </div>
              )}
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Get In Touch</h3>
              <p className="text-foreground/70">
                Feel free to reach out directly via email or connect with me on social platforms.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-start gap-4 p-4 rounded-lg border border-border hover:border-accent/50 hover:bg-accent/5 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground/70">Email</p>
                  <p className="text-base font-semibold text-foreground break-all group-hover:text-accent transition-colors">
                    {SITE_CONFIG.email}
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={SITE_CONFIG.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-lg border border-border hover:border-accent/50 hover:bg-accent/5 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Linkedin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground/70">LinkedIn</p>
                  <p className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
                    Connect with me
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-lg border border-border hover:border-accent/50 hover:bg-accent/5 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Github className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground/70">GitHub</p>
                  <p className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
                    Check out my work
                  </p>
                </div>
              </a>
            </div>

            {/* Availability */}
            <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
              <p className="text-sm font-medium text-accent mb-1">Availability</p>
              <p className="text-sm text-foreground/70">{SITE_CONFIG.availability}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
