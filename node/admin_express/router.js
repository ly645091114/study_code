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
  Users.find(function (error, data) {
    if (error) {
      return res.status(500).send('Server Error')
    }
    res.render('index.html', {
      users: data
    })
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
  Users.add(req.body, function (error) {
    if (error) {
      return res.status(400).send('新增用户失败')
    }
    res.redirect('/users')
  })
})

router.get('/users/edit', function (req, res) {
  Users.findById(Number(req.query.id), function (error, user) {
    if (error) {
      return res.status(500).send('Server error')
    }
    res.render('edit.html', {
      user
    })
  })
})

router.post('/users/edit', function (req, res) {
  Users.update(req.body, function (error) {
    if (error) {
      return res.status(500).send('Server error')
    }
    res.redirect('/users')
  })
})

router.get('/users/delete', function (req, res) {
  Users.del(req.query.id, function (error) {
    if (error) {
      return res.status(500).send('Server error')
    }
    res.redirect('/users')
  })
})

module.exports = router
