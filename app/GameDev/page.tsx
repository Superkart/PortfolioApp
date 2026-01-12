"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Gamepad2, Box, Zap, Users } from "lucide-react"
import Image from "next/image"

const gameProjects = [
  {
    title: "Immersive Cosmology Explorer",
    description:
      "VR/Desktop scientific visualization tool for exploring cosmological datasets with point-cloud rendering and time-series playback. Features custom shaders for rendering millions of particles efficiently.",
    category: ["VR/XR", "3D"],
    tags: ["Unity", "C#", "OpenXR", "Custom Shaders", "VR", "Point Cloud Rendering"],
    github: "https://github.com/Superkart",
    image: "/vr-space-visualization-cosmology-point-cloud.jpg",
    videoUrl: "",
    featured: true,
  },
  {
    title: "QuizDefender",
    description:
      "Multiplayer physics-based quiz game with real-time networking using Unity Netcode. Features dynamic gameplay mechanics, player synchronization, and relay-based multiplayer architecture.",
    category: ["Multiplayer", "3D"],
    tags: ["Unity", "Netcode", "Unity Relay", "HDRP", "Multiplayer", "Physics"],
    github: "https://github.com/Superkart",
    demo: "https://example.com",
    image: "/multiplayer-quiz-game-3d-physics.jpg",
    videoUrl: "",
    featured: true,
  },
  {
    title: "The Lost Isle",
    description:
      "3D multiplayer adventure game featuring exploration mechanics, real-time player interaction, and immersive environments. Built with Unity's multiplayer networking system.",
    category: ["Multiplayer", "3D"],
    tags: ["Unity", "C#", "Multiplayer", "3D", "Adventure", "Networking"],
    github: "https://github.com/Superkart",
    image: "/3d-island-adventure-game-tropical-exploration.jpg",
    videoUrl: "",
    featured: true,
  },
  {
    title: "Mario Game",
    description:
      "2.5D platformer inspired by classic Mario games featuring custom physics systems, level design, and character controllers. Implements precise movement mechanics and collision detection.",
    category: ["2D/2.5D"],
    tags: ["Unity", "C#", "2D", "Physics", "Platformer", "Game Design"],
    github: "https://github.com/Superkart",
    image: "/mario-style-platformer-game-2d.jpg",
    videoUrl: "",
    featured: false,
  },
]

const categories = ["All", "VR/XR", "Multiplayer", "3D", "2D/2.5D"]

export default function GameDevPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const filteredProjects = gameProjects.filter((project) => {
    if (selectedCategory === "All") return true
    return project.category.includes(selectedCategory)
  })

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block">
              <Badge variant="outline" className="text-sm px-4 py-2">
                Game Development Portfolio
              </Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Creating Immersive Interactive Experiences
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specializing in Unity development, VR/XR systems, multiplayer networking, and engaging gameplay mechanics
            </p>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Game Development Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <Gamepad2 className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Unity Engine</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• C# Programming</li>
                    <li>• HDRP & URP</li>
                    <li>• Custom Shaders</li>
                    <li>• Physics Systems</li>
                    <li>• Animation Systems</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Box className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>VR/XR Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• OpenXR Integration</li>
                    <li>• XR Interaction Toolkit</li>
                    <li>• VR Performance Optimization</li>
                    <li>• Hand Tracking</li>
                    <li>• Spatial Computing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Multiplayer Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Unity Netcode</li>
                    <li>• Unity Relay</li>
                    <li>• Client-Server Architecture</li>
                    <li>• State Synchronization</li>
                    <li>• Network Optimization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Game Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Gameplay Mechanics</li>
                    <li>• Level Design</li>
                    <li>• AI Pathfinding</li>
                    <li>• Player Controllers</li>
                    <li>• Game Architecture</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-4 mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Game Projects</h2>
              <div className="h-1 w-20 bg-primary" />
              <p className="text-lg text-muted-foreground">
                A showcase of my work in Unity game development, VR experiences, and multiplayer systems
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
      </section>

      {/* Technical Skills */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Technical Stack</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Game Engines & Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Unity</Badge>
                  <Badge>C#</Badge>
                  <Badge>.NET</Badge>
                  <Badge>HLSL/ShaderLab</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Rendering & Graphics</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>HDRP</Badge>
                  <Badge>URP</Badge>
                  <Badge>Custom Shaders</Badge>
                  <Badge>Point Cloud Rendering</Badge>
                  <Badge>Post-Processing</Badge>
                  <Badge>Particle Systems</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">VR/XR Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>OpenXR</Badge>
                  <Badge>XR Interaction Toolkit</Badge>
                  <Badge>Meta Quest</Badge>
                  <Badge>SteamVR</Badge>
                  <Badge>Hand Tracking</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Networking & Multiplayer</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Unity Netcode</Badge>
                  <Badge>Unity Relay</Badge>
                  <Badge>Photon</Badge>
                  <Badge>Client-Server</Badge>
                  <Badge>State Sync</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Tools & Workflows</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Git/GitHub</Badge>
                  <Badge>Visual Studio</Badge>
                  <Badge>Blender</Badge>
                  <Badge>Unity Profiler</Badge>
                  <Badge>Version Control</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
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
    </main>
  )
}
