let express = require('express')
let path = require('path')
let bodyParser = require('body-parser')
let session = require('express-session')
let mongoose = require('mongoose')
let cookieParser = require('cookie-parser')
let MongoStore = require('connect-mongo')(session)

let app = express()

try {
  mongoose.connect('mongodb://localhost/forum', { useNewUrlParser: true }) // 连接数据库
    .then(function () {
      console.log('Connect Success')
    })
} catch (error) {
  console.log(`Connect Error: ${error}`)
}

app.use(cookieParser())

/**
 * 挂载 Session 和 Cookie 中间件 express-session
 * 使用：配置中间件后，通过 req.session 来访问 和 设置Session 成员
 * 添加 Session 数据: req.session.foo = 'bar'
 * 访问 Session 数据: req.session.foo
 * 默认 Session 数据是内存存储的，服务器一旦重启就会丢失，真正的生产环境会把 Session 进行持久化存储
 */
app.use(session({
  secret: 'wdnmd', // 匹配加密字符串，在原有加密的基础上拼接加密，目的是为了增加安全性，防止客户端恶意伪造
  name: 'forumapp',
  resave: false,
  saveUninitialized: true, // 无论是否使用 Session，都默认直接分配一把钥匙
  cookie: {
    httpOnly: true,
    maxAge: 1 * 24 * 60 * 60 * 1000 //默认单位 1000 毫秒
  },
  store: new MongoStore({
    url: 'mongodb://localhost/forum'
  })
}))

app.use('/public/', express.static(path.join(__dirname, 'public')))
app.use('/node_modules/', express.static(path.join(__dirname, 'node_modules')))

app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', require(path.join(__dirname, 'routes.js')))
app.use('/user', require(path.join(__dirname, './routes/session.js')))

app.listen(8081, function () {
  console.log('Server is running ...')
})
