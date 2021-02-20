import React, { createContext, useState, useMemo } from 'react'
import PropTypes from 'prop-types'

export const ThemeContext = createContext('light')

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  const contextValue = useMemo(() => {
    return { theme, setTheme }
  }, [theme])

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ThemeContextProvider
