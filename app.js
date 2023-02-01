const EventEmitter = require('events')

const myNameEmitter = new EventEmitter();

myNameEmitter.on(
    'pratik',
    (name, bd) => {
        console.log(`${name} ${bd}`)
    }
)

myNameEmitter.on(
    'tanya',
    (name, bd) => {
        console.log(`${name} ${bd}`)
    }
)

setInterval(
    () => {
        myNameEmitter.emit('tanya', 'tanya', 23)
    },
    2000
)
setInterval(
    () => {
        myNameEmitter.emit('pratik', 'pratik', 28)
    },
    1000
)