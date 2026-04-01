import { Camera, Sparkles, Users, Zap } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            PhotoBuddy
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The AI-powered photo sharing platform built for photographers. 
            Share your work, get intelligent feedback, and connect with a creative community.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Camera className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Share Photos</h3>
            <p className="text-gray-600">Upload and showcase your photography with the community</p>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Sparkles className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">AI Feedback</h3>
            <p className="text-gray-600">Get intelligent suggestions for composition, editing, and style</p>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Connect</h3>
            <p className="text-gray-600">Follow photographers, discover new styles, and build your network</p>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Zap className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Pro Features</h3>
            <p className="text-gray-600">Unlimited uploads, advanced AI tools, and marketplace access</p>
          </div>
        </div>

        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6">Why PhotoBuddy?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Insights</h3>
              <p className="text-gray-600">
                Our advanced AI analyzes your photos to provide constructive feedback, 
                suggest improvements, and help you develop your unique style.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Creative Community</h3>
              <p className="text-gray-600">
                Connect with photographers at every level. Share experiences, 
                learn new techniques, and get inspired by diverse perspectives.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Grow Your Craft</h3>
              <p className="text-gray-600">
                From auto-tagging to style analysis, PhotoBuddy helps you 
                understand and improve your photography while building your portfolio.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
