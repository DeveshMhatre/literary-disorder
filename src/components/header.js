import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { ThemeContext } from '../contexts/ThemeContext'

import ThemeSwitch from './theme-switch'
import MobileMenu from './mobile-menu'

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const handleThemeChange = (e) => {
    e.preventDefault()
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
        <Link className="header-link header__links--link" to="/">
          Home
        </Link>

        <Link className="header-link header__links--link" to="/posts">
          Posts
        </Link>

        <Link className="header-link header__links--link" to="/about">
          About
        </Link>

        <Link className="header-link header__links--link" to="/contact">
          Contact
        </Link>

        <ThemeSwitch />
      </div>

      <MobileMenu handleThemeChange={handleThemeChange} />
    </header>
  )
}

export default Header
