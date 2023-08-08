/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Florist`,
    description: `Minimal Site To Test Gatsby+Sanity Integration`,
    author: `@a`,
  },
  plugins: [
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `${process.env.SANITY_PROJECT_ID}`,
        dataset: `production`,
        token: process.env.SANITY_TOKEN,
        graphqlTag: "default",
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
}
