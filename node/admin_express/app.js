/**
 * app.js 入口模块
 *  启动服务
 *  服务相关配置
 *    模板引擎
 *    中间件挂载
 *    静态资源服务
 *  挂在路由
 *  监听端口启动服务
 */
let express = require('express')
let router = require('./router')
let bodyParser = require('body-parser')

let app = express()

app.use('/node_modules/', express.static('node_modules'))
app.use('/public/', express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router)

app.engine('html', require('express-art-template'))

app.listen(8085, function () {
  console.log('Server is running ...')
})
