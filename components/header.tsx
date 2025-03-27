"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Umam Alfarizi
          </span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#about" className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100">
            About
          </Link>
          <Link href="#services" className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100">
            Services
          </Link>
          <Link href="#portfolio" className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100">
            Portfolio
          </Link>
          <Link href="#contact" className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100">
            Contact
          </Link>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col space-y-4 pb-6 pt-2 px-4">
            <Link
              href="#about"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
