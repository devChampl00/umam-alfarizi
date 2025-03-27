import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: {
      default: 'Umam Alfarizi',
      template: '%s | Umam Alfarizi' // Dynamic title for child pages
    },
    description: 'Professional web developer specializing in modern frontend development. I build fast, responsive, and accessible web applications with React, Next.js, and Tailwind CSS.',
    keywords: [
      'web developer',
      'frontend developer',
      'React developer',
      'Next.js developer',
      'JavaScript expert',
      'portfolio'
    ],
    authors: [{ name: 'Umam Alfarizi', url: 'https://umam-alfarizi.vercel.app' }],
    generator: 'Next.js',
    applicationName: 'Umam Alfarizi Portfolio',
    creator: 'Umam Alfarizi',
    publisher: 'Umam Alfarizi',

    // Open Graph (Social Media) Metadata
    openGraph: {
      title: 'Umam Alfarizi - Web Developer',
      description: 'Professional web developer specializing in modern frontend technologies',
      url: 'https://umam-alfarizi.vercel.app',
      siteName: 'Umam Alfarizi Portfolio',
      images: [
        {
          url: '/og-image.jpg', // Recommended: 1200x630px
          width: 1200,
          height: 630,
          alt: 'Umam Alfarizi Web Developer',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },

    // Twitter Metadata
    twitter: {
      card: 'summary_large_image',
      title: 'Umam Alfarizi - Web Developer',
      description: 'Building modern web experiences with React & Next.js',
      images: ['/twitter-image.jpg'], // Recommended: 1200x675px
      creator: '@yourtwitterhandle',
    },

    // Favicons
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
      other: [
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          url: '/favicon-32x32.png',
        },
      ],
    },

    // Manifest for PWA
    manifest: '/site.webmanifest',

    // Additional
    themeColor: '#3b82f6', // Match your brand color
    category: 'technology',
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
      },
    },
  }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
