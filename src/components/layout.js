import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { ThemeContext } from '../contexts/ThemeContext'

import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <main className={`layout ${theme === undefined ? 'light' : theme}`}>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
