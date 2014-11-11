var http = require('http')
var fs = require('fs')

var file = process.argv[3]
var port = Number(process.argv[2])
var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })
  fs.createReadStream(file).pipe(res)
})
server.listen(port)
