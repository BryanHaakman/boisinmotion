import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Welcome to <span className="text-primary">BoisInMotion</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Join our vibrant community of creators, thinkers, and innovators. 
            Connect, learn, and grow together.
          </p>
          <div className="flex gap-4 mt-8">
            <Button size="lg" className="text-lg px-8 py-6">
              Join the Community
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Podcasts</CardTitle>
              <CardDescription>
                Listen to inspiring conversations and insights from our community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="w-full">Explore Podcasts</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Events</CardTitle>
              <CardDescription>
                Participate in workshops, meetups, and community gatherings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="w-full">View Events</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Blog</CardTitle>
              <CardDescription>
                Read articles, tutorials, and stories from our members
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" className="w-full">Read Blog</Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
