import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from './layout'
import SEO from '../pages/seo'

const BlogTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const image = getImage(frontmatter.featuredImage)

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        pathname={frontmatter.slug}
        image={`${image.images.fallback.src}`}
        article
      />
      <article className="main article">
        <section className="article__head">
          <h1 className="article__head--title">{frontmatter.title}</h1>
          <GatsbyImage
            className="article__head--img"
            image={image}
            alt={frontmatter.title}
          />
        </section>
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

BlogTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.node.isRequired,
      frontmatter: PropTypes.shape({
        date: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        readingTime: PropTypes.number.isRequired,
        featuredImage: PropTypes.object.isRequired,
      }),
    }),
  }),
}

export default BlogTemplate

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        readingTime
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 500, placeholder: BLURRED, formats: [JPG])
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
