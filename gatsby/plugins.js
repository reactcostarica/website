/* eslint-disable @typescript-eslint/camelcase */
const path = require('path')

const fromRoot = (...p) => path.resolve(__dirname, '..', ...p)
const fromSrc = (...p) => fromRoot('src', ...p)

const plugins = {
  typescript: 'gatsby-plugin-typescript',
  resolveSrc: 'gatsby-plugin-resolve-src',
  helmet: 'gatsby-plugin-react-helmet',
  material: 'gatsby-plugin-material-ui',
  sharp: 'gatsby-plugin-sharp',
  sharpTransformer: 'gatsby-transformer-sharp',
  offline: 'gatsby-plugin-offline',
  manifest: {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'React Costa Rica',
      short_name: 'React Costa Rica',
      start_url: '/',
      background_color: '#663399',
      theme_color: '#663399',
      display: 'minimal-ui',
      icon: fromSrc('assets/images/logo.png'),
    },
  },
  layout: {
    resolve: 'gatsby-plugin-layout',
    options: {
      component: fromSrc('layout'),
    },
  },
  images: {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: fromSrc('assets/images'),
    },
  },
}

module.exports = [
  plugins.typescript,
  plugins.resolveSrc,
  plugins.manifest,
  plugins.helmet,
  plugins.layout,
  plugins.material,
  plugins.sharp,
  plugins.sharpTransformer,
  plugins.images,
  plugins.offline,
]
