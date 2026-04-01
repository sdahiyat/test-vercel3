import { Camera, Sparkles, Users, Zap } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <header className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Camera className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">PhotoBuddy</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground">Features</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground">Pricing</a>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90">
              Sign In
            </button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6">
        <section className="py-16 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Share Photos. Get AI Insights.
            <br />
            <span className="text-primary">Grow Your Craft.</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            PhotoBuddy combines social photo sharing with AI-powered feedback to help photographers 
            improve their skills, discover new techniques, and connect with a creative community.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg hover:opacity-90">
              Start Sharing Photos
            </button>
            <button className="border border-border px-8 py-3 rounded-lg text-lg hover:bg-muted">
              See Examples
            </button>
          </div>
        </section>

        <section id="features" className="py-16">
          <h3 className="text-3xl font-bold text-center mb-12">Powerful Features for Photographers</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border bg-card">
              <Sparkles className="h-10 w-10 text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">AI Photo Analysis</h4>
              <p className="text-muted-foreground">
                Get instant feedback on composition, lighting, and technical aspects of your photos.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <Zap className="h-10 w-10 text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">Smart Editing Suggestions</h4>
              <p className="text-muted-foreground">
                Receive personalized editing recommendations to enhance your photos.
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <Users className="h-10 w-10 text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">Photography Community</h4>
              <p className="text-muted-foreground">
                Connect with fellow photographers, share your work, and get inspired.
              </p>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-16">
          <h3 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-lg border bg-card">
              <h4 className="text-2xl font-bold mb-4">Free</h4>
              <p className="text-3xl font-bold mb-6">$0<span className="text-sm text-muted-foreground">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li>✓ 10 photo uploads per month</li>
                <li>✓ Basic community features</li>
                <li>✓ Photo sharing and likes</li>
                <li>✗ AI analysis</li>
                <li>✗ Advanced editing tools</li>
              </ul>
              <button className="w-full border border-border py-3 rounded-lg hover:bg-muted">
                Get Started
              </button>
            </div>
            <div className="p-8 rounded-lg border bg-primary text-primary-foreground">
              <h4 className="text-2xl font-bold mb-4">Pro</h4>
              <p className="text-3xl font-bold mb-6">$10<span className="text-sm opacity-80">/month</span></p>
              <ul className="space-y-3 mb-8 opacity-90">
                <li>✓ Unlimited photo uploads</li>
                <li>✓ AI-powered photo analysis</li>
                <li>✓ Smart editing suggestions</li>
                <li>✓ Auto-tagging and captions</li>
                <li>✓ Priority support</li>
              </ul>
              <button className="w-full bg-background text-foreground py-3 rounded-lg hover:opacity-90">
                Start Free Trial
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-12 mt-16">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera className="h-6 w-6 text-primary" />
            <span className="font-semibold">PhotoBuddy</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 PhotoBuddy. Empowering photographers with AI.
          </p>
        </div>
      </footer>
    </div>
  )
}
