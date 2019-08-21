/* eslint-disable @typescript-eslint/camelcase */

module.exports = {
  siteMetadata: {
    title: 'React Costa Rica',
    description: 'React Costa Rica community website',
    author: '@iamkevinwolf',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-resolve-src',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: `${__dirname}/src/assets/images/logo.png`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve(`${__dirname}/src/layouts/app/index.tsx`),
      },
    },
    'gatsby-plugin-offline',
  ],
}
