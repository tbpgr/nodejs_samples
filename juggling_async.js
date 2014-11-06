var http = require('http')
var bl = require('bl')
var results = []
var argsOffset = 2
var paramsSize = 3

function printResults () {
  for (var i = 0; i < paramsSize; i++)
    console.log(results[i])
}

function httpGet (index) {
  http.get(process.argv[argsOffset + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()

      if (results.length == paramsSize )
        printResults()
    }))
  })
}

for (var i = 0; i < paramsSize; i++)
  httpGet(i)
