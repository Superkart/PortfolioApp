"use client"

import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center justify-center pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.05),rgba(0,0,0,0))]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center animate-fade-in">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl">
              <Image src="/LinkedinPhoto.png" alt="Karthik Ragi" fill className="object-cover" priority />
            </div>
          </div>

          <div className="space-y-4">
            <div className="inline-block animate-fade-in">
              <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">Hello, I&apos;m</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in-up">
              Karthik Ragi
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light animate-fade-in-up animation-delay-200">
              Software Development Engineer
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Building scalable, robust software solutions through full-stack development. Passionate about clean code,
            system design, and delivering high-quality applications that solve real-world problems.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
            <Button size="lg" onClick={scrollToProjects}>
              View Projects
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4 animate-fade-in-up animation-delay-800">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/Superkart" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://linkedin.com/in/karthikragi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:kragi@uic.edu" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
