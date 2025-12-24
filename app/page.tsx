import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Bois in Motion | Canadian Endurance Podcast & Community",
  description: "The podcast and community platform for Canadian endurance athletes. Training tips, race insights, and connection.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section - High Energy */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight">
                <span className="text-primary">The Podcast</span>
                {" "}for the
                <br />
                <span className="text-accent">Grind</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                Real conversations about endurance, racing, and community with Bryan, Andrew, and Tyler. Whether you're training for your first 5K or chasing a marathon PR, we've got the knowledge and the crew you need.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" className="text-lg">
                  Listen Now
                </Button>
                <Button variant="outline" size="lg" className="text-lg">
                  Join the Community
                </Button>
              </div>

              <div className="flex gap-6 pt-4">
                {[
                  { label: "Active Members", value: "2.4K+" },
                  { label: "Episodes", value: "50+" },
                  { label: "Countries", value: "3" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-primary to-accent rounded-2xl h-96 md:h-[500px] flex items-center justify-center text-white overflow-hidden">
                <div className="text-center">
                  <div className="text-8xl mb-4 animate-pulse">♫</div>
                  <p className="text-2xl font-bold">LATEST EPISODE</p>
                  <p className="text-accent-foreground/80">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars: Listen, Race, Belong */}
      <section className="py-16 md:py-24 bg-card border-t border-b border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-muted-foreground text-sm uppercase tracking-widest block mb-2">The Bois In Motion Way</span>
            <span className="text-4xl md:text-5xl font-bold">Listen. Race. Belong.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "♫",
                title: "Listen",
                description: "Dive into 50+ episodes covering training, racing, and the mental game. New drops every week.",
                cta: "Explore Podcast",
                link: "/listen",
              },
              {
                icon: "🏁",
                title: "Race",
                description: "Upcoming events, race previews, and community meetups. Find your next challenge.",
                cta: "See Events",
                link: "/race",
              },
              {
                icon: "🤝",
                title: "Belong",
                description: "Join the Strava club, Discord, and community challenges. You're not training alone.",
                cta: "Join Us",
                link: "/community",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="group border border-border rounded-lg p-8 hover:border-primary transition-all hover:shadow-lg"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{pillar.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground mb-6">{pillar.description}</p>
                <Button variant="ghost" className="group-hover:text-primary">
                  {pillar.cta} →
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What People Are Saying */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-16">Community Love</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Found my running community here. The podcast makes my long runs so much better.",
                author: "Sarah M.",
                role: "Marathon Runner",
              },
              {
                quote: "Finally, a podcast that gets it. No gatekeeping, just real talk about the grind.",
                author: "James L.",
                role: "5K Racer",
              },
              {
                quote: "The training tips have cut 2 minutes off my half marathon time. Seriously.",
                author: "Alex T.",
                role: "Sub-90 Half Marathoner",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="border border-border rounded-lg p-6 bg-card hover:border-accent transition-colors"
              >
                <p className="text-lg font-semibold mb-4 text-foreground">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest from the Blog */}
      <section className="py-16 md:py-24 bg-card border-t border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2>Training Resources</h2>
            <Button variant="outline">
              View All Articles
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Marathon Training 101",
                excerpt: "The complete 16-week plan to cross that finish line.",
                icon: "🏃",
              },
              {
                title: "Fuel Like a Pro",
                excerpt: "Nutrition strategies for endurance athletes.",
                icon: "🥗",
              },
              {
                title: "Mental Game Masterclass",
                excerpt: "How to stay strong when it gets hard.",
                icon: "🧠",
              },
            ].map((article) => (
              <div
                key={article.title}
                className="border border-border rounded-lg p-6 hover:border-primary transition-colors group cursor-pointer"
              >
                <div className="text-4xl mb-4">{article.icon}</div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{article.excerpt}</p>
                <Button variant="ghost" size="sm">
                  Read More →
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Moving?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-95">
            Join thousands of Canadian endurance athletes. Subscribe to the podcast, join the community, or register for an upcoming event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg">
              Subscribe Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg border-white text-white hover:bg-white/10"
            >
              Explore the Site
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
