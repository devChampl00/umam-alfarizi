"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("portfolio")
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

  const projects = [
    {
      title: "Laravel Realtime Chat",
      description:
        "A real-time chat application built with Laravel, featuring instant messaging capabilities using Pusher for websocket connections.",
      image: "https://i.ibb.co.com/jvmsyXry/user1.png",
      tags: ["Laravel", "Chatify", "Pusher"],
      liveUrl: "#",
      githubUrl: "https://github.com/devChampl00/laravel-chat",
    },
    {
      title: "Simple Clean Blog",
      description:
        "A clean, minimalist blog platform built with Node.js, Express, and MongoDB, featuring responsive design with Bootstrap.",
      image: "https://i.ibb.co.com/GfY3X1RT/ss-blog-home.png",
      tags: ["Node.js", "Express", "EJS", "MongoDB", "Bootstrap"],
      liveUrl: "https://lostpeople.vercel.app",
      githubUrl: "https://github.com/devChampl00/myblog",
    },
    {
      title: "Note Taking API",
      description:
        "RESTful API for note-taking applications built with Node.js and Express, providing CRUD operations for managing notes.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Node.js", "Express", "REST API"],
      liveUrl: "https://expressjs-notes-app.vercel.app/",
      githubUrl: "https://github.com/devChampl00/expressjs-notes-app",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-zinc-950">
      <div
        className={`container px-4 md:px-6 transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Portfolio</h2>
          <p className="mt-4 text-zinc-400">A selection of my recent backend development projects</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-zinc-800/50 border-zinc-700 transition-all duration-300 hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/10"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-zinc-100">{project.title}</h3>
                <p className="text-zinc-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-zinc-700 text-zinc-200">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" /> Live
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" /> Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
