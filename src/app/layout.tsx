import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Olusol Ajayi - Software/AI Engineer',
  description:
    'Senior Full-Stack Engineer with 8+ years building scalable web applications across fintech, AI platforms, and industrial systems. React, TypeScript, Node.js, AWS.',
  icons: {
    icon: '/images/sola-ajayi.png',
    shortcut: '/images/sola-ajayi.png',
    apple: '/images/sola-ajayi.png',
  },
  openGraph: {
    title: 'Olusol Ajayi - Software/AI Engineer',
    description:
      'Building scalable web applications across fintech, AI, and industrial systems.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans min-h-screen">{children}</body>
    </html>
  )
}
