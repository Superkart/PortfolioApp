"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight hover:text-muted-foreground transition-colors"
          >
            KR
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/GameDev"
              className={`text-sm font-medium transition-colors ${
                pathname === "/GameDev" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Game Dev
            </Link>
            {isHomePage ? (
              <>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("timeline")}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Journey
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </button>
              </>
            ) : (
              <Link
                href="/"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
