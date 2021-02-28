import React from 'react'
import { navigate } from 'gatsby'

import ThemeContextProvider from './src/contexts/ThemeContext'

import './src/styles/index.scss'

// Global context provider
export const wrapRootElement = ({ element }) => (
  <ThemeContextProvider>{element}</ThemeContextProvider>
)

// Prevent navigating to these pages unless redirected
export const onInitialClientRender = () => {
  if (
    window.location.pathname.startsWith('/thankyou') ||
    window.location.pathname.startsWith('/404') ||
    window.location.pathname.startsWith('/seo')
  ) {
    navigate('/')
  }
}
