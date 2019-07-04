let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/crud', { useNewUrlParser: true }, function (error) { // 连接数据库
  if (error) {
    console.log(error)
    return console.log(`Connect Error: ${error}`)
  }
  console.log('Connect Success')
})

let Schema = mongoose.Schema

let userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: Number,
    enum: [0, 1],
    default: 0
  },
  age: {
    type: Number
  },
  job: {
    type: String
  }
})

module.exports = mongoose.model('Student', userSchema)
