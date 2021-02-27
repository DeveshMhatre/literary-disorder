import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const PageNotFound = () => {
  return (
    <Layout>
      <article className="main info-page">
        <h3 className="info-page__heading">
          Could not find the page you are looking for&hellip;
        </h3>
        <Link to="/" className="info-page__link">
          Go back
        </Link>
      </article>
    </Layout>
  )
}

export default PageNotFound
