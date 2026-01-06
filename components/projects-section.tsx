"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const categories = ["All", "Game Dev", "Web Dev", "Data Science", "Research"]

const projects = [
  {
    title: "Immersive Cosmology Explorer",
    description:
      "VR/Desktop scientific visualization tool for exploring cosmological datasets with point-cloud rendering and time-series playback.",
    category: ["Research", "Game Dev"],
    tags: ["Unity", "C#", "OpenXR", "Custom Shaders", "VR"],
    github: "https://github.com/Superkart",
    image: "/vr-space-visualization-cosmology-point-cloud.jpg",
    videoUrl: "",
    featured: true,
  },
  {
    title: "Steam Accountabilibuddy",
    description:
      "Full-stack game library analyzer with Steam OAuth integration. Detects unplayed games, tracks prices, and provides personalized recommendations.",
    category: ["Web Dev"],
    tags: ["React", "TypeScript", "Spring Boot", "Cloudflare Workers", "OAuth"],
    github: "https://github.com/Superkart",
    image: "/steam-game-library-web-dashboard-analytics.jpg",
    videoUrl: "",
    featured: true,
  },
  {
    title: "QuizDefender",
    description: "Multiplayer physics-based quiz game with real-time networking and dynamic gameplay mechanics.",
    category: ["Game Dev"],
    tags: ["Unity", "Netcode", "Unity Relay", "HDRP", "Multiplayer"],
    github: "https://github.com/Superkart",
    demo: "https://example.com",
    image: "/multiplayer-quiz-game-3d-physics.jpg",
    videoUrl: "",
    featured: true,
  },
  {
    title: "Pandas Provenance Tracker",
    description:
      "Python library for tracking data lineage in pandas transformations, ensuring transparency and reproducibility in data workflows.",
    category: ["Data Science"],
    tags: ["Python", "pandas", "Jupyter", "Data Lineage"],
    github: "https://github.com/Superkart",
    image: "/data-flow-diagram-pandas-python-visualization.jpg",
    videoUrl: "",
    featured: true,
  },
  {
    title: "The Lost Isle",
    description: "3D multiplayer adventure game with exploration mechanics and real-time player interaction.",
    category: ["Game Dev"],
    tags: ["Unity", "C#", "Multiplayer", "3D"],
    github: "https://github.com/Superkart",
    image: "/3d-island-adventure-game-tropical-exploration.jpg",
    videoUrl: "",
    featured: false,
  },
  {
    title: "Reddit Moderator Tool",
    description: "Data analysis tool for Reddit moderators to track community engagement and identify patterns.",
    category: ["Data Science", "Web Dev"],
    tags: ["Python", "NLP", "Data Visualization"],
    github: "https://github.com/Superkart",
    image: "/reddit-analytics-dashboard-data-charts.jpg",
    videoUrl: "",
    featured: false,
  },
  {
    title: "MyExpenseTracker",
    description: "Full-stack CRUD application for personal expense management with data visualization.",
    category: ["Web Dev"],
    tags: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/Superkart",
    image: "/expense-tracker-app-budget-charts.jpg",
    videoUrl: "",
    featured: false,
  },
  {
    title: "Mario Game",
    description: "2.5D platformer inspired by classic Mario games with custom physics and level design.",
    category: ["Game Dev"],
    tags: ["Unity", "C#", "2D", "Physics"],
    github: "https://github.com/Superkart",
    image: "/mario-style-platformer-game-2d.jpg",
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
