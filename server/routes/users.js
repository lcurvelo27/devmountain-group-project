module.exports = function(app) {
  const express = require('express')
  const router = express.Router()

  router.post(`/`, (req, res) => {
    console.log(`POST api/users/ hit`)
    return res.status(200).send('ok')
  })

  router.put(`/`, (req, res) => {
    console.log(`PUT api/users/ hit`)
    return res.status(200).send('ok')
  })

  router.get(`/`, (req, res) => {
    console.log(`GET api/users/ hit`)
    return res.status(200).send('ok')
  })

  return router
}
