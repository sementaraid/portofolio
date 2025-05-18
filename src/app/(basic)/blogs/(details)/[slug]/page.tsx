import { generateRouteStructure } from "@/helper/server/private/generateRouteStructure"
import { notFound } from "next/navigation"

type BlogProps = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false
export const generateStaticParams = async (): Promise<{
  slug: string;
}[]> => {
  const blogs = await generateRouteStructure()
  return blogs.map((blog) => ({
    slug: blog
  }))
}


const BlogDetail = async ({ params }: Readonly<BlogProps>) => {
  const { slug } = await params
  const { default: Blog } = await import(`@/directories/blogs/${slug}.mdx`).catch(() => {
    notFound()
  })
  return <Blog key={slug} />
}

export default BlogDetail