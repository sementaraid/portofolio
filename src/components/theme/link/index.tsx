'use client';

import { cn } from "@/components/lib/utils";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ComponentProps } from "react"

const AnantaraLink = (props: ComponentProps<typeof Link>) => {
  const pathname = usePathname()
  const { children, className, ...rest } = props;

  // Compute isActive directly since we're in client component
  const isActive = pathname === rest.href || 
    (typeof rest.href === 'string' && 
      ((pathname.startsWith(rest.href) && rest.href !== '/') || 
       (rest.href === '/' && pathname === '/'))
    ) ||
    (typeof rest.href === 'object' && 
      pathname.startsWith(rest.href.href?.toString() ?? '') && 
      rest.href.href !== '/'
    );

  const classNames = cn(
    className,
    isActive 
      ? "bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:opacity-90 transition-all duration-200"
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