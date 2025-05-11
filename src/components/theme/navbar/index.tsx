import { AnantaraLink } from "@/components/lib/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { openSans } from "@/styles/fonts";

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
        href={"/show-case"}
        className={cn(
          buttonVariants({ variant: "default" }),
          openSans.className,
          'text-sm rounded-full font-semibold shadow-none'
        )}>
        Show case
      </AnantaraLink>
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