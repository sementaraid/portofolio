import { generateRouteStructure } from "@/helper/server/private/generateRouteStructure"

type BlogProps = {
  params: Promise<{ slug: string }>
}

export const generateStaticParams = async (): Promise<{
  slug: string;
}[]> => {
  const blogs = await generateRouteStructure()
  return blogs.map((blog) => ({
    slug: blog.replace('/blogs','')
  }))
}

const BlogDetail = async ({ params }: Readonly<BlogProps>) => {
  const { slug } = await params
  const { default: Blog } = await import(`@/directories/blogs/${slug}.mdx`)

  return <Blog/>
}

export default BlogDetail