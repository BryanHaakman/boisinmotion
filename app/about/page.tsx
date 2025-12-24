import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About | Bois in Motion",
  description: "Meet Bryan, Andrew, and Tyler—the hosts of Bois in Motion. Their stories, PRs, and passion for the endurance community.",
}

export default function AboutPage() {
  const hosts = [
    {
      name: "Bryan",
      bio: "Marathon enthusiast and the voice of experience. Bryan brings strategic training wisdom and race day insights from years of competitive running.",
      pb: "Sub-3 Marathoner",
      favoriteRace: "Toronto Waterfront Marathon",
      quote: "The only bad run is the one you didn't do.",
      specialty: "Marathon Training",
    },
    {
      name: "Andrew",
      bio: "The triathlon guy. Andrew bridges running, cycling, and swimming—sharing how to balance multiple sports without burning out.",
      pb: "Olympic Distance Triathlon",
      favoriteRace: "Muskoka 70.3",
      quote: "Consistency beats intensity every single time.",
      specialty: "Multi-Sport Training",
    },
    {
      name: "Tyler",
      bio: "Speed work specialist and community connector. Tyler lives for the local running scene and organizes grassroots events across Canada.",
      pb: "Sub-17 5K",
      favoriteRace: "Taiga Festival 5K Series",
      quote: "Fast running is built on the fundamentals.",
      specialty: "Speed & Intervals",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="mb-4">About the Bois</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Bois in Motion was born from a simple idea: demystify endurance sports through honest conversations. Bryan, Andrew, and Tyler started as teammates and friends. Now, they're building a community of Canadian endurance athletes who support each other, push each other, and celebrate every step forward.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Create a strong community for endurance sports enthusiasts through engaging content, inspiring stories, and expert insights.
            </p>
          </div>
        </div>
      </section>

      {/* North Star Goals */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="mb-12">Our North Star</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏃",
                title: "100K First-Timers",
                description: "Support 100,000 people to complete their first half or full marathon, triathlon, or century ride.",
              },
              {
                icon: "🎉",
                title: "IRL Events",
                description: "Host in-person events with 100 people, bringing the community together offline.",
              },
              {
                icon: "✈️",
                title: "International Camp",
                description: "Host a cost neutral international training camp with the crew.",
              },
            ].map((goal) => (
              <div
                key={goal.title}
                className="border border-border rounded-lg p-6 hover:border-primary transition-colors"
              >
                <div className="text-4xl mb-3">{goal.icon}</div>
                <h3 className="text-lg font-bold mb-2">{goal.title}</h3>
                <p className="text-muted-foreground text-sm">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Hosts */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="mb-12">Meet the Crew</h2>

          <div className="grid gap-8 md:grid-cols-3">
            {hosts.map((host) => (
              <div
                key={host.name}
                className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Avatar Placeholder */}
                <div className="bg-gradient-to-br from-primary to-accent h-64 flex items-center justify-center text-white text-6xl font-bold">
                  {host.name.charAt(0)}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{host.name}</h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {host.bio}
                  </p>

                  {/* Stats */}
                  <div className="space-y-3 mb-6 pb-6 border-b border-border">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                        Personal Best
                      </p>
                      <p className="font-bold text-primary">{host.pb}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                        Favorite Race
                      </p>
                      <p className="font-bold">{host.favoriteRace}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                        Specialty
                      </p>
                      <p className="font-bold text-accent">{host.specialty}</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="italic text-muted-foreground text-sm border-l-2 border-primary pl-4">
                    "{host.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-12 md:py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="mb-8">How It Started</h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Three friends. Three different relationships with running. One shared passion for the endurance community.
              </p>

              <p>
                Bryan, Andrew, and Tyler met at a local running club in Toronto. Week after week, their conversations evolved beyond pace splits and mile times. They talked about the mental game. The fear of the unknown. How to balance ambition with enjoyment. How to stay humble when you're chasing big goals.
              </p>

              <p>
                They realized: these conversations were rare. Most endurance communities focus on the numbers. But what about the person behind the shoes? What about the doubts, the recoveries, the life stuff that happens between training blocks?
              </p>

              <p>
                Bois in Motion exists to fill that gap. We're here to prove that you don't need to be "elite" to matter in the endurance community. We're here to celebrate the grind in all its forms.
              </p>

              <p>
                Welcome to the crew. Now let's get moving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="mb-8">Our Philosophy</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            At Bois in Motion, our mission is to create valuable, engaging, and relevant content for our community of endurance sports enthusiasts. Here's how we achieve this:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "👥",
                title: "Audience-Centric Approach",
                description: "We prioritize understanding our audience's needs, interests, and challenges to deliver valuable and engaging content.",
              },
              {
                icon: "💎",
                title: "Quality Over Quantity",
                description: "We focus on producing well-researched, insightful, and entertaining content, aiming for impact over follower growth or subscriber counts.",
              },
              {
                icon: "🎯",
                title: "Authenticity and Integrity",
                description: "We're stand up Bois.",
              },
              {
                icon: "🤝",
                title: "Engagement and Community Building",
                description: "We foster a strong, interactive community by actively engaging with our followers and encouraging discussions and feedback.",
              },
              {
                icon: "📈",
                title: "Continuous Improvement",
                description: "We commit to learning and evolving based on audience feedback and industry trends, regularly updating our content strategies and processes as needed.",
              },
            ].map((principle) => (
              <div
                key={principle.title}
                className="border border-border rounded-lg p-6 hover:border-primary transition-colors"
              >
                <div className="text-4xl mb-3">{principle.icon}</div>
                <h3 className="text-lg font-bold mb-2">{principle.title}</h3>
                <p className="text-muted-foreground text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values / Themes */}
      <section className="py-12 md:py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="mb-12">Our Core Values</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "😄",
                title: "Fun / Casual / Comedic",
                description: "We maintain a lighthearted and approachable tone, making our content enjoyable and relatable.",
              },
              {
                icon: "💪",
                title: "Supportive / Motivating",
                description: "We aim to inspire and motivate our audience, creating a supportive environment for all.",
              },
              {
                icon: "📚",
                title: "Informative / Insight Generating",
                description: "We provide valuable information and insights, helping our audience improve and succeed.",
              },
              {
                icon: "⚡",
                title: "Current",
                description: "We stay up-to-date with the latest trends and developments.",
              },
            ].map((theme) => (
              <div
                key={theme.title}
                className="border border-border rounded-lg p-6 hover:border-primary transition-colors"
              >
                <div className="text-4xl mb-3">{theme.icon}</div>
                <h3 className="text-lg font-bold mb-2">{theme.title}</h3>
                <p className="text-muted-foreground text-sm">{theme.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4">Ready to Join the Community?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to the podcast, join the Strava club, or just show up to the next meetup. We can't wait to meet you.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button variant="primary">
              Listen Now
            </Button>
            <Button variant="outline">
              Join Community
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
