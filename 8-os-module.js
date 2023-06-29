const os = require('os')

// Info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The Sytem up time is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    archi: os.arch()
}
console.log(currentOS);