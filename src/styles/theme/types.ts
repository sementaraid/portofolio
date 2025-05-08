export type ThemeInitialState = 'light' | 'dark' | 'system'

export type ThemeState = {
  theme: ThemeInitialState
}

export type ThemeAction = {
  setTheme: (nextTheme: ThemeState['theme'] | ((currentTheme: ThemeState['theme']) => ThemeState['theme'])) => void
}