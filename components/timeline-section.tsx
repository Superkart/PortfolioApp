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
  {
    year: "2020-2021",
    title: "From Coursework to Building Products",
    description: `Strengthened CS fundamentals through Design & Analysis of Algorithms, Computer Networks, Software Engineering, and Data Mining.
    Started applying theory to real systems. Thinking in terms of performance, structure, and scalability.
    In my 6th semester, I explored Unity as a way to learn interactive software engineering and rapid iteration.
    For my minor project, I chose to build a complete project end-to-end beyond the suggested topics.
    That experience shaped how I approach engineering: creative, hands-on, and focused on shipping.`,
    category: "Transformation",
},
  {
  year: "2019-2020",
  title: "Object-Oriented & Systems Thinking",
  description: `Learned Java through OOP coursework.
  Studied Operating Systems and RDBMS — exploring concurrency, memory management, and database design.
  Began understanding how larger systems are structured.`,
  category: "Education",
},
  {
    year: "2018-2019",
    title: "Programming Foundations Take Shape",
    description: `Re-learned C in first year. This time with real understanding.
    Studied Data Structures and Computer Organization.
    Programming shifted from memorizing syntax to understanding logic and memory.`,
    category: "Education",
  },
  {
    year: "2017",
    title: "My First Line of Code",
    description: `Introduced to C programming in 11th grade.
    Wrote my first “Hello, World” program and saw code turn into output.
    At the time, loops and pointers felt abstract.
    But it was my first real glimpse of how software is built.`,
    category: "Education",
  },
  {
    year: "2010-2013",
    title: "Understanding How Software Works",
    description: `Used Inspect Element to see how websites were structured.
    Compressed files, burned CDs, converted media formats, and managed storage.
    Learned Microsoft Word, Excel, and PowerPoint, even experimenting with formulas.
    Modified game assets and experimented with cheat tools just to understand mechanics.
    The curiosity shifted from “using software” to understanding how it was built.`,
    category: "Growth",
  },
  {
    year: "2009-2012",
    title: "Learning by Breaking Things",
    description: `Formatted the PC (once accidentally) and reinstalled Windows when it slowed down.
    Installed drivers and understood why hardware compatibility mattered.
    Troubleshot missing DLL errors and performance issues while installing games.
    Dealt with viruses from the internet and learned how antivirus software worked.
    This phase taught me that systems aren't magic, they can be fixed and understood.`,
    category: "Exploration",
  },

  {
    year: "2007-2008",
    title: "Discovering the Internet",
    description: `BSNL was our first internet connection, and it felt like opening a new world.
    Email was the first “Wow” moment. My first inbox was Rediffmail, while my dad used Yahoo.
    Online games and sites like CartoonNetwork.com became a routine.
    Suddenly I could watch YouTube, download games, and discover music beyond what we had locally.`,
    category: "Discovery",
  },
  {
    year: "2005",
    title: "The First Computer at Home",
    description:
      "Dad set up our first home PC (Windows 2000).\n" +
      "No dedicated GPU, so some games didn't run.\n" +
      "Started with video games, then explored music, videos, and MS Paint.\n" +
      "Everything was offline cause no internet yet.",
    category: "Beginning",
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
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{event.description}</p>
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
