let http = require('http')

let server = http.createServer()
server.on('request', function () {
  console.log('收到客户端的请求！')
})

server.listen(8080, function () {
  console.log('服务器启动成功！')
})
