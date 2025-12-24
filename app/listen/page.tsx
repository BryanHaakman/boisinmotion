import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Listen | Bois in Motion",
  description: "Tune in to the Bois in Motion podcast for endurance training tips, race insights, and community stories.",
}

export default function ListenPage() {
  // TODO: Load episodes from /content/episodes/*.md via blog.ts utility
  const episodes = [
    {
      id: 1,
      title: "Episode 1: Welcome to Bois in Motion",
      description: "Bryan, Andrew, and Tyler introduce the podcast and share their running origin stories.",
      date: "2025-01-01",
      spotifyUrl: "#",
      appleUrl: "#",
      tags: ["Introduction", "Community"],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h1 className="mb-4">Listen</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Dive into conversations about endurance, training, and the Canadian running community. Whether you're grinding towards your first 5K or chasing a sub-3 marathon, we've got the stories and insights you need.
              </p>
              <div className="flex gap-4">
                <Button variant="primary">
                  Listen on Spotify
                </Button>
                <Button variant="outline">
                  On Apple Podcasts
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-accent rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-2">♫</div>
                <p>Latest Episode Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Episodes Section */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="mb-12">Latest Episodes</h2>
          
          <div className="grid gap-6">
            {episodes.map((episode) => (
              <div
                key={episode.id}
                className="border border-border rounded-lg p-6 hover:bg-card/80 transition-colors"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{episode.title}</h3>
                    <p className="text-muted-foreground mb-4">{episode.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {episode.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button variant="secondary" size="sm">
                        Listen on Spotify
                      </Button>
                      <Button variant="secondary" size="sm">
                        Apple Podcasts
                      </Button>
                    </div>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    {new Date(episode.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Playlists Section */}
      <section className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="mb-12">Curated Playlists</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Marathon Prep",
                description: "Get race-ready with our comprehensive marathon training series.",
                icon: "🏃",
              },
              {
                title: "Mental Game",
                description: "Master the mental side of endurance sports.",
                icon: "🧠",
              },
              {
                title: "Recovery & Nutrition",
                description: "Fuel your body right and recover like a pro.",
                icon: "🥗",
              },
            ].map((playlist) => (
              <div
                key={playlist.title}
                className="border border-border rounded-lg p-6 hover:border-primary transition-colors"
              >
                <div className="text-4xl mb-4">{playlist.icon}</div>
                <h3 className="text-lg font-bold mb-2">{playlist.title}</h3>
                <p className="text-muted-foreground mb-4">{playlist.description}</p>
                <Button variant="ghost" size="sm">
                  Explore Playlist →
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
