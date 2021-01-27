module.exports = {
  // Customize your site metadata:
  siteMetadata: {
    title: `Alex Liu`,
    author: `Alex Liu`,
    description: `Alex Liu's Personal Site`,
    siteUrl: 'https://alexliusiqing.com',
    social: [
      {
        name: `Github`,
        url: `https://github.com/alexliusq`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: '/'
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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-YK59HW0HJ1"
        ],
        gtagConfig: {
          anonymize_ip: false
        },
        pluginConfig: {
          // Setting this parameter is also optional
          respectDNT: true,
        },
      }
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
