const os = require('os')

const user = os.userInfo()

console.log(user)

console.log(`system uptime is ${os.uptime()/3600} hours`)

currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(), 
    machine: os.machine(),
    network: os.networkInterfaces()
}

console.log(currentOs)