import { Camera, Sparkles, Users, Zap } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      {/* Navigation */}
      <nav className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Camera className="w-8 h-8 text-primary-600" />
            <h1 className="text-xl font-bold text-gray-900">PhotoBuddy</h1>
          </div>
          <div className="space-x-4">
            <Link href="/auth/signin" className="text-gray-600 hover:text-gray-900">
              Sign In
            </Link>
            <Link href="/auth/signup" className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 text-balance">
            Share Photos. Get <span className="text-primary-600">AI Insights</span>.
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-balance">
            The social platform where photographers share their work and AI helps them improve. 
            Get instant feedback, editing suggestions, and connect with the community.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link href="/auth/signup" className="block sm:inline-block bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700">
              Start Sharing
            </Link>
            <Link href="/explore" className="block sm:inline-block border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50">
              Explore Photos
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Analysis</h3>
            <p className="text-gray-600">
              Get instant feedback on composition, lighting, and style. AI suggests improvements and auto-tags your photos.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-accent-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Photography Community</h3>
            <p className="text-gray-600">
              Connect with photographers worldwide. Follow, like, comment, and learn from each other's work.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Editing</h3>
            <p className="text-gray-600">
              AI-suggested edits and style transfers. Turn your photos into masterpieces with intelligent assistance.
            </p>
          </div>
        </div>

        {/* Pricing Preview */}
        <div className="mt-24 bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Start Free, Upgrade When Ready</h3>
            <p className="text-gray-600 mb-6">
              Free users get 10 uploads per month. Pro users get unlimited uploads plus advanced AI features for $10/month.
            </p>
            <Link href="/auth/signup" className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700">
              Try PhotoBuddy Free
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-24 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
          <p>&copy; 2024 PhotoBuddy. Built for photographers, by photographers.</p>
        </div>
      </footer>
    </div>
  )
}
