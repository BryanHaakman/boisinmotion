import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Community | Bois in Motion",
  description: "Join the Bois in Motion community. Access our Strava club, Discord, and connect with runners across Canada.",
}

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="mb-4">Community</h1>
            <p className="text-lg text-muted-foreground mb-6">
              You're not training alone. Join thousands of runners, cyclists, and triathletes in the Bois in Motion community. Share your progress, find training partners, and celebrate victories together.
            </p>
          </div>
        </div>
      </section>

      {/* Main Community Channels */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="mb-12">Connect With Us</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Strava Club */}
            <div className="border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🏃</div>
              <h3 className="text-2xl font-bold mb-3">Strava Club</h3>
              <p className="text-muted-foreground mb-6">
                Join our Strava club to see what the crew is up to, compete on segments, and log your activities with the community.
              </p>
              <div className="bg-card rounded p-4 mb-6 border border-border">
                <p className="text-sm text-muted-foreground mb-1">Total Club KM</p>
                <p className="text-3xl font-bold text-primary">45K+</p>
              </div>
              <Button variant="primary" className="w-full">
                Join Strava Club
              </Button>
            </div>

            {/* Discord Server */}
            <div className="border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-3">Discord Server</h3>
              <p className="text-muted-foreground mb-6">
                Real-time chat with the community. Training advice, race tips, and just hanging out with the crew.
              </p>
              <div className="bg-card rounded p-4 mb-6 border border-border">
                <p className="text-sm text-muted-foreground mb-1">Active Members</p>
                <p className="text-3xl font-bold text-accent">2.4K+</p>
              </div>
              <Button variant="primary" className="w-full">
                Join Discord
              </Button>
            </div>

            {/* Instagram */}
            <div className="border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">📸</div>
              <h3 className="text-2xl font-bold mb-3">Instagram</h3>
              <p className="text-muted-foreground mb-6">
                Daily training updates, race recaps, and community stories. Tag us with #BoisInMotion.
              </p>
              <div className="bg-card rounded p-4 mb-6 border border-border">
                <p className="text-sm text-muted-foreground mb-1">Following</p>
                <p className="text-3xl font-bold text-primary">@boisinmotion</p>
              </div>
              <Button variant="primary" className="w-full">
                Follow on Instagram
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Challenges */}
      <section className="py-12 md:py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="mb-12">Active Challenges</h2>

          <div className="space-y-6">
            {[
              {
                title: "January Marathon Month",
                description: "Log 50+ km in January to earn the exclusive BIM badge.",
                progress: 65,
                participants: 324,
              },
              {
                title: "Speed Work Series",
                description: "Complete 4 speed sessions this month. Fast running builds fast runners.",
                progress: 42,
                participants: 189,
              },
              {
                title: "Winter Recovery Challenge",
                description: "Track 10+ hours of yoga, stretching, or cross-training.",
                progress: 78,
                participants: 412,
              },
            ].map((challenge) => (
              <div
                key={challenge.title}
                className="border border-border rounded-lg p-6 hover:border-primary transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold mb-2">{challenge.title}</h3>
                    <p className="text-muted-foreground">{challenge.description}</p>
                  </div>
                  <span className="text-sm font-bold text-accent">
                    {challenge.participants} in
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span className="font-bold text-primary">{challenge.progress}%</span>
                  </div>
                  <div className="bg-secondary rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-primary h-full transition-all"
                      style={{ width: `${challenge.progress}%` }}
                    />
                  </div>
                </div>

                <Button variant="outline" size="sm">
                  Join Challenge
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="mb-8">Community Guidelines</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-2">Be Supportive</h3>
                <p className="text-muted-foreground">
                  Everyone's on their own journey. Celebrate every PR, every finish line, every attempt.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">No Gatekeeping</h3>
                <p className="text-muted-foreground">
                  Whether you're running a 5K or an ultramarathon, you belong here.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Keep It Real</h3>
                <p className="text-muted-foreground">
                  We celebrate wins AND losses. Share your struggles. That's where growth happens.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Respect the Grind</h3>
                <p className="text-muted-foreground">
                  Training takes dedication. Respect the effort, always.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
