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
      "HTML/CSS",
      "Tailwind CSS",
      "Responsive Design",
      "State Management",
      "React Hooks",
    ],
  },
  {
    title: "Backend Development",
    skills: [
      "Node.js",
      "Express",
      "Spring Boot",
      "Java",
      "RESTful APIs",
      "Authentication",
      "OAuth 2.0",
      "Microservices",
      "API Design",
    ],
  },
  {
    title: "Database & Cloud",
    skills: ["PostgreSQL", "MongoDB", "SQL", "Cloudflare Workers", "Vercel", "Docker", "Database Design", "ORM"],
  },
  {
    title: "Programming Languages",
    skills: [
      "TypeScript",
      "JavaScript",
      "Java",
      "Python",
      "C#",
      "SQL",
    ],
  },
  {
    title: "Tools & Practices",
    skills: ["Git", "GitHub", "CI/CD", "Agile/Scrum", "Testing", "Code Review", "VS Code", "REST APIs"],
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
