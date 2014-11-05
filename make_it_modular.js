var filter_by_extension = require('./mymodule.js')

var dir = process.argv[2];
var filter = process.argv[3];
filter_by_extension(dir, filter, function(err, data) {
  if (err)
    return console.log(err);

  data.forEach(function(filename) {
    console.log(filename);
  });
});
