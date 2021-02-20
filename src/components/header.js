import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { ThemeContext } from '../contexts/ThemeContext'

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const handleThemeChange = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <header className="header">
      <div className="header__headings">
        <p className="header__headings--logo">Literary Disorder</p>
        <p className="header__headings--subtitle">
          Random Thoughts of Devesh Mhatre
        </p>
      </div>
      <div className="header__links">
        <Link className="header__links--link" to="/">
          Home
        </Link>
        <Link className="header__links--link" to="/about">
          About
        </Link>
        <Link className="header__links--link" to="/contact">
          Contact
        </Link>
        <button className="header__links--theme" onClick={handleThemeChange}>
          Change Theme
        </button>
      </div>
    </header>
  )
}

export default Header
