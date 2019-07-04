const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/newtest', {useNewUrlParser: true}) // 链接数据库

/**
 * 创建一个模型
 * 设计数据库
 * MongoDB 是动态的，非常灵活，只需在代码中设计数据库即可
 * mongoose 让设计编写过程变得更简单
 */
const Cat = mongoose.model('Cat', { name: String }) // 创建 Cat 表，表中有一个字段 name， 数据类型是 String

let num = 1
while (num < 11) {
  let index = num
  const kitty = new Cat({ name: `kitty${index}` }) // 实例化一个 Cat
  kitty.save().then(() => console.log(`meow${index}`)) // 持久化保存 kitty 实例
  num++
}
