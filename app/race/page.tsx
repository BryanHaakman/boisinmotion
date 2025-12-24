import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Race | Bois in Motion",
  description: "Join upcoming Bois in Motion events, races, and training camps in Canada.",
}

export default function RacePage() {
  // TODO: Load events from /content/events/*.md via blog.ts utility
  const upcomingEvents = [
    {
      id: 1,
      title: "Toronto Waterfront Marathon",
      date: "2025-05-04",
      location: "Toronto, ON",
      description: "Join the crew for one of Canada's fastest marathons.",
      category: "Featured Race",
    },
    {
      id: 2,
      title: "Bois in Motion 5K Meetup",
      date: "2025-02-15",
      location: "Queen's Park, Toronto, ON",
      description: "Community run and coffee gathering. All paces welcome.",
      category: "Community Event",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h1 className="mb-4">Race</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Discover upcoming races, training camps, and community events hosted by or featuring the Bois. From 5K meetups to marathons, find your next challenge.
              </p>
              <Button variant="primary">
                Subscribe to Event Alerts
              </Button>
            </div>
            <div className="bg-gradient-to-br from-accent to-primary rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-2">🏁</div>
                <p>Race Season Ready</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="mb-12">Upcoming Events</h2>

          <div className="grid gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="border-l-4 border-primary bg-card rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full mb-2">
                          {event.category}
                        </span>
                        <h3 className="text-2xl font-bold">{event.title}</h3>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <p className="text-muted-foreground flex items-center gap-2">
                        <span className="text-primary">📅</span>
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <span className="text-primary">📍</span>
                        {event.location}
                      </p>
                    </div>

                    <p className="text-foreground mb-6">{event.description}</p>

                    <div className="flex gap-3">
                      <Button variant="primary">
                        Register Now
                      </Button>
                      <Button variant="outline">
                        Add to Calendar
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Camps CTA */}
      <section className="py-12 md:py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4">Coming Soon: Training Camps</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Multi-day immersive training experiences with the Bois. Learn from us, push your limits, and build lifelong friendships.
          </p>
          <Button variant="secondary">
            Join the Waitlist
          </Button>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Community Members", value: "2,400+" },
              { label: "Races Hosted", value: "8" },
              { label: "Kilometers Logged", value: "45K+" },
              { label: "Countries Represented", value: "3" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border border-border rounded-lg p-6 text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
