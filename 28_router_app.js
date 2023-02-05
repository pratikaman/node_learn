const express = require('express')
const app = express()

const people = require('./29_router_people')
const auth = require('./30_router_auth')

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/api/people', people)
app.use('/login', auth)

app.listen(5001, () => {
  console.log('Server is listening on port 5000....')
})
