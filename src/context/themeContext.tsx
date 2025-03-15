import React, { createContext, useContext, useState } from 'react'

type Theme = 'dark' | 'light'


interface ThemeContextType {
    theme: Theme,
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) throw new Error('Use theme must be within Theme Provider')
    return context
}

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children}) => {
    const [theme, setTheme] = useState<Theme>('light')

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
