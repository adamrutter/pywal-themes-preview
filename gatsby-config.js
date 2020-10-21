module.exports = {
  pathPrefix: "/pywal-themes-preview",
  siteMetadata: {
    title: "Pywal Themes Preview",
    description: "Preview the built-in Pywal themes.",
    siteUrl: "https://adamrutter.github.io/pywal-themes-preview",
    author: "Adam Rutter",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pywal Themes Preview`,
        short_name: `Pywal Themes Preview`,
        start_url: `/`,
        theme_color: `#343a40`,
        display: `minimal-ui`,
        icon: `src/svg/favicon.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-goatcounter`,
      options: {
        code: `pywal-themes-preview`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    "gatsby-plugin-loadable-components-ssr",
  ],
}
