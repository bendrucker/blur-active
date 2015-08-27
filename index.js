'use strict'

var document = require('global/document')

module.exports = function blurActive () {
  document.activeElement && document.activeElement.blur()
}
