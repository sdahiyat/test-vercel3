import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PhotoBuddy - AI-Powered Photo Sharing',
  description: 'Share your photography and get AI-powered insights, edits, and feedback. Connect with photographers worldwide.',
  keywords: 'photography, photo sharing, AI, social media, VSCO, editing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
