import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Karthik Ragi | Software Development Engineer",
  description:
    "Portfolio of Karthik Ragi - Software Development Engineer specializing in Full-Stack Web Development with expertise in React, TypeScript, Node.js, Spring Boot, and modern web technologies",
  keywords: ["Software Engineer", "Game Developer", "Data Scientist", "Unity", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Karthik Ragi" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased dark">
        {children}
      </body>
    </html>
  )
}
