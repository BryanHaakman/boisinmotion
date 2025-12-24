import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getAllBlogPosts } from "@/lib/blog"

export default function BlogPage() {
  const blogPosts = getAllBlogPosts()

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Articles, insights, and stories from our community
          </p>

          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Card key={post.slug}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl mb-2">{post.title}</CardTitle>
                      <CardDescription className="text-base">
                        {post.excerpt}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-4 text-sm text-muted-foreground mt-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>By {post.author}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="ghost">Read More →</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
