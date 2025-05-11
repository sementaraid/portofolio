'use client';

import { cn } from "@/components/lib/utils";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ComponentProps } from "react"

const AnantaraLink = (props: ComponentProps<typeof Link>) => {
  const pathname = usePathname()
  const { children, className, ...rest } = props;

  const isActive = pathname === rest.href ||
    (typeof rest.href === 'string'
      ? rest.href === pathname
      : rest.href.href?.toString?.() === pathname)

  const classNames = cn(
    className,
    isActive 
      ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:shadow-xl hover:opacity-90 transition-all duration-200"
      : "bg-transparent text-foreground hover:bg-accent/80 hover:text-accent-foreground transition-colors duration-200"
  )
  return (
    <Link
      {...rest}
      className={classNames}
    >
      {children}
    </Link>
  )
}

export { AnantaraLink }