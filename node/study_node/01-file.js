/**
 * fs 提供文件操作相关的 API
 */
let fs = require('fs')

/**
 * 读取文件
 * 成功
 *  data 数据
 *  error null
 * 失败
 *  data undefined
 *  error 错误对象
 */
fs.readFile('./file.txt', function (error, data) {
  console.log(data.toString())
})

fs.readFile('./a.txt', function (error, data) {
  if (error) {
    console.log('读取文件失败！')
  } else {
    console.log(data.toString())
  }
})
