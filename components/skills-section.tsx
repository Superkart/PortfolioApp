import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Game Development",
    skills: [
      "Unity",
      "C#",
      "Unity Netcode",
      "OpenXR",
      "XR Interaction Toolkit",
      "Physics Systems",
      "AI Pathfinding",
      "Multiplayer Networking",
      "HDRP",
      "Custom Shaders",
    ],
  },
  {
    title: "Web Development",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Hono",
      "Spring Boot",
      "Java",
      "RESTful APIs",
    ],
  },
  {
    title: "Cloud & Backend",
    skills: ["Cloudflare Workers", "Vercel", "Netlify", "PostgreSQL", "D1", "Drizzle ORM", "Docker", "Firebase"],
  },
  {
    title: "Data Science & ML",
    skills: [
      "Python",
      "Jupyter Notebook",
      "pandas",
      "NumPy",
      "NLTK",
      "TF-IDF",
      "scikit-learn",
      "Data Visualization",
      "Provenance Tracking",
    ],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "OAuth/OpenID", "WebGL", "Axios", "REST APIs"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Skills & Technologies</h2>
            <div className="h-1 w-20 bg-primary" />
            <p className="text-lg text-muted-foreground">A diverse toolkit for building modern applications</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <Card key={category.title} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
