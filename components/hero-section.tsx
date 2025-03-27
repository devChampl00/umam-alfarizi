"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10" />
      <div
        className={`container px-4 md:px-6 relative transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Umam Alfarizi</h1>
              <p className="text-xl text-zinc-400 md:text-2xl">Web Developer</p>
              <p className="max-w-[600px] text-zinc-400 md:text-xl mt-4">
                Building robust, scalable web applications with modern JavaScript technologies.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                asChild
              >
                <a href="#contact">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-zinc-400 text-zinc-100 hover:bg-zinc-700 hover:text-white hover:border-zinc-300"
              >
                <a href="#portfolio">View My Work</a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-zinc-800 shadow-xl">
              <Image
                src="https://i.ibb.co.com/DHkpV23v/gper.jpg"
                alt="Umam Alfarizi"
                fill
                className="object-cover [object-position:50%_35%]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
