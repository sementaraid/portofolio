import { BorderBeam } from "@/components/magicui/border-beam"
import { Typography } from "@/components/theme/typography"
import { Card, CardContent } from "@/components/ui/card"
import { generateBlogStructure } from "@/helper/server/private/generateBlogStructure"
import Link from "next/link"

const BlogHome = async () => {
  const blogList = (await generateBlogStructure()).slice(0, 8);

  return (
    <div className="basis-1/2">
      <div className="space-y-4">
        <Typography variant="h1">Latest update</Typography>
        {blogList.map((blog, index) => (
          <Link href={blog.link} key={blog.link}>
            <Card className="py-0 mb-6 border-0 group relative flex flex-col justify-between overflow-hidden bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              {index < 3 && <BorderBeam size={150} duration={10} />}
              <CardContent className="p-6 hover:bg-primary/5 transition-colors space-y-6">
                <Typography variant="h5">
                  {blog.title}
                </Typography>
                <Typography variant="p" className="text-sm">
                  {blog.description}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default BlogHome