import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PhotoBuddy - AI-Powered Photo Sharing',
  description: 'Share your photos and get AI-powered feedback, editing suggestions, and creative insights from the photography community.',
  keywords: 'photography, photo sharing, AI editing, photo feedback, photographer community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
