import { inter, openSans } from '@/components/fonts'
import { cn } from '@/components/lib/utils'
import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import { ComponentProps } from 'react'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 className={cn("text-6xl font-bold text-muted-foreground", inter.className)}>{children}</h1>,
    h2: ({ children }) => <h2 className={cn("text-5xl font-bold text-muted-foreground", inter.className)}>{children}</h2>,
    h3: ({ children }) => <h3 className={cn("text-4xl font-bold text-muted-foreground", inter.className)}>{children}</h3>,
    h4: ({ children }) => <h4 className={cn("text-3xl font-bold text-muted-foreground", inter.className)}>{children}</h4>,
    h5: ({ children }) => <h5 className={cn("text-2xl font-bold text-muted-foreground", inter.className)}>{children}</h5>,
    h6: ({ children }) => <h6 className={cn("text-xl font-bold text-muted-foreground", inter.className)}>{children}</h6>,
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...(props as ComponentProps<typeof Image>)}
      />
    ),
    p: ({ children }) => <p className={cn("text-base leading-relaxed md:font-semibold text-muted-foreground text-justify", openSans.className)}>{children}</p>,
    ul:({ children }) => <ul className={cn("list-disc list-outside ml-4")}>{children}</ul>,
    ol:({ children }) => <ol className={cn("list-decimal list-outside ml-4")}>{children}</ol>,
    li: ({ children }) => <li className={cn("text-base leading-relaxed md:font-semibold text-muted-foreground", openSans.className)}>{children}</li>,
    ...components,
  }
}