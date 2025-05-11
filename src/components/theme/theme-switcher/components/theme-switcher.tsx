'use client';

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { setCookies } from "@/helper/client/cookies";
import { Settings } from "@/config";
import { Theme } from "@anantara/theme/types";
import { useThemeSwitcher } from "../context";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useThemeSwitcher(state => state)

  const handleThemeChange = (theme: Theme) => {
    document.body.classList.remove('dark', 'light')
    document.body.classList.add(theme)
    setTheme(theme)
    setCookies(Settings.Cookies.Theme, theme)
  }

  return (
    <Button
      variant={'ghost'}
      className="rounded-full"
      onClick={() => handleThemeChange(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? <Sun /> : <Moon />}
    </Button>
  )
}

export { ThemeSwitcher }