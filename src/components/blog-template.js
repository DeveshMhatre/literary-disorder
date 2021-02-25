import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from './layout'

const BlogTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <article className="main article">
        <h3 className="article__title">{frontmatter.title}</h3>
        <p className="post-meta">
          {frontmatter.date}
          <span className="post-meta__separator">&#9679;</span>{' '}
          {frontmatter.readingTime} Min Read
        </p>
        <section
          className="article__body"
          dangerouslySetInnerHTML={{ __html: html }}
        ></section>
      </article>
    </Layout>
  )
}

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        readingTime
      }
    }
  }
`

BlogTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.node.isRequired,
      frontmatter: PropTypes.shape({
        date: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        readingTime: PropTypes.number.isRequired,
      }),
    }),
  }),
}

export default BlogTemplate