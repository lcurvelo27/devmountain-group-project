module.exports = function(app) {
  const express = require('express')
  const router = express.Router()

  router.post('/:username', (req, res) => {
      app.get('db').theme.update_theme({
      authid: req.body.authid,
      username: req.body.username,
      theme: req.body.theme,
    })
      .then(response => {
        return res.status(200).send(response)
      })
      .catch(err => {
        console.log(err)
        return res.status(500).send('error')
      })
  })
  return router
}
