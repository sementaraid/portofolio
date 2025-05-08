'use client';

import { createContext, ReactNode, RefObject, useContext, useRef } from "react"
import { create, StoreApi, UseBoundStore, useStore } from 'zustand'

type Theme = ThemeState & ThemeAction
type ThemeSwitcherProviderProps = Readonly<{
  children: ReactNode;
  initialState: ThemeInitialState
}>

const createTheme = (initialState: ThemeInitialState) => create<Theme>()((set) => ({
  theme: initialState || 'light',
  setTheme: (nextTheme) => (
    set((state) => ({
      theme: typeof nextTheme === 'function' ? nextTheme(state.theme) : nextTheme
    }))
  )
}))

const ThemeSwitcherContext = createContext<UseBoundStore<StoreApi<Theme>> | null>(null)

const useThemeSwitcher = <T,>(selector: (state: Theme) => T): T => {
  const context = useContext(ThemeSwitcherContext)
  if(!context) throw new Error('useThemeSwitcher must be used under the ThemeSwitcherProvider')
  
  return useStore(context, selector)
}

const ThemeSwitcherProvider = ({ children, initialState }: ThemeSwitcherProviderProps) => {
  const themeModeRef: RefObject<UseBoundStore<StoreApi<Theme>> | null> = useRef(null)
  themeModeRef.current ??= createTheme(initialState)

  return (
    <ThemeSwitcherContext.Provider value={themeModeRef.current}>
      {children}
    </ThemeSwitcherContext.Provider>
  )
}

export {
  ThemeSwitcherProvider,
  useThemeSwitcher
}