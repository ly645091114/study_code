/**
 * router.js 路由模块
 *  处理路由
 *  node 奥义：封装异步 API
 */
let express = require('express')
let router = express.Router() // 创建一个路由容器
let Users = require('./users')

router.get('/', function (req, res) {
  res.redirect('/users')
})

router.get('/users', function (req, res) {
  Users.find()
    .then(function (data) {
      res.render('index.html', {
        users: data
      })
    }, function (error) {
      console.log('访问失败', error)
    })
})

router.get('/users/new', function (req, res) {
  res.render('new.html')
})

router.post('/users/new', function (req, res) {
  /**
   * 获取表单数据
   * 处理
   * 响应
   * 
   * 往文件写数据
   * 先读取文件，转成对象
   * 往对象中添加数据
   * 把对象转为字符串
   * 字符串再次写入文件
   */
  Users(req.body).save()
    .then(function () {
      res.redirect('/users')
    }, function (error) {
      if (error) {
        console.log('新增用户失败', error)
        res.status(400).send('新增用户失败')
      }
    })
})

router.get('/users/edit', function (req, res) {
  Users.findById(req.query.id)
    .then(function (user) {
      res.render('edit.html', {
        user
      })
    }, function (error) {
      if (error) {
        console.log(error)
        res.status(500).send('Server error')
      }
    })
})

router.post('/users/edit', function (req, res) {
  Users.updateOne({
      _id: req.body.id
    },
    req.body)
    .then(function () {
      res.redirect('/users')
    },  function (error) {
      if (error) {
        console.log('更新失败', error)
        res.status(500).send('更新失败')
      }
    })
})

router.get('/users/delete', function (req, res) {
  Users.deleteOne({
      _id: req.query.id
    })
    .then(function () {
      res.redirect('/users')
    }, function (error) {
      if (error) {
        console.log('删除失败', error)
        res.status(500).send('删除失败')
      }
    })
})

module.exports = router
