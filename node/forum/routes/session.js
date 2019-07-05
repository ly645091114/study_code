let express = require('express')
let path = require('path')
let router = express.Router()
let User = require(path.join(__dirname, '../models/user'))
let md5 = require('blueimp-md5')

router.get('/login', function (req, res) {
  res.render('login.html')
})

router.post('/login', async function (req, res) {
  /**
   * 1.获取表单数据
   * 2.查询数据库用户名密码是否正确
   * 3.发送响应数据
   */
  let body = req.body
  try {
    User.findOne({ // 查询用户信息
        email: body.email,
        password: md5(body.password)
      })
      .then(function (user) {
        if (user) {
          req.session.user = user // 登录成功，使用 Session 记录用户登录状态
          return res.status(200).json({
            success: true,
            code: 200,
            message: '登陆成功!'
          })
        }
        return res.status(200).json({
          success: true,
          code: 1,
          message: '请填写正确的登录信息!'
        })
      })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      code: 500,
      message: '服务器异常'
    })
  }
})

router.get('/register', function (req, res) {
  res.render('register.html')
})

router.post('/register', async function (req, res) {
  /**
   * 1.获取表单提交的数据
   *   req.body
   * 2.操作数据库
   *   判断该用户是否存在
   *   存在，不允许注册
   *   不存在，注册新建用户
   * 3.发送响应
   */
  let body = req.body
  try {
    if (await User.findOne({ email: body.email })) { // 判断邮箱是否重复
      return res.status(200).json({
        success: true,
        code: 1,
        message: '邮箱已存在'
      })
    }
    if (await User.findOne({ nickname: body.nickname })) { // 判断昵称是否重复
      return res.status(200).json({
        success: true,
        code: 2,
        message: '昵称已存在'
      })
    }
    body.password = md5(body.password) // 对密码进行 md5 重复加密

    await new User(body) // 保存实例
      .save()
      .then(function (user) {
        req.session.user = user // 注册成功，使用 Session 记录用户登录状态
      })

    res.status(200).json({
      success: true,
      code: 200,
      message: 'ok'
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      code: 500,
      message: '服务器异常'
    })
  }
})

router.get('/logout', function (req, res) {
  req.session.user = null
  res.redirect('/user/login')
})

module.exports = router
