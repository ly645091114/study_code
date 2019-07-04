let mongoose = require('mongoose')
let Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/newtest', { useNewUrlParser: true }, function (error) { // 连接数据库
  if (error) {
    return console.log(`Connect Error: ${error}`)
  }
  console.log('Connect Success')
})

/**
 * 设计集合结构（表结构）
 * 字段名称就是表结构中的属性名称
 * 约束的目的是为了保证数据的完整性，不要有脏数据
 */
let userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String
  }
})

/**
 * 将文档结构发布为模型
 *  mongoose.model 方法就是用来将一个架构发布为 model
 *  第一个参数：传入一个大写的名词单数字符串来表示集合名称
 *  mongoose 会自动将大写名词字符串生成 小写复数 的集合名称
 * 返回值： 模型构造函数
 */
let User = mongoose.model('User', userSchema)

/**
 * 新增
 */
// let admin = new User({ // 新增
//   username: 'admin',
//   password: '123456',
//   email: 'admin@admin.com'
// })

// admin.save(function (error, ret) {
//   if (error) {
//     console.log('保存失败')
//   } else {
//     console.log('保存成功')
//     console.log(ret)
//   }
// })

/**
 * 查询
 */
// User.find(function (error, ret) { // 查询所有
//   if (error) {
//     return console.log('查询失败')
//   }
//   console.log(ret)
// })

// User.find({
//   $or: [{
//     name: 'Jack'
//   },
//   {
//     username: 'admin'
//   }]
// }, function (error, ret) { // 查询或语句
//   if (error) {
//     return console.log('查询失败')
//   }
//   console.log(ret)
// })

// User.find({ // 按条件查询
//   username: 'admin'
// }, function (error, ret) { // 查询所有
//   if (error) {
//     return console.log('查询失败')
//   }
//   console.log(ret)
// })

// User.findOne({ // 查询不包含数组，返回的匹配数据的第一个
//   username: 'admin'
// }, function (error, ret) { // 查询所有
//   if (error) {
//     return console.log('查询失败')
//   }
//   console.log(ret)
// })

// /**
//  * 删除
//  */
// User.deleteOne({
//   username: 'admin'
// }, function (error, ret) {
//   if (error) {
//     return console.log('删除失败')
//   }
//   console.log(ret)
// })

/**
 * 更新
 */
User.updateOne({
  username: 'admin'
}, {
  password: '12345'
}, function (error, ret) {
  if (error) {
    return console.log('更新失败')
  }
  console.log('更新成功')
})
