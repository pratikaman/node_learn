const express = require('express');
const app = express();

//  req => middleware => res

const logger = (req, res, next)=>{
    const method = req.method;
    const url = req.url;
    const year = new Date().getFullYear();
    console.log(method,url,year);
    next()
}

app.get(
    '/', logger,
    (req,res)=>{
        res.send('home')
    }
)
app.get(
    '/about',logger,
    (req,res)=>{
        res.send('about')
    }
)
app.listen(5001, ()=>{console.log("listening on 5001")})