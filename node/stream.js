const fs = require('fs')
var zlib = require('zlib')

/********************************************************/
// let data = '牛肉饭牛逼'
// let writerStream = fs.createWriteStream('output.txt')
// writerStream.write(data, 'UTF8')
// writerStream.end() // 标记文件末尾
// writerStream.on('finish', () => { // 处理流事件
//   console.log('写入完成。')
// })
// writerStream.on('error', (err) => {
//   console.log(err.stack)
// })

// console.log('程序执行完毕')


/*********************************************************/
// let readerStream = fs.createReadStream('input.txt')
// let writerStream = fs.createWriteStream('output.txt')
// readerStream.pipe(writerStream)
// console.log('程序执行完毕')

// 压缩 input.txt 文件为 input.txt.gz
// fs.createReadStream('input.txt')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('input.txt.gz'))
  
// console.log("文件压缩完成。")

fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('gzip.txt'))

  console.log('文件解压完成')