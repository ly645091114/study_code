let fs = require('fs')

fs.readdir('../', function (error, files) {
  if (error) {
    return console.log('目录不存在')
  }
  console.log(files)
})
