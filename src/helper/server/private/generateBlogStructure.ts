import fs from 'fs/promises'
import path from 'path'

interface BlogPost {
  title: string;
  link: string;
  description: string;
}

async function generateBlogStructure(): Promise<BlogPost[]> {
  const filePath = path.join(process.cwd(), 'src/directories/introduction/blog-lists.mdx')
  const content = await fs.readFile(filePath, 'utf-8')

  const blogPosts: BlogPost[] = []
  const lines = content.split('\n')

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    if (!line) continue

    // Match markdown link pattern [title](link)
    const regex = /\[(.*?)\]\((.*?)\)/
    const match = regex.exec(line)
    
    if (match) {
      const [, title, link] = match
      
      // Get description from next line if it exists
      let description = ''
      if (i + 1 < lines.length) {
        description = lines[i + 1].trim()
      }

      blogPosts.push({
        title: title.trim(),
        link: link.trim(),
        description
      })
    }
  }

  return blogPosts
}

export { generateBlogStructure }