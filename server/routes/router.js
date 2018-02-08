module.exports = function(app) {
  const express = require('express')
  const router = express.Router()

  const users = require('./users.js')(app)

  router.use('/users', users)

  return router
}
