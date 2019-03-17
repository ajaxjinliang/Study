const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
  console.log(req.url);
  fs.readFile(`www${req.url}`, (err, buffer) => {
    if (err) {
      res.writeHeader(404);
      res.write("NOT Found");
      res.end();
    } else {
      res.write(buffer);
      res.end();
    }
  });
});
server.listen(8080);