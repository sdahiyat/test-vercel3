import { Camera, Sparkles, Users, Heart } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Camera className="h-12 w-12 text-primary-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">PhotoBuddy</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The social platform where AI helps photographers create, share, and discover amazing content
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <Sparkles className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered Editing</h3>
            <p className="text-gray-600">
              Get intelligent photo feedback, editing suggestions, and auto-generated captions
            </p>
          </div>
          <div className="text-center p-6">
            <Users className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Connect with Photographers</h3>
            <p className="text-gray-600">
              Follow fellow photographers, discover new styles, and build your community
            </p>
          </div>
          <div className="text-center p-6">
            <Heart className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Share & Discover</h3>
            <p className="text-gray-600">
              Upload your photos, get likes and comments, and explore amazing photography
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors">
            Get Started
          </button>
          <p className="text-sm text-gray-500 mt-4">
            Free to start • Premium features available
          </p>
        </div>
      </div>
    </div>
  )
}
