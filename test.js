'use strict'

var test = require('tape')
var blurActive = require('./')

test(function (t) {
  t.doesNotThrow(blurActive)
  t.end()
})
