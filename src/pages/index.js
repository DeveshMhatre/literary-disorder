import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import PostLink from '../components/post-link'
import SEO from './seo'

const HomePage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  // All the posts in PostLink component
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date)
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <SEO title="Home" />
      <article className="main home">
        {Posts}
        <p className="blog-link">
          <Link to="/posts" className="blog-link__text">
            See all posts <i className="gg-arrow-long-right"></i>
          </Link>
        </p>
      </article>
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            frontmatter: PropTypes.shape({
              date: PropTypes.string.isRequired,
              slug: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              readingTime: PropTypes.number.isRequired,
              description: PropTypes.string.isRequired,
            }),
          }),
        }),
      ),
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 4
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            readingTime
            description
          }
        }
      }
    }
  }
`
