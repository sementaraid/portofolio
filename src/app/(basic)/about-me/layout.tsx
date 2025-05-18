import { ReactNode } from "react"

type AboutMeLayoutProps = {
  children: ReactNode
}

const AboutMeLayout = ({ children }: Readonly<AboutMeLayoutProps>) => {
  return (
    <div className="max-w-[720px] m-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 space-y-6">
      {children}
    </div>
  )
}

export default AboutMeLayout