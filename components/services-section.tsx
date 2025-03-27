"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Server, Code, Workflow } from "lucide-react"

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("services")
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

  const services = [
    {
      title: "Backend Development",
      description:
        "Custom backend solutions built with Node.js and Express.js. Scalable, maintainable, and optimized for performance.",
      icon: <Server className="h-10 w-10 text-blue-500" />,
    },
    {
      title: "API Integration",
      description:
        "Design and implementation of RESTful and GraphQL APIs. Seamless integration with third-party services and platforms.",
      icon: <Code className="h-10 w-10 text-purple-500" />,
    },
    {
      title: "Frontend Development",
      description:
        "Creating responsive, user-friendly interfaces with modern JavaScript frameworks and libraries. Focus on performance and accessibility.",
      icon: <Workflow className="h-10 w-10 text-blue-500" />,
    },
  ]

  return (
    <section id="services" className="py-20">
      <div
        className={`container px-4 md:px-6 transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Services</h2>
          <p className="mt-4 text-zinc-400">Specialized backend development services tailored to your project needs</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-zinc-800/50 border-zinc-700 transition-all duration-300 hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/10"
            >
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-zinc-100">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-zinc-300 text-sm">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
