/**
 * 1.结合 fs 发送文件中的数据
 * 2.Content-Type
 *  https://tool.oschina.net/commons
 *  不同的资源对应的 Content-Type 是不一样的
 *  图片不需要指定编码
 *  一般只为字符数据才指定编码
 */
let http = require('http')
let fs = require('fs')

let server = http.createServer()

server.on('request', function (req, res) {
  let resdata
  res.setHeader('Content-Type', resType('text/plain'))
  switch (req.url) {
    case '/':
      fs.readFile('./resource/index.html', function (error, data) {
        if (error) {
          resdata = '文件读取失败！'
          res.end(resdata)
        } else {
          res.setHeader('Content-Type', resType('text/html'))
          resdata = data
          res.end(resdata)
        }
      })
      break
    case '/img': // 图片不需要编码
      fs.readFile('./resource/img.jpg', function (error, data) {
        if (error) {
          resdata = '文件读取失败！'
          res.end(resdata)
        } else {
          res.setHeader('Content-Type', resType('image/jpeg'))
          resdata = data
          res.end(resdata)
        }
      })
      break
    default:
      break
  }
})

const resType = function (type) {
  return `${type}; charset=utf-8`
}

server.listen(8070, function () {
  console.log('Server is running ...')
})
