let template = require('art-template')
let fs = require('fs')

fs.readFile('./tpl.html', function (error, data) {
  if (error) {
    return console.log('读取文件失败')
  }
  let ret = template.render(data.toString(), {
    name: '邦尼',
    age: 23,
    hometown: '深圳',
    hobbies: ['唱', '跳', 'rap', '篮球']
  })
  console.log(ret)
})
