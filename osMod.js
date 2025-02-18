const os = require('os')
// os. will give all the properties of os module
const user = os.userInfo()
console.log(user)

// method returns the ystem uptime in seconds
console.log(`The System uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem() 
}
console.log(currentOS)