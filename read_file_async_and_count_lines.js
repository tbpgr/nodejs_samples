var fs = require('fs');
fs.readFile(process.argv[2], function(err, file) {
  var lines = file.toString().split("\n").length - 1;
  console.log(lines);
});
