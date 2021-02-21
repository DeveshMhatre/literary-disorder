import React from 'react'
import PropTypes from 'prop-types'

const SocialLink = ({ link, children }) => (
  <>
    <a className="social-link" href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  </>
)

SocialLink.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default SocialLink
