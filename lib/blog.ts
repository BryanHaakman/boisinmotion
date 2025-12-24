import fs from "fs"
import path from "path"
import matter from "gray-matter"

const contentDirectory = path.join(process.cwd(), "content/blog")

export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  content: string
}

export function getAllBlogPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(contentDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "")
      const fullPath = path.join(contentDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        date: data.date,
        author: data.author,
        excerpt: data.excerpt,
        content,
      }
    })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: data.date,
      author: data.author,
      excerpt: data.excerpt,
      content,
    }
  } catch {
    return null
  }
}
