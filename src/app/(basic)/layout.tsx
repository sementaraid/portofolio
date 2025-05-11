import { ThemeSwitcher } from "@/components/theme/theme-switcher"
import { ReactNode } from "react"
import { Navbar } from "@/components/theme/navbar"
import Footer from "@/components/theme/footer"
import HeaderGlow from "@/assets/svgs/header-glow"

type LayoutProps = Readonly<{
  children: ReactNode
}>

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="relative w-full">
        <HeaderGlow className="absolute z-[-1] w-full"/>
        <div className="flex justify-center py-8">
          <div className="flex gap-2 items-center shadow-lg rounded-full p-2 bg-transparent backdrop-blur supports-[backdrop-filter]:bg-blue-500/5 border border-white/20 dark:border-white/10">
            <Navbar />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
      {children}
      <Footer/>
    </>
  )
}

export default Layout