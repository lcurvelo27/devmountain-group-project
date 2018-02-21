module.exports = function(app) {
  const express = require('express')
  const router = express.Router()

  const skills = require('./skills.js')(app)

  router.use('/skills', skills)

  router.get(`/:username`, (req, res) => {
    app.get('db').users.get_user_details({username: req.params.username})
      .then(response => {
        return res.status(200).send(response)
      })
      .catch(err => {
        console.log(err)
        res.status(500).send('there was an error')
      })
  })

  return router
}
