
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./soonaverse.cjs.production.min.js')
} else {
  module.exports = require('./soonaverse.cjs.development.js')
}
