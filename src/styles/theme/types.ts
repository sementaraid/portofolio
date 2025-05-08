type ThemeInitialState = 'light' | 'dark' | 'system'

type ThemeState = {
  theme: ThemeInitialState
}

type ThemeAction = {
  setTheme: (nextTheme: ThemeState['theme'] | ((currentTheme: ThemeState['theme']) => ThemeState['theme'])) => void
}