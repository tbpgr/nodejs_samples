var fs = require('fs');
var path = require('path');

module.exports = function filter_by_extension (dir, filterExtension, callback) {
  fs.readdir(dir, function(err, list) {
    if (err)
      return callback(err);

    list = list.filter(function(filename) {
      return path.extname(filename) === "." + filterExtension;
    });
    callback(null, list);
  });
}
