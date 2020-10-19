module.exports = {
  siteMetadata: {
    title: `Jeremy Chui | Designer - Developer - Doctor`,
    description: `A designer, developer, and doctor based in the United Kingdom. Passionate about innovation in medicine & technology.`,
    author: `@jtkchui`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jchuime`,
        short_name: `jchuime`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-24142610-6`,
      },
    },
  ],
}
