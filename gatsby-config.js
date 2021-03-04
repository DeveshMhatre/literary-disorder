module.exports = {
  siteMetadata: {
    title: 'Literary Disorder',
    titleTemplate: '%s | Literary Disorder',
    description:
      'Pesonal blog of Devesh Mhatre documenting his thoughts on music, movies, books, and tech. Made with GatsbyJS.',
    url: 'literary-disorder.netlify.app',
    image: '/favicon.ico',
    twitterUsername: '@i_am_devesh',
  },

  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/blog`,
      },
    },
  ],
}
