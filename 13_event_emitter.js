const EventEmitter = require('events')

const myNameEmitter = new EventEmitter();

myNameEmitter.on(
    'pratik',
    (stream)=>{
        console.log(stream)
    }
)