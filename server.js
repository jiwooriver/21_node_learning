const http = require('http')
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'})
    res.write('My name is jiwoo')
    res.end()
}).listen(3000)