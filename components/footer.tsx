import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { Facebook } from "@/components/ui/facebook-icon"
import { Instagram } from "@/components/ui/instagram-icon"

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-900 py-6">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Umam Alfarizi
              </span>
            </Link>
            <p className="text-center text-sm text-zinc-500 md:text-left">
              © {new Date().getFullYear()} Umam Alfarizi. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/devChampl00" className="text-zinc-500 hover:text-zinc-100">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://id.linkedin.com/in/umam-alfarizi" className="text-zinc-500 hover:text-zinc-100">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://facebook.com/gper00" className="text-zinc-500 hover:text-zinc-100">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://instagram.com/umamalpharizi" className="text-zinc-500 hover:text-zinc-100">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
