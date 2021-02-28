import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const PostLink = ({ post }) => (
  <section className="post-link">
    <h3 className="post-link__title">{post.frontmatter.title}</h3>
    <p className="post-link__meta post-meta">
      {post.frontmatter.date}
      <span className="post-meta__separator">&#9679;</span>{' '}
      {post.frontmatter.readingTime} Min Read
    </p>
    <p className="post-link__desc">{post.frontmatter.description}</p>
    <p className="blog-link">
      <Link className="blog-link__text" to={`/${post.frontmatter.slug}`}>
        Continue reading <i className="gg-arrow-long-right"></i>
      </Link>
    </p>
  </section>
)

PostLink.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    frontmatter: PropTypes.shape({
      date: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      readingTime: PropTypes.number.isRequired,
    }),
  }),
}

export default PostLink
