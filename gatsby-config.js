const tailwindcss = require('tailwindcss');

module.exports = {
  siteMetadata: {
    title: `Eunjae Lee`,
    author: `Eunjae Lee`,
    description: `Software Engineer @ Algolia`,
    siteUrl: `https://eunjae.dev`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`, // load pages from working directory (blog)
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: `${__dirname}/src/components/layout.js`,
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200, // https://github.com/gatsbyjs/gatsby/issues/15486
            },
          },
          { resolve: `gatsby-remark-prismjs` },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          tailwindcss(`${__dirname}/tailwind.config.js`),
          require('autoprefixer'),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`${__dirname}/src/css/tailwind.css`],
        content: [`${__dirname}/src/**/!(*.d).{js,jsx,ts,tsx}`],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-148411881-1',
      },
    },
  ],
};
