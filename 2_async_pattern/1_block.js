const http = require('http')

const server = http.createServer(function (request, response){
    if(request.url === '/'){
        response.end("home page");
    }
    else if(request.url ==='/about'){

        /// blocking code
        for (var i = 0; i < 999; i++){
            for (var j=0; j < 999; j++){
                console.log(`${i} , ${j}`)
            }
        }
        response.end('about page.');
    }
    else{
        response.end('error page')
    }

})

server.listen(5001, ()=>{
    console.log('server started');
})