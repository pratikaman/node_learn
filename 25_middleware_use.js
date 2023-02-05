const express = require('express');
const logger = require('./logger')
const authorize = require('./authorize')
const app = express();

/// will apply to all
app.use([authorize, logger])

/// will only apply to to "/api/......" pattern
// app.use('/api', logger)

//  req => middleware => res

app.get(
    '/',
    (req, res) => {
        res.send('home')
    }
)
app.get(
    '/about',
    (req, res) => {
        res.send('about')
    } 
)
app.get('/api/products', (req, res) => {
    res.send('Products')
})
app.get('/api/items', (req, res) => {
    console.log(req.user)
    res.send('Items')
})
app.listen(5001, () => { console.log("listening on 5001") })