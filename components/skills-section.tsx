import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Astro",
      "HTML/CSS",
      "Tailwind CSS",
      "Responsive Design",
      "State Management",
    ],
  },
  {
    title: "Backend Development",
    skills: [
      "Spring Boot",
      "Java",
      "Node.js",
      "Express",
      "RESTful APIs",
      "Authentication",
      "OAuth 2.0",
      "Spring Data JPA",
      "API Design",
    ],
  },
  {
    title: "Database & Cloud",
    skills: ["PostgreSQL", "SQL", "MongoDB", "Cloudflare Workers", "Vercel", "Database Design", "ORM", "Spring Scheduling"],
  },
  {
    title: "Data Science & Analytics",
    skills: [
      "Python",
      "pandas",
      "Jupyter Notebook",
      "Google Colab",
      "Data Visualization",
      "Data Lineage",
      "Survey Analysis",
      "Web Scraping",
    ],
  },
  {
    title: "Game Development & XR",
    skills: [
      "Unity",
      "C#",
      "OpenXR",
      "VR Development",
      "AR Foundation",
      "HDRP / URP",
      "Custom Shaders",
      "Unity Netcode",
      "Physics Systems",
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      "TypeScript",
      "JavaScript",
      "Java",
      "Python",
      "C#",
      "C++",
      "SQL",
    ],
  },
  {
    title: "Tools & Practices",
    skills: ["Git", "GitHub", "CI/CD", "Agile/Scrum", "Testing", "Code Review", "VS Code", "Visual Studio"],
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
            <p className="text-lg text-muted-foreground">Technical expertise in full-stack software development</p>
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
