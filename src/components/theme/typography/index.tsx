import { ReactNode, ElementType } from 'react'
import { cn } from '@/components/lib/utils'

interface TypographyProps {
  children: ReactNode
  className?: string
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'ul' | 'ol' | 'li'
}

export const Typography = ({ children, className, variant = 'p' }: TypographyProps) => {
  const variants = {
    h1: "text-4xl sm:text-5xl md:text-6xl font-bold text-foreground font-poppins leading-tight",
    h2: "text-3xl sm:text-4xl md:text-5xl font-bold text-foreground font-poppins leading-tight",
    h3: "text-2xl sm:text-3xl md:text-4xl font-bold text-foreground font-poppins leading-tight", 
    h4: "text-xl sm:text-2xl md:text-3xl font-bold text-foreground font-poppins leading-tight",
    h5: "text-lg sm:text-xl md:text-2xl font-bold text-foreground font-poppins leading-tight",
    h6: "text-base sm:text-lg md:text-xl font-bold text-foreground font-poppins leading-tight",
    p: "text-sm sm:text-base text-foreground font-open-sans tracking-[0.175px]",
    ul: "list-disc list-outside ml-5 font-open-sans tracking-[0.175px] text-sm sm:text-base",
    ol: "list-decimal list-outside ml-5 font-open-sans tracking-[0.175px] text-sm sm:text-base",
    li: "text-sm sm:text-base text-foreground font-open-sans tracking-[0.175px]"
  }

  const Component = variant as ElementType

  return (
    <Component className={cn(className, variants[variant])}>
      {children}
    </Component>
  )
}
