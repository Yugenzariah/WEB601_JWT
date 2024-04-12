let port = process.env.PORT || 3000 // Let my public server define the port
const http = require('http') // Core node.js http 
const url = require('url') // Core node.js url 
const app = require('./lib/helpers') // Auth token verification 

http.createServer((req, res) => {
    let path = url.parse(req.url).pathname

    if(path === '/' || path === '/home') {
        app.home(res) // Homepage
    } else if (path === '/auth') {
        app.handler(req, res) // Authenticator
    } else if (path === '/private') {
        app.validate(req, res, app.done) 
    } else if (path === '/logout') {
        app.logout(req, res, app.done)
    } else if (path === '/exit') {
        app.exit(res)
    } else app.notfound(res)
}).listen(port)

console.log(`Visit http://127.0.0.0` + port)