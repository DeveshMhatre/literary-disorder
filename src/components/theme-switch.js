import React, { useContext } from 'react'

import { ThemeContext } from '../contexts/ThemeContext'

const ThemeSwitch = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const handleThemeChange = (e) => {
    e.preventDefault()

    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <>
      <button
        className="theme-switch icon-btn"
        onClick={handleThemeChange}
        aria-label="Change Theme"
      >
        <i className="gg-sun"></i>
      </button>
    </>
  )
}

export default ThemeSwitch
