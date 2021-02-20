import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = ({ handleThemeChange }) => {
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

Header.propTypes = {
  handleThemeChange: PropTypes.func.isRequired,
}

export default Header
