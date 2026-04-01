import { Camera, Users, Sparkles, Heart } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Camera className="h-8 w-8 text-primary-600" />
          <h1 className="text-2xl font-bold text-gray-900">PhotoBuddy</h1>
        </div>
        <div className="space-x-4">
          <button className="px-4 py-2 text-primary-600 hover:text-primary-700">
            Sign In
          </button>
          <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">
          AI-Powered Photo Sharing
          <br />
          <span className="text-primary-600">for Photographers</span>
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Upload your photos, get AI feedback, connect with fellow photographers, and grow your craft in our creative community.
        </p>
        <button className="px-8 py-4 bg-primary-600 text-white text-lg rounded-lg hover:bg-primary-700 transition-colors">
          Start Sharing Photos
        </button>
      </section>

      {/* Features */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Sparkles className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Photo Analysis</h3>
            <p className="text-gray-600">
              Get intelligent feedback, editing suggestions, and auto-tagging for your photos using advanced AI.
            </p>
          </div>
          <div className="text-center p-6">
            <Users className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Social Community</h3>
            <p className="text-gray-600">
              Follow photographers, discover amazing work, and engage with a passionate photography community.
            </p>
          </div>
          <div className="text-center p-6">
            <Heart className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Grow Your Craft</h3>
            <p className="text-gray-600">
              Improve your photography skills with personalized AI insights and community feedback.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-primary-600 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to elevate your photography?</h3>
        <p className="text-xl mb-8 text-primary-100">
          Join PhotoBuddy and start sharing your work today.
        </p>
        <button className="px-8 py-4 bg-white text-primary-600 text-lg rounded-lg hover:bg-gray-100 transition-colors">
          Create Free Account
        </button>
      </section>
    </main>
  )
}
