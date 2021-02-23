module.exports = {
  siteMetadata: {
    title: 'Literary Disorder',
    description:
      'A pesonal blog documenting my thoughts on music, movies, books, and tech. Made with GatsbyJS.',
    author: 'Devesh Mhatre',
  },

  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-netlify-cms',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/blog`,
      },
    },
  ],
}
