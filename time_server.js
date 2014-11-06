var net = require('net')
var strftime = require('strftime')

var port = process.argv[2]
var server = net.createServer(function (socket) {
  now = strftime('%Y-%m-%d %H:%M', new Date())
  socket.end(now + '\n')
})
server.listen(port)
