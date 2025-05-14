import { ReactNode } from "react"
type BlogLayoutProps = {
  children: ReactNode
}

const BlogDetailLayout = ({ children }: Readonly<BlogLayoutProps>) => {
  return (
    <div className="w-full max-w-[720px] mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 space-y-4 sm:space-y-6">
      {children}
    </div>
  )
}

export default BlogDetailLayout