require('dotenv').config()
const app = require('express')()
const dbConnection = require('./config/db.js')(app)
const middleware = require('./config/middleware.js')(app)
const routes = require('./routes/router.js')(app)

app.use('/api', routes)

const port = 3000
app.listen(port, () =>{
  console.log(`listening on port ${port}`)
})
