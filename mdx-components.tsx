import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import { ComponentProps } from 'react'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 className={"text-6xl font-bold text-foreground font-poppins"}>{children}</h1>,
    h2: ({ children }) => <h2 className={"text-5xl font-bold text-foreground font-poppins"}>{children}</h2>,
    h3: ({ children }) => <h3 className={"text-4xl font-bold text-foreground font-poppins"}>{children}</h3>,
    h4: ({ children }) => <h4 className="text-3xl font-bold text-foreground font-poppins">{children}</h4>,
    h5: ({ children }) => <h5 className="text-2xl font-bold text-foreground font-poppins">{children}</h5>,
    h6: ({ children }) => <h6 className="text-xl font-bold text-foreground font-poppins">{children}</h6>,
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...(props as ComponentProps<typeof Image>)}
      />
    ),
    p: ({ children }) => <p className="text-base text-foreground text-justify font-open-sans tracking-[0.175px]">{children}</p>,
    ul:({ children }) => <ul className="list-disc list-outside ml-4 font-open-sans tracking-[0.175px]">{children}</ul>,
    ol:({ children }) => <ol className="list-decimal list-outside ml-4 font-open-sans tracking-[0.175px]">{children}</ol>,
    li: ({ children }) => <li className="text-base text-foreground font-open-sans tracking-[0.175px]">{children}</li>,
    ...components,
  }
}