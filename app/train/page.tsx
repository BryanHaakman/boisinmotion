import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Train | Bois in Motion",
  description: "Training guides, tips, and insights from the Bois in Motion crew. Master running, cycling, and triathlon.",
}

export default function TrainPage() {
  // TODO: Load training guides from /content/blog/*.md via blog.ts utility
  const articles = [
    {
      id: 1,
      title: "Marathon Training 101: The 16-Week Plan",
      excerpt: "A comprehensive guide to training for your first marathon.",
      date: "2025-01-15",
      category: "Marathon Training",
      slug: "marathon-training-101",
    },
    {
      id: 2,
      title: "Fueling Strategies for Endurance Athletes",
      excerpt: "What to eat before, during, and after long efforts.",
      date: "2025-01-10",
      category: "Nutrition",
      slug: "fueling-strategies",
    },
    {
      id: 3,
      title: "Recovery: The Missing Piece of Training",
      excerpt: "Why rest days are just as important as hard workouts.",
      date: "2025-01-05",
      category: "Recovery",
      slug: "recovery-guide",
    },
  ]

  const categories = [
    "Marathon Training",
    "Half Marathon",
    "5K Racing",
    "Nutrition",
    "Recovery",
    "Mental Game",
    "Strength Training",
    "Injury Prevention",
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="mb-4">Train</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Expert training tips, nutrition guides, and mental game strategies. Whether you're building your base or tapering for a PR, we've got the knowledge you need to perform at your best.
            </p>
            <div className="flex gap-4">
              <input
                type="search"
                placeholder="Search training guides..."
                className="flex-1 px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="primary">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Articles */}
            <div className="md:col-span-2">
              <h2 className="mb-8">Latest Articles</h2>

              <div className="space-y-6">
                {articles.map((article) => (
                  <article
                    key={article.id}
                    className="border border-border rounded-lg p-6 hover:border-primary hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {new Date(article.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>

                    <Link href={`/train/${article.slug}`}>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                    </Link>

                    <p className="text-muted-foreground mb-4">{article.excerpt}</p>

                    <Link href={`/train/${article.slug}`}>
                      <Button variant="ghost" size="sm">
                        Read More →
                      </Button>
                    </Link>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <div className="border border-border rounded-lg p-6 bg-card">
                <h3 className="text-lg font-bold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <Link
                      key={cat}
                      href={`/train?category=${cat.toLowerCase()}`}
                      className="block px-3 py-2 text-muted-foreground hover:text-primary hover:bg-background rounded transition-colors text-sm"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter CTA */}
              <div className="bg-gradient-to-br from-primary to-accent rounded-lg p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Weekly Training Tips</h3>
                <p className="text-sm opacity-90 mb-4">
                  Get personalized training advice delivered to your inbox.
                </p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 rounded bg-white/20 text-white placeholder:text-white/50 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <Button variant="secondary" className="w-full">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
