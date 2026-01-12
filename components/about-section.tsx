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

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl">
              <Image src="/LinkedinPhoto.png" alt="Karthik coding" fill className="object-cover" />
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I&apos;m currently pursuing my studies at the{" "}
                <span className="text-foreground font-medium">University of Illinois Chicago</span>, where I&apos;m
                constantly expanding my knowledge in software engineering and system design.
              </p>

              <p>
                As a Software Development Engineer, I specialize in building{" "}
                <span className="text-foreground font-medium">full-stack web applications</span> using modern technologies
                like React, TypeScript, Node.js, and Spring Boot. I&apos;m passionate about creating scalable, 
                maintainable solutions with clean architecture and robust backend systems.
              </p>

              <p>
                What drives me is solving complex problems through code—whether it&apos;s designing RESTful APIs, 
                implementing authentication systems, optimizing database queries, or building responsive user interfaces.
                I believe in writing code that is not only functional but also clean, well-tested, and maintainable for 
                the long term.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
