let http = require('http')
let fs = require('fs')

let server = http.createServer()

let wwwDir = './'

server.on('request', function (req, res) {
  let url = req.url
  /**
   * 1.如何得到 wwwDir 目录列表中的文件名和目录名
   *  fs.readdir
   * 2.如何将得到的文件名和目录名替换到 template.html 中
   *  2.1在 template.html 中需要替换的位置预留一个特殊的标记
   *  2.2根据 files 生成需要的 Html 内容
   */
  fs.readFile('./template.html', function (error, data) {
    if (error) {
      return res.end('404 Not Find.')
    }
    fs.readdir(wwwDir, function (error, files) {
      if (error) {
        return res.end('Can not find this dir')
      }
      // 生成需要替换的内容
      let content = ''
      files.forEach(function (item) {
        content += `
          <tr>
            <td data-value="${item}"><a class="icon dir" href="${wwwDir}/${item}">${item}</a></td><td class="detailsColumn" data-value="0"></td>
            <td class="detailsColumn" data-value="1524147222">2018/4/19 下午10:13:42</td>
          </tr>`
      })

      // 替换
      data = data.toString()
      data = data.replace('{{ List }}', content)

      // 解析替换过后的数据
      res.end(data)
    })
  })
})

server.listen(8086, function () {
  console.log('Server is running ...')
})
