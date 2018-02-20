module.exports = function(app) {
  const express = require('express')
  const router = express.Router()

  const users = require('./users.js')(app)
  const search = require('./search.js')(app)

  router.use('/users', users)
  router.use('/search', search)

  return router
}
