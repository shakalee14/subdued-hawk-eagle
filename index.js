const http = require('http');

const server = http.createServer( (req, res) => {
  res.writeHead(200)
  res.end('Hello Http')
})

server.listen(3000)