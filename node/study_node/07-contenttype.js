let http = require('http')

let server = http.createServer()

server.on('request', function (req, res) {
  /**
   * 在服务器默认发送的数据，其实是 utf8 编码的内容
   * 但是浏览器不知道你是 utf8 编码内容
   * 浏览器在不知道服务器响应内容编码的情况下会按照当前操作系统的默认编码去解析
   * 中文操作系统默认编码是 gbk
   * 解决方法正确告诉浏览器发送的内容是什么编码
   */
  console.log(`访问客户端的地址:${request.socket.remoteAddress}:${request.socket.remotePort}`)
  res.setHeader('Content-Type', resType('plain')) // 在 http 协议中，Content-Type 用来告知对方发送的数据内容是什么类型
  let str = ''
  switch (req.url) {
    case '/plain':
      str = '普通文本'
      break
    case '/html':
      res.setHeader('Content-Type', resType('html'))
      str = '<h1>页面文本</h1>'
      break
    default:
      str = '曹柳是个大傻逼'
      break
  }
  res.end(str)
})

const resType = function (type) {
  return `text/${type}; charset=utf-8`
}

server.listen(8090, function () {
  console.log('Server is running ...')
})