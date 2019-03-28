// const http = require("http");
const net = require("net");
// const io = require("socket.io");

// let server = http.createServer((req, res) => {});
// server.listen(8080);
let server = net.createServer(sock => {
  sock.on("data", buffer=>{
    let str = buffer.toString();
  })
  console.log("有人连接");
  sock.on("end", function() {
    console.log("已断开");
  })
});
server.listen(8080);

// let wsServer = io.listen(server);
// wsServer.on('connection', sock=>{
  // sock.emit("name", 数据)
  // sock.on("aaa", function(a, b){
  //   console.log(a, b, a+b);
  // })
  // setInterval(() => {
    // sock.emit("timer", new Date().getTime());
  // }, 1000);
// })