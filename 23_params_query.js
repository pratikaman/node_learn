const express = require('express');
const app = express();
const {products} = require('./data')

app.get('/', (req, res) => {
    res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
  })
app.get('/api/products', (req,res)=>{
    res.json(products.map((item)=>{
        const {id, name, image} = item
        return {id, name, image}
    }))
})

app.listen(5001, ()=>{console.log("listening on 5001")})