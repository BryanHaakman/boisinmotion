import { getBlogPost, getAllBlogPosts } from "@/lib/blog"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8">
              ← Back to Blog
            </Button>
          </Link>

          <Card>
            <CardHeader className="space-y-4">
              <h1 className="text-4xl font-bold">{post.title}</h1>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <span>{post.date}</span>
                <span>•</span>
                <span>By {post.author}</span>
              </div>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <div className="whitespace-pre-wrap">{post.content}</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
