import React from 'react'
import { Link } from 'gatsby'

const PageNotFound = () => {
  return (
    <main className="not-found">
      Could not find the page you are looking for!
      <Link to="/">Go back</Link>
    </main>
  )
}

export default PageNotFound
