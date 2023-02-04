const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    console.log("user hit resiurces")
    res.status(200);
    res.send("home page");
})

app.get('/about', (req, res)=>{

    res.status(200);
    res.send("about");
})

app.get('*', (req, res)=>{

    res.status(400);
    res.send("<h1>resource not found </h1>");
})

app.listen(5001, ()=>{
    console.log('server is listening on port 5001')
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
