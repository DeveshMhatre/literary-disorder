import React, { useState } from 'react'
import { Link } from 'gatsby'

import ThemeSwitch from './theme-switch'

const MobileMenu = () => {
  const [overlay, setOverlay] = useState(false)

  const handleOverlay = (e) => {
    e.preventDefault()

    overlay ? setOverlay(false) : setOverlay(true)
  }

  return (
    <div className="header__menu">
      <button
        className="icon-btn header__menu--btn"
        onClick={handleOverlay}
        aria-label="Right Align"
      >
        <i className="gg-menu-right"></i>
      </button>

      <div className={overlay ? 'menu-overlay' : 'menu-overlay--disabled'}>
        <div className="menu-overlay__btns">
          <ThemeSwitch />
          <button
            className="icon-btn"
            onClick={handleOverlay}
            aria-label="Close Menu"
          >
            <i className="gg-close"></i>
          </button>
        </div>

        <div className="menu-overlay__links">
          <Link
            activeStyle={{ fontWeight: '800' }}
            className="header-link"
            to="/"
          >
            Home
          </Link>
          <Link
            activeStyle={{ fontWeight: '800' }}
            partiallyActive={true}
            className="header-link"
            to="/posts"
          >
            Posts
          </Link>
          <Link
            activeStyle={{ fontWeight: '800' }}
            className="header-link"
            to="/about"
          >
            About
          </Link>
          <Link
            activeStyle={{ fontWeight: '800' }}
            className="header-link"
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
