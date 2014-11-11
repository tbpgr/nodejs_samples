var http = require('http')
var url = require('url')
var port = Number(process.argv[2])

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime : time.getTime() }
}

function is_parse(url) {
  return /^\/api\/parsetime/.test(url)
}

function is_unix(url) {
  return /^\/api\/unixtime/.test(url)
}

function success_end(res, result) {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(result))
}

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var time = new Date(parsedUrl.query.iso)
  var result

  if (is_parse(req.url)) {
    result = parsetime(time)
    success_end(res, result)
  } else if (is_unix(req.url)) {
    result = unixtime(time)
    success_end(res, result)
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(port)