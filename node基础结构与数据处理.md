##fs（文件模块）
* fs.writeFile(path, data, callback)
* fs.readFile(path, callback)
##http（服务模块）
```
let server = http.createServer(function (req, res) {
  req.url(浏览器请求的地址)(GET请求)
  let arr = [];
  req.on('data', buffer=>{
    arr.push(buffer);
    绑定的data事件,分段发送数据（POST请求）
  });
  req.on('end', ()=>{
    let buffer = Buffer.concat(arr);
    buffer.toString();
    绑定的end事件，数据拿取完毕(POST请求)
  })
  res.write("abc");(服务写给浏览器的内容)
  res.end();(服务器结束)
});
server.listen(8080);
```
##url (地址,参数处理模块)
* GET=>"/aaa/b?xx=xxx&xxx=xx"
* url.parse(req.url, true)(true是解析参数为json形式)
##querystring (参数处理模块)
* POST=>"xx=xxx&xxx=xx"
* querystring.parse(str)
##数据交互
* HTTP-协议
1、HTTP 1.0 RFC-1945 (规定通信基本请求)
2、HTTP 1.1 RFC-2616 (持久连接)
3、HTTPS RFC-2818 (安全协议)
4、HTTP 2.0 RFC-7540 (加密、头部压缩、服务器推送、管线操作、多路复用)
* HTTP-报文结构
1、header
2、body
* HTTP-状态码
1、1xx (通知信息)
2、2xx (成功)
3、3xx (重定向)
4、4xx (请求错误, 客户端)
5、5xx (服务器错误，服务器)
* HTTP-请求方式
1、GET (获取)
2、POST (发送数据)
##Node.js的模块系统
* 定义模块（CMD, AMD, ESM）
CMD：
1、module (批量导出)
2、exports
3、require（1.如果有路径，去路径找。2.如果没有，去node_modules文件夹，去系统node_modules）