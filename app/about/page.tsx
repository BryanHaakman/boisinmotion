import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About | Bois in Motion",
  description: "Meet Bryan, Andrew, and Tyler—the hosts of Bois in Motion. Their stories, PRs, and passion for the endurance community.",
}

export default function AboutPage() {
  const hosts = [
    {
      name: "Bryan",
      bio: "Training junkie who lives for the grind. Bryan balances cycling and running, bringing a multisport perspective with insights on building endurance across disciplines.",
      pb: "Multiple Sport PRs",
      favoriteRace: "Gran Fondo & Marathon Events",
      quote: "The only bad run is the one you didn't do.",
      specialty: "Cycling & Running Training",
    },
    {
      name: "Andrew",
      bio: "The one-trick pony runner who's all about the marathon. Andrew is a sub-2:45 marathoner chasing the world majors with laser focus on the 26.2.",
      pb: "Sub-2:45 Marathoner",
      favoriteRace: "World Marathon Majors",
      quote: "Consistency beats intensity every single time.",
      specialty: "Marathon Racing",
    },
    {
      name: "Tyler",
      bio: "The triathlete and ironman enthusiast. Tyler bridges running, cycling, and swimming—sharing how to balance multiple sports and tackle long-course racing.",
      pb: "Ironman Finisher",
      favoriteRace: "Ironman 70.3 & Full Distance",
      quote: "Fast running is built on the fundamentals.",
      specialty: "Triathlon & Ironman",
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

      {/* Core Values */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="mb-12">Our Values</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "🎯",
                title: "Relentless Honesty",
                description: "No fluff. We share wins and losses. That's where trust is built.",
              },
              {
                icon: "🤝",
                title: "Community Over Competition",
                description: "Competition makes us faster. Community makes us stronger. We do both.",
              },
              {
                icon: "📈",
                title: "Growth For All",
                description: "Beginner or sub-3 marathoner—your progress matters equally. All paces welcome.",
              },
              {
                icon: "🇨🇦",
                title: "Canadian Pride",
                description: "We're building the endurance community right here in Canada. From coast to coast.",
              },
              {
                icon: "💪",
                title: "The Grind is Sacred",
                description: "We respect the work. Early mornings, late nights, and every rep in between.",
              },
              {
                icon: "🎓",
                title: "Learn & Share",
                description: "What we know, we teach. What we're learning, we share. Forever students.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="border border-border rounded-lg p-6 hover:border-primary transition-colors"
              >
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
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
