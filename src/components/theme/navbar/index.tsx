import { cn } from "@/components/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { AnantaraLink } from "@/components/theme/link"


const Navbar = () => {
  return (
    <div className="flex items-center leading-relaxed gap-1">
      <AnantaraLink
        href={"/"}
        className={cn(
          buttonVariants({ variant: "default" }),
          'text-sm rounded-full font-semibold shadow-none font-open-sans'
        )}>
        Welcome
      </AnantaraLink>
      <AnantaraLink
        href={"/blogs"}
        className={cn(
          buttonVariants({ variant: "default" }),
          'text-sm rounded-full font-semibold shadow-none font-open-sans'
        )}>
        Blogs
      </AnantaraLink>
      <AnantaraLink
        href={"/about-me"}
        className={cn(
          buttonVariants({ variant: "default" }),
          'text-sm rounded-full font-semibold shadow-none font-open-sans'
        )}>
        About me
      </AnantaraLink>
    </div>
  )
}

export { Navbar }