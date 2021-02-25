import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ThankYou = () => (
  <Layout>
    <article className="main thank-you">
      <h3 className="thank-you__heading">Thank you for getting in touch!</h3>
      <p className="thank-you__message">
        Your message has been successfully sent! I will contact you soon!
      </p>
      <Link to="/contact" className="thank-you__link">
        Go back
      </Link>
    </article>
  </Layout>
)

export default ThankYou
