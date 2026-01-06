const timelineEvents = [
  {
    year: "2024",
    title: "VR Research Project",
    description: "Developed Immersive Cosmology Explorer for scientific visualization of cosmological data",
    category: "Research",
  },
  {
    year: "2023",
    title: "Full-Stack Development",
    description: "Built Steam Accountabilibuddy with React, Spring Boot, and Cloudflare Workers",
    category: "Web Development",
  },
  {
    year: "2023",
    title: "Multiplayer Game Development",
    description: "Created QuizDefender with Unity Netcode and real-time networking",
    category: "Game Development",
  },
  {
    year: "2022",
    title: "Data Science Research",
    description: "Developed Pandas Provenance Tracker for data lineage tracking",
    category: "Data Science",
  },
  {
    year: "2022",
    title: "University of Illinois Chicago",
    description: "Started journey in Computer Science, exploring game development and web technologies",
    category: "Education",
  },
]

export function TimelineSection() {
  return (
    <section id="timeline" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">My Journey</h2>
            <div className="h-1 w-20 bg-primary" />
            <p className="text-lg text-muted-foreground">Key milestones in my technical development</p>
          </div>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-ml-px" />

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="flex-1" />

                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-ml-2 z-10" />

                  <div className="flex-1 ml-8 md:ml-0">
                    <div className="bg-card border-2 border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-primary">{event.year}</span>
                        <span className="text-xs text-muted-foreground">• {event.category}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
