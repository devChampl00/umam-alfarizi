'use client'

import type React from 'react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import { Facebook } from '@/components/ui/facebook-icon'
import { Instagram } from '@/components/ui/instagram-icon'

export function ContactForm() {
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [submitError, setSubmitError] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('contact')
      if (element) {
        const position = element.getBoundingClientRect()
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  })

  const validateForm = () => {
    let isValid = true
    const newErrors = { name: '', email: '', message: '' }

    if (!formState.name.trim()) {
      newErrors.name = 'Fullname is required'
      isValid = false
    } else if (formState.name.length < 5) {
      newErrors.name = 'Minimum 5 characters required'
      isValid = false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required'
      isValid = false
    } else if (!emailRegex.test(formState.email)) {
      newErrors.email = 'Please enter a valid email'
      isValid = false
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Message is required'
      isValid = false
    } else if (formState.message.length < 10) {
      newErrors.message = 'Minimum 10 characters required'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)

    if (!validateForm()) return

    setIsSubmitting(true)

    const formData = new FormData()
    formData.append('name', formState.name)
    formData.append('email', formState.email)
    formData.append('message', formState.message)

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbzt54iJ4fwGDJEbR2ds7jIIXrlaaenojLz2-S-4sy1SGe5bv0LNviy_CYrV6Whw57k/exec',
        {
          method: 'POST',
          body: formData
        }
      )

      if (!response.ok) throw new Error('Failed to send message')

      setIsSubmitted(true)
      setFormState({ name: '', email: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error('Error:', error)
      setSubmitError('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div
        className={`container px-4 md:px-6 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-3xl text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-zinc-400">
            Have a project in mind? Let's discuss how I can help bring your
            ideas to life.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-zinc-800/50 border-zinc-700">
            <CardHeader>
              <CardTitle className="text-zinc-100">
                Contact Information
              </CardTitle>
              <CardDescription className="text-zinc-300">
                Feel free to reach out through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <a
                href="mailto:alfariziuchiha@gmail.com"
                className="flex items-center gap-2 text-zinc-300 hover:text-zinc-100 transition-colors"
              >
                <Mail className="h-5 w-5 text-blue-500" />
                alfariziuchiha@gmail.com
              </a>

              <div className="pt-4">
                <h4 className="text-sm font-medium mb-3 text-zinc-200">
                  Connect with me
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/devChampl00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-700 text-zinc-100 p-2 rounded-full hover:bg-blue-500/20 hover:text-blue-500 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href="https://id.linkedin.com/in/umam-alfarizi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-700 text-zinc-100 p-2 rounded-full hover:bg-blue-500/20 hover:text-blue-500 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="https://facebook.com/gper00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-700 text-zinc-100 p-2 rounded-full hover:bg-blue-500/20 hover:text-blue-500 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    href="https://instagram.com/umamalpharizi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-700 text-zinc-100 p-2 rounded-full hover:bg-blue-500/20 hover:text-blue-500 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-800/50 border-zinc-700">
            <CardHeader>
              <CardTitle className="text-zinc-100">Send a Message</CardTitle>
              <CardDescription className="text-zinc-300">
                Fill out the form below and I'll get back to you as soon as
                possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="bg-green-500/20 border border-green-500/50 rounded-md p-4 text-center">
                  <p className="text-green-400 font-medium">
                    Thank you for your message! I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <>
                  {submitError && (
                    <div className="bg-red-500/20 border border-red-500/50 rounded-md p-4 mb-4 text-center">
                      <p className="text-red-400 font-medium">{submitError}</p>
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-zinc-200"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className={`bg-zinc-700/50 border-zinc-600 text-zinc-100 ${
                          errors.name && 'border-red-500'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-400">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-zinc-200"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                        className={`bg-zinc-700/50 border-zinc-600 text-zinc-100 ${
                          errors.email && 'border-red-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-400">{errors.email}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-zinc-200"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        required
                        className={`min-h-[120px] bg-zinc-700/50 border-zinc-600 text-zinc-100 ${
                          errors.message && 'border-red-500'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-sm text-red-400">{errors.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
