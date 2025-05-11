import { openSans } from "@/components/fonts"
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
          openSans.className,
          'text-sm rounded-full font-semibold shadow-none'
        )}>
        Welcome
      </AnantaraLink>
      <AnantaraLink
        href={"/blogs/introduction"}
        className={cn(
          buttonVariants({ variant: "default" }),
          openSans.className,
          'text-sm rounded-full font-semibold shadow-none'
        )}>
        Blogs
      </AnantaraLink>
      {/* <AnantaraLink
        href={"/show-case"}
        className={cn(
          buttonVariants({ variant: "default" }),
          openSans.className,
          'text-sm rounded-full font-semibold shadow-none'
        )}>
        Show case
      </AnantaraLink> */}
      <AnantaraLink
        href={"/about-me"}
        className={cn(
          buttonVariants({ variant: "default" }),
          openSans.className,
          'text-sm rounded-full font-semibold shadow-none'
        )}>
        About me
      </AnantaraLink>
    </div>
  )
}

export { Navbar }