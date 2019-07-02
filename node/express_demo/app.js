let express = require('express')
let bodyParser = require('body-parser')

let app = express()

app.use('/public/', express.static('public'))
/**
 * 引入 body-parser 中间件
 * req 请求对象上会新增一个 body 属性，通过body 获取表单 POST 请求体数据
 */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
/**
 * 配置使用 art-template 模板引擎
 * 第一个参数表示，当渲染以 .art 结尾的文件的时候，使用 art-template 模板引擎
 */
app.engine('html', require('express-art-template'))
app.set('views', 'page')

/**
 * Express 为 Response 相应对象提供一个 render 方法
 * render 方法默认是不可使用的，但是如果配置了模板引擎就可以使用了
 */

let comments = []
app.get('/', function (req, res) {
  res.render('index.html', {
    comments
  })
})  

app.get('/post', function (req, res) {
  res.render('post.html')
})

app.post('/post', function (req, res) {
  /**
   * 1.获取表单 POST 请求体数据
   * 2.处理
   * 3.发送响应
   * 
   * query 只能获取 get 参数
   * 
   * 获取 POST 请求体的 API body-parser
   */
  let comment = req.body
  comment.dateTime = formatTime(new Date)
  comments.unshift(comment)
  res.redirect('/')
})

// app.get('/submit', function (req, res) {
//   let comment = req.query
//   comment.dateTime = formatTime(new Date)
//   comments.unshift(comment)
//   res.redirect('/')
// })

app.listen(8084, function () {
  console.log('Server is running')
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
