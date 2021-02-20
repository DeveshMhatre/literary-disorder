import React from 'react'

import ThemeContextProvider from './src/contexts/ThemeContext'

import './src/styles/index.scss'

export const wrapRootElement = ({ element }) => (
  <ThemeContextProvider>{element}</ThemeContextProvider>
)
