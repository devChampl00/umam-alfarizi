"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Server, Database, Code, GitBranch, Cloud, Cpu } from "lucide-react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about")
      if (element) {
        const position = element.getBoundingClientRect()
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const skills = [
    { name: "Node.js", icon: <Server className="h-4 w-4" /> },
    { name: "Express.js", icon: <Code className="h-4 w-4" /> },
    { name: "MongoDB", icon: <Database className="h-4 w-4" /> },
    { name: "PostgreSQL", icon: <Database className="h-4 w-4" /> },
    { name: "RESTful APIs", icon: <Cloud className="h-4 w-4" /> },
    // { name: "GraphQL", icon: <GitBranch className="h-4 w-4" /> },
    // { name: "Docker", icon: <Cpu className="h-4 w-4" /> },
    { name: "Microservices", icon: <Server className="h-4 w-4" /> },
    // { name: "AWS", icon: <Cloud className="h-4 w-4" /> },
    // { name: "CI/CD", icon: <GitBranch className="h-4 w-4" /> },
  ]

  return (
    <section id="about" className="py-20 bg-zinc-950">
      <div
        className={`container px-4 md:px-6 transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <div className="mt-4 text-zinc-400">
            <p className="mb-4">
              With 3 years of experience in web development, I love exploring JavaScript technologies, and I'm always
              excited to learn and build cool stuff.
            </p>
            <p>
              Besides coding, I enjoy reading books and watching movies—they're a great way to spark new ideas and
              unwind. I'm also into sports like football, working out, and boxing to stay active and push my limits.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-center mb-6">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-3 py-1 text-sm bg-zinc-800/50 hover:bg-zinc-800 transition-colors text-zinc-200"
              >
                {skill.icon}
                <span className="ml-1">{skill.name}</span>
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
