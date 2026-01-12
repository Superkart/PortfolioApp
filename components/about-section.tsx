import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">About Me</h2>
            <div className="h-1 w-20 bg-primary" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl">
              <Image src="/LinkedinPhoto.png" alt="Karthik Ragi" fill className="object-cover" />
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I&apos;m <span className="text-foreground font-medium">Karthik Ragi</span>, a software developer who builds 
                interactive, reliable systems that ship. Professionally, I&apos;ve worked on{" "}
                <span className="text-foreground font-medium">defense-grade simulation and training software</span> in 
                Unity/C#, where performance, correctness, and clear engineering practices are non-negotiable.
              </p>

              <p>
                My work spans <span className="text-foreground font-medium">product and systems thinking</span>: real-time 3D, 
                gameplay logic, and AI behaviors on one side, and full-stack development with React/TypeScript and backend services 
                (Spring Boot, Node.js) on the other. I&apos;m also comfortable in data-heavy workflows using Python (pandas/Jupyter) 
                for analysis and engineering-focused projects like provenance tracking.
              </p>

              <p>
                Currently pursuing my degree at the{" "}
                <span className="text-foreground font-medium">University of Illinois Chicago</span> while building 
                polished, user-facing products and working on performance-critical systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
