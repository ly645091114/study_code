let http = require('http')
let fs = require('fs')
let template = require('art-template')

let server = http.createServer()

let wwwDir = './'

server.on('request', function (req, res) {
  /**
   * 1.如何得到 wwwDir 目录列表中的文件名和目录名
   *  fs.readdir
   * 2.如何将得到的文件名和目录名替换到 template.html 中
   *  2.1在 template.html 中需要替换的位置预留一个特殊的标记
   *  2.2根据 files 生成需要的 Html 内容
   */
  fs.readFile('./dirtemple.html', function (error, data) {
    if (error) {
      return res.end('404 Not Find.')
    }
    fs.readdir(wwwDir, function (error, files) {
      if (error) {
        return res.end('Can not find this dir')
      }
      files = files.map(function (item) {
        let fileInfo = fs.statSync(`${wwwDir}${item}`)
        let obj = {}
        for (let prop in fileInfo) {
          if (fileInfo.hasOwnProperty(prop)) {
            obj[prop] = fileInfo[prop]
          }
        }
        obj.mtime = formatTime(fileInfo.mtime)
        obj._type = fileType(fileInfo)
        obj._url = `${wwwDir}/${item}`
        obj.fileName = item
        return obj
      })
      // 生成需要替换的内容
      let htmlStr = template.render(data.toString(), {
        title: '索引模板测试',
        files
      })
      // 解析替换过后的数据
      res.end(htmlStr)
    })
  })
})

server.listen(8086, function () {
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

/**
 * @description 判断文件类型
 * @param { Object } 文件属性对象
 * @returns { String } 返回图标类
 */
const fileType = function (stats) {
  let isFile = stats.isFile()
  return isFile ? 'file' : 'dir'
}
