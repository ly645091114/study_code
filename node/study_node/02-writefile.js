let fs = require('fs')

/**
 * 写文件
 * 成功:
 *  文件写入成功
 *  error 是 null
 * 失败:
 *  文件写入失败
 *  error 就是错误对象
 */
fs.writeFile('./write.txt', 'hello world', function (error) {
  if (!error) {
    console.log('文件写入成功！')
  }
})
