require('dotenv').config()

const siteMetadata = require('./gatsby/meta')
const plugins = require('./gatsby/plugins')

module.exports = {
  siteMetadata,
  plugins,
}
