import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Pagination = ({ currentPage, numPages }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1
  const nextPage = currentPage + 1

  const pages = Array.from({ length: numPages }, (_, index) => index + 1)

  const pageLinks = pages.map((page, index) => (
    <Link
      key={`page-link${index + 1}`}
      activeStyle={{ borderTop: '0.1rem solid var(--sec-color)' }}
      to={page !== 1 ? `/posts/${page}` : '/posts'}
      className="blog-link__text"
    >
      {page}
    </Link>
  ))

  return (
    <section className="pagination">
      {!isFirst && (
        <Link
          to={prevPage !== 1 ? `/posts/${prevPage}` : '/posts'}
          className="blog-link__text"
        >
          <i className="gg-arrow-long-left"></i> Prev
        </Link>
      )}
      {pageLinks}
      {!isLast && (
        <Link to={`/posts/${nextPage}`} className="blog-link__text">
          Next <i className="gg-arrow-long-right"></i>
        </Link>
      )}
    </section>
  )
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  numPages: PropTypes.number.isRequired,
}

export default Pagination
