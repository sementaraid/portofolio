'use client';

import { createContext, type ReactNode, type RefObject, useContext, useRef } from "react"
import { create, type StoreApi, type UseBoundStore, useStore } from 'zustand'
import { type Theme } from '@anantara/theme/types'

type ThemeState = {
  theme: Theme
}
type ThemeAction = {
  setTheme: (nextTheme: Theme | ((currentTheme: Theme) => Theme)) => void
}
type ThemeContext = ThemeState & ThemeAction
type ThemeSwitcherProviderProps = Readonly<{
  children: ReactNode;
  initialState: Theme
}>

const createTheme = (initialState: Theme) => create<ThemeContext>()((set) => ({
  theme: initialState ?? 'light',
  setTheme: (nextTheme) => (
    set((state) => ({
      theme: typeof nextTheme === 'function' ? nextTheme(state.theme) : nextTheme
    }))
  )
}))

const ThemeSwitcherContext = createContext<UseBoundStore<StoreApi<ThemeContext>> | null>(null)

const useThemeSwitcherSelector = (): Theme => {
  const context = useContext(ThemeSwitcherContext)
  if (!context) throw new Error('useThemeSwitcher must be used under the ThemeSwitcherProvider')

  return useStore(context, state => state.theme)
}

const useThemeSwitcherDispatcher = () => {
  const context = useContext(ThemeSwitcherContext)
  if (!context) throw new Error('useThemeSwitcher must be used under the ThemeSwitcherProvider')

  return useStore(context, state => state.setTheme)
}

const ThemeSwitcherProvider = ({ children, initialState }: ThemeSwitcherProviderProps) => {
  const themeModeRef: RefObject<UseBoundStore<StoreApi<ThemeContext>> | null> = useRef(null)
  themeModeRef.current ??= createTheme(initialState)

  return (
    <ThemeSwitcherContext.Provider value={themeModeRef.current}>
      {children}
    </ThemeSwitcherContext.Provider>
  )
}

export {
  ThemeSwitcherProvider,
  useThemeSwitcherSelector,
  useThemeSwitcherDispatcher,
}