"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const categories = ["All", "Full-Stack", "Frontend", "Backend", "Data Science", "Research"]

const projects = [
  {
    title: "Steam Accountabilibuddy",
    description:
      "Smart Steam library management platform with intelligent backlog analysis, automated price tracking, and library analytics. Users authenticate via Steam OpenID; a Spring Boot 3 backend handles scheduling, email alerts, and tag-based game similarity scoring against a PostgreSQL database.",
    category: ["Full-Stack", "Backend"],
    tags: ["React", "Astro", "TypeScript", "Spring Boot", "Java", "PostgreSQL", "Cloudflare Workers", "OAuth"],
    github: "https://github.com/Superkart/Steam_Accountabilibuddy",
    demo: "https://steam-accountabilibuddy.netlify.app/",
    image: "/steam-game-library-web-dashboard-analytics.jpg",
    videoUrl: "",
    featured: true,
  },
  {
    title: "Immersive Cosmology Explorer",
    description:
      "Research-grade Unity VR/Desktop visualization system for exploring multi-billion-particle cosmological simulations. Features real-time point-cloud rendering with custom shaders, interactive property filtering, asymmetric desktop–VR collaboration, and octree spatial indexing for smooth performance.",
    category: ["Research", "Full-Stack"],
    tags: ["Unity", "C#", "OpenXR", "VR", "Custom Shaders", "Point Cloud Rendering", "Scientific Visualization"],
    github: "https://github.com/Superkart/Immersive_Cosmology_Explorer",
    image: "/vr-space-visualization-cosmology-point-cloud.jpg",
    videoUrl: "",
    featured: true,
  },
  {
    title: "Pandas Provenance Tracker",
    description:
      "Open-source Python library that adds data provenance and lineage tracking to standard pandas workflows. Tracks every transformation with operation-level metadata, records row-level why-provenance, and persists logs as JSON for auditing and replay. Published on PyPI.",
    category: ["Backend", "Data Science"],
    tags: ["Python", "pandas", "Data Lineage", "PyPI", "Data Science", "Open Source"],
    github: "https://github.com/Superkart/Pandas_Provenance",
    image: "/data-flow-diagram-pandas-python-visualization.jpg",
    videoUrl: "",
    featured: true,
  },
  {
    title: "Reddit Moderator Tool",
    description:
      "Web application for Reddit moderators to track community engagement, analyze posting patterns, and manage content effectively. Uses the Reddit API and Python data analysis to surface actionable moderation insights.",
    category: ["Full-Stack", "Data Science"],
    tags: ["Python", "Jupyter Notebook", "Data Visualization", "REST API", "Web Scraping"],
    github: "https://github.com/Superkart/Reddit_Moderator_Tool",
    image: "/reddit-analytics-dashboard-data-charts.jpg",
    videoUrl: "",
    featured: true,
  },
  {
    title: "Student Survey Analysis",
    description:
      "End-to-end data analysis simulation of a real-world internship at Manipal University. Covers the full analytics lifecycle: survey design in Google Forms → data collection → cleaning with pandas → exploratory visualization → stakeholder report.",
    category: ["Data Science"],
    tags: ["Python", "pandas", "Google Colab", "Data Visualization", "Survey Analysis"],
    github: "https://github.com/Superkart/Student_Survey_Analysis",
    image: "/placeholder.svg",
    videoUrl: "",
    featured: false,
  },
  {
    title: "Store — Spring Boot",
    description:
      "RESTful e-commerce back-end built with Spring Boot demonstrating clean layered architecture (controllers, services, repositories), entity modeling, and Spring Data JPA patterns for an e-commerce domain.",
    category: ["Backend"],
    tags: ["Java", "Spring Boot", "Spring Data JPA", "RESTful API", "PostgreSQL"],
    github: "https://github.com/Superkart/Store_Spring_Boot",
    image: "/placeholder.svg",
    videoUrl: "",
    featured: false,
  },
  {
    title: "MyExpenseTracker",
    description:
      "Full-stack personal finance tracking application with CRUD operations, data visualization, and expense analytics. Features a TypeScript/React frontend with a Node.js backend and PostgreSQL database.",
    category: ["Full-Stack"],
    tags: ["TypeScript", "React", "Node.js", "PostgreSQL", "REST API"],
    github: "https://github.com/Superkart/MyExpenseTracker",
    image: "/expense-tracker-app-budget-charts.jpg",
    videoUrl: "",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio — built with Next.js 16, TypeScript, and Tailwind CSS. Features a responsive design, dark mode, project filtering, skills showcase, and a career timeline.",
    category: ["Frontend", "Full-Stack"],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Shadcn UI"],
    github: "https://github.com/Superkart/PortfolioApp",
    image: "/developer-working-on-computer-coding.jpg",
    videoUrl: "",
    featured: false,
  },
]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === "All") return true
    return project.category.includes(selectedCategory)
  })

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Featured Projects</h2>
            <div className="h-1 w-20 bg-primary" />
            <p className="text-lg text-muted-foreground">
              A selection of my work across game development, web applications, and data science
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <Card
                key={project.title}
                className={`group hover:shadow-lg transition-all overflow-hidden ${
                  project.featured ? "border-2 border-primary/20" : ""
                }`}
              >
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                  {project.videoUrl ? (
                    <div
                      className="relative w-full h-full cursor-pointer group/video"
                      onClick={() => setSelectedVideo(project.videoUrl)}
                    >
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover/video:bg-black/60 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                          <div className="w-0 h-0 border-l-8 border-l-white border-y-6 border-y-transparent ml-1" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base">{project.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:text-white hover:bg-white/20"
              onClick={() => setSelectedVideo(null)}
            >
              <span className="text-2xl">×</span>
            </Button>
            <video src={selectedVideo} controls autoPlay className="w-full h-full rounded-lg">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  )
}
