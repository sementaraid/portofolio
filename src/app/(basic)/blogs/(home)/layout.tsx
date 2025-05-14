import { ReactNode } from "react"
type BlogLayoutProps = {
  children: ReactNode
}

const BlogHomeLayout = ({ children }: Readonly<BlogLayoutProps>) => {
  return (
    <div className="max-w-[1440px] m-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row gap-8 lg:gap-24">
      {children}
    </div>
  )
}

export default BlogHomeLayout