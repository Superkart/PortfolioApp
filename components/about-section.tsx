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
                constantly exploring the frontiers of technology and innovation.
              </p>

              <p>
                My technical interests span across multiple domains: from creating immersive game experiences with{" "}
                <span className="text-foreground font-medium">Unity and VR/XR systems</span>, to building scalable
                full-stack web applications, to uncovering insights through data science and machine learning.
              </p>

              <p>
                What drives me is building systems that are both technically sophisticated and genuinely useful—whether
                implementing multiplayer networking for games, optimizing web performance, or tracking data provenance
                for transparency. Each project teaches me about problem-solving, system design, and writing clean,
                maintainable code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
