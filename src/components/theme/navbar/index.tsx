import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { geistMono } from "@/styles/fonts";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex gap-2 items-center leading-relaxed">
      <Link
        href={"/posts"}
        className={cn(
          buttonVariants({ variant: "link" }),
          geistMono.className,
          'font-light'
        )}>
        Posts
      </Link>
      <Link 
        href={"/about-me"} 
        className={cn(
          buttonVariants({ variant: "link" }),
          geistMono.className,
          'font-light'
        )}>
          About Me
      </Link>
    </div>
  )
}

export { Navbar }