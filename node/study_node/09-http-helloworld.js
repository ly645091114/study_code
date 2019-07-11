let http = require('http')
let fs = require('fs')

let server = http.createServer()

server.on('request', function (req, res) {
  let defaultUrl = './sams/dist'
  let url = req.url
  let filePath = '/'
  if (url === '/') {
    filePath = '/index.html'
  } else if (url.indexOf('/index.html') === -1) {
    filePath = url
  }
  fs.readFile(`${defaultUrl}${filePath}`, function (error, data) {
    if (error) {
      return res.end('404 Not Found.')
    }
    res.end(data)
  })
})

server.listen(8088, function () {
  console.log('Server is running ...')
})
