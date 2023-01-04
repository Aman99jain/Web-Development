const http = require("http");
const fs = require("fs");
const url = require("url");
const hostName = "127.0.0.1"; //localhost
const port = 8888;

console.log("Preparing server....");

const server = http.createServer((req, res) => {
  console.log("URL: " + req.url);
  var q = url.parse(req.url, true);
  console.log("Host: " + q.host);
  console.log("PathName: " + q.pathname);
  console.log("Search: " + q.search);
  if (q.pathname === "/") {
    justReadIt("index.html", res);
  } else if (q.pathname === "/contact-us") {
    justReadIt("contact-us.html", res);
  } else if (q.pathname === "/about-us" || q.pathname === "./about-us") {
    justReadIt("about-us.html", res);
  } else if (q.pathname === "/search") {
    let searchData = q.query;
    console.log(JSON.stringify(searchData));
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Searched:<h2> " + searchData.topic);
    return res.end();
  } else {
    justReadIt("index.html", res);
  }
});
function justReadIt(fileName, res) {
  fs.readFile(fileName, function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
}
server.listen(port, hostName, () => {
  console.log("Server is running at: " + hostName + " Port: " + port);
});