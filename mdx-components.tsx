import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import { ComponentProps } from 'react'
import { Typography } from '@/components/theme/typography'
import { Highlight } from '@/components/theme/highlight'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <Typography variant="h1">{children}</Typography>,
    h2: ({ children }) => <Typography variant="h2">{children}</Typography>,
    h3: ({ children }) => <Typography variant="h3">{children}</Typography>,
    h4: ({ children }) => <Typography variant="h4">{children}</Typography>,
    h5: ({ children }) => <Typography variant="h5">{children}</Typography>,
    h6: ({ children }) => <Typography variant="h6">{children}</Typography>,
    img: (props) => (
      <Image
        width={100}
        height={100}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...(props as ComponentProps<typeof Image>)}
      />
    ),
    p: ({ children }) => <Typography variant="p">{children}</Typography>,
    ul: ({ children }) => <Typography variant="ul">{children}</Typography>,
    ol: ({ children }) => <Typography variant="ol">{children}</Typography>,
    li: ({ children }) => <Typography variant="li">{children}</Typography>,
    code: ({ children, ...props }) => {
      const isInPre = props.className?.includes('language-')
      if (!isInPre) return <code {...props}>{children}</code>
      const language = props.className?.split('language-')[1] ?? 'plaintext'
      return <Highlight language={language}>{children}</Highlight>
    },
    ...components,
  }
}