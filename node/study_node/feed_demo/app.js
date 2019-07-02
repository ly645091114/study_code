let http = require('http')
let fs = require('fs')
let url = require('url')
let template = require('art-template')

let comments = []

http.createServer(function (req, res) { // 构建服务实例，一次请求对应一次响应
  let parseObj = url.parse(req.url, true)
  let pathname = parseObj.pathname
  if (pathname === '/') { // 首页
    console.log(`${req.socket.remoteAddress} is visiting ${pathname}`)
    fs.readFile('./views/index.html', function (error, data) {
      if (error) {
        return res.end('404 Not Found.')
      }
      let htmlStr = template.render(data.toString(), {
        comments
      })
      res.end(htmlStr)
    })
  } else if (pathname === '/post') { // 发表评论
    console.log(`${req.socket.remoteAddress} is visiting ${pathname}`)
    fs.readFile('./views/post.html', function (error, data) {
      if (error) {
        return res.end('404 Not Found.')
      }
      res.end(data)
    })
  } else if (pathname === '/submit') { // 表单提交接口
    console.log(`${req.socket.remoteAddress} is visiting ${pathname} say: ${parseObj.query.message}`)
    let comment = parseObj.query
    comment.dateTime = formatTime(new Date)
    comments.unshift(comment)

    /**
     * 如何通过服务器让客户端重定向？
     *  1.状态码设置 302 临时重定向（301 永久重定向）
     *  2.在响应头中通过 Location 告诉 客户端往哪重定向
     * 如果客户端发现收到服务器的响应的状态码是 302 就会自动去响应头找 Location，然后对该地址发起新的请求
     */
    res.statusCode = 302
    res.setHeader('Location', '/')
    res.end()
  } else if (pathname.indexOf('/public/') === 0) { // 公共资源访问
    fs.readFile(`.${pathname}`, function (error, data) {
      if (error) {
        return res.end('404 Not Found.')
      }
      res.end(data)
    })
  } else {
    fs.readFile('./views/404.html', function (error, data) { // 无效链接页面
      if (error) {
        return res.end('404 Not Found.')
      }
      res.end(data)
    })
  }
}).listen(8087, function () {
  console.log('Server is running ...')
})

/**
 * @description 时间格式化
 * @param { Any } time 格式化时间
 * @returns { String } 格式化日期
 */
const formatTime = function (time) {
  let date = new Date(time)
  let YYYY = date.getFullYear()
  let MM = date.getMonth() + 1
  let DD = date.getDate()
  let HH = date.getHours()
  let mm = date.getMinutes()
  let ss = date.getSeconds()
  return `${YYYY}/${doubleNum(MM)}/${doubleNum(DD)} ${doubleNum(HH)}:${doubleNum(mm)}:${doubleNum(ss)}`
}

/**
 * @description 个位数的值在前方加 0 零
 * @param { Number } num 处理参数
 * @return { String } 格式化参数
 */
const doubleNum = function (num) {
  return num < 10 ? `0${num}` : String(num)
}
