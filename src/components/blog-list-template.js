import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from './layout'
import SEO from '../pages/seo'
import PostLink from './post-link'
import Pagination from './pagination'

const BlogListTemplate = ({
  data: {
    allMarkdownRemark: { edges },
  },
  pageContext: { numPages, currentPage },
}) => {
  const AllPosts = edges.map((edge) => (
    <PostLink key={edge.node.id} post={edge.node} />
  ))

  return (
    <Layout>
      <SEO title="All Posts" />
      <article className="main all-posts">
        {AllPosts}
        <Pagination numPages={numPages} currentPage={currentPage} />
      </article>
    </Layout>
  )
}

BlogListTemplate.propTypes = {
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
  pageContext: PropTypes.shape({
    numPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
  }),
}

export default BlogListTemplate

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
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
