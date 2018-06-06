const cors = require('cors')
const bodyParser = require('body-parser')
const cookieMiddleware = require('universal-cookie-express')

module.exports = function(app) {
  app.use(cors({origin: true, credentials: true}))
  app.use(bodyParser.json())
}
