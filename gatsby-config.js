module.exports = {
  // Customize your site metadata:
  siteMetadata: {
    title: `Byproducts of Being`,
    author: `Alex Liu`,
    description: `Alex Liu's Personal Site`,
    siteUrl: 'https://alexliusiqing.com',
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: '/blog'
      }
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alex Liu`,
        short_name: `Alex Liu`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/waving-emoji.png`,
      },      
    },
  ],
}
