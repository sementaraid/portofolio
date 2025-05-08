import { geistMono } from "@/styles/fonts"
import { ThemeSwitcher } from "@/styles/theme"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import { Navbar } from "@/components/theme/navbar"
import Footer from "@/components/theme/footer"

type LayoutProps = Readonly<{
  children: ReactNode
}>

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="max-w-3xl m-auto px-4">
      <div className="flex justify-between py-8">
        <span/>
        <div className="flex gap-2 items-center">
          <Navbar/>
          <ThemeSwitcher/>
        </div>
      </div>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout