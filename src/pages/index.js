import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PostLink from '../components/post-link'

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
      <article className="main home">{Posts}</article>
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
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
