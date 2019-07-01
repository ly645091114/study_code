let http = require('http')

let server = http.createServer()
/**
 * request 请求时间处理函数，需要接受两个参数：
 *  Request 请求对象
 *    请求对象可以用来获取客户端的一些请求信息，例如请求路径
 *  Response 响应对象
 *    响应对象可以用来给客户端发送响应消息
 * 端口号范围从 0 ~ 65536
 * http 服务端口 80
 */
server.on('request', function (request, response) {
  let res = ''
  console.log(`收到客户端的请求，请求路径: ${request.url}`)
  console.log(`访问客户端的地址:${request.socket.remoteAddress}:${request.socket.remotePort}`)
  response.setHeader('Content-Type', 'text/plain; charset=utf-8')
  /**
   * 根据不同的请求路径发送不同的响应结果
   * 127.0.0.1:8080/test /test
   * 1.获取请求路径
   * 2.判断路径处理响应
   */
  switch (request.url) {
    case '/':
      res = '首页'
      break
    case '/login':
      res = '登录'
      break
    case '/register':
      res = '注册'
      break
    case '/666':
      res = [{
        name: 'iPhone 8 Plus',
        price: 5999
      }]
      break
    default:
      res = '404 Not Found.'
      break
  }
  /**
   * response 对象有一个方法: write 可以用来给客户端发送响应数据
   * write 可以使用多次，但是最后一定要使用 end 来结束响应，否则客户端会一直等待
   */
  response.end(JSON.stringify(res))
})

server.listen(8080, function () {
  console.log('服务器启动成功！')
})
