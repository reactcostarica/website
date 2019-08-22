/* eslint-disable @typescript-eslint/camelcase */
const path = require('path')

const fromRoot = (...p) => path.resolve(__dirname, '..', ...p)
const fromSrc = (...p) => fromRoot('src', ...p)

const plugins = {
  typescript: 'gatsby-plugin-typescript',
  resolveSrc: 'gatsby-plugin-resolve-src',
  sharpTransformer: 'gatsby-transformer-sharp',
  sharp: 'gatsby-plugin-sharp',
  helmet: 'gatsby-plugin-react-helmet',
  emotion: 'gatsby-plugin-emotion',
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
  images: {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: fromSrc('assets/images'),
    },
  },
  layout: {
    resolve: 'gatsby-plugin-layout',
    options: {
      component: fromSrc('layouts/app/index.tsx'),
    },
  },
}

module.exports = [
  plugins.typescript,
  plugins.resolveSrc,
  plugins.sharpTransformer,
  plugins.sharp,
  plugins.helmet,
  plugins.emotion,
  plugins.manifest,
  plugins.images,
  plugins.layout,
  plugins.offline,
]
