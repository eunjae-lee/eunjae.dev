module.exports = {
  siteMetadata: {
    title: `Eunjae Lee`,
    author: `Eunjae Lee`,
    description: `Software Engineer @ Algolia`,
  },
  plugins: [
    `gatsby-theme-mdx-blog`,
    `gatsby-theme-mdx-tailwind-blog`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-148411881-1',
      },
    },
  ],
};
