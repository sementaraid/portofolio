import { ReactNode } from "react"
type BlogLayoutProps = {
  children: ReactNode
}

const BlogHomeLayout = ({ children }: Readonly<BlogLayoutProps>) => {
  return (
    <div className="max-w-[720px] m-auto space-y-6 py-16 px-4">
      {children}
    </div>
  )
}

export default BlogHomeLayout