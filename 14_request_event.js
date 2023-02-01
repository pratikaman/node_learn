const http = require('http')

const server = http.createServer()

server.on(
    'request',
    (request, response)=>{
        response.end("welcome")
    }
)

server.listen(
    5001
)