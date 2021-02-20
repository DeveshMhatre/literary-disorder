import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  const handleThemeChange = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <main className={`layout ${theme}`}>
      <Header handleThemeChange={handleThemeChange} />
      {children}
      <Footer />
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
