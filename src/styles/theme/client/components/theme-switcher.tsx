'use client';

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { setCookies } from "@/helper/cookies";
import { Settings } from "@/config";
import { useThemeSwitcher } from "@/styles/theme/client/context";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useThemeSwitcher(state => state)

  const handleThemeChange = (theme: ThemeInitialState) => {
    document.body.classList.remove('dark', 'light')
    document.body.classList.add(theme)
    setTheme(theme)
    setCookies(Settings.Cookies.Theme, theme)
  }

  return (
    <Button
      variant={'ghost'}
      onClick={() => handleThemeChange(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? <Sun /> : <Moon />}
    </Button>
  )
}

export { ThemeSwitcher }