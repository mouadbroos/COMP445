
fs = require('fs');
fs.readFile('request', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});