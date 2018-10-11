let http = require('http')
http.createServer((request, response) => {
  // 发送 HTTP 头部
  // HTTP 状态值：200：OK
  // 内容类型：text/pain
  response.writeHead(200, {
    'Content-Type': 'text/pain'
  })
  let text = 9 + 2
  // 发送相应数据
  response.end(`9 + 2 = ${text}`)
}).listen(8888)

console.log('服务已启动 http://127.0.0.1:8888/')