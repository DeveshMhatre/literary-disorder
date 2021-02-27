import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ThankYou = () => (
  <Layout>
    <article className="main info-page">
      <h3 className="info-page__heading">Thank you for getting in touch!</h3>
      <p className="info-page__message">
        Your message has been successfully sent! I will contact you soon!
      </p>
      <Link to="/contact" className="info-page__link">
        Go back
      </Link>
    </article>
  </Layout>
)

export default ThankYou
