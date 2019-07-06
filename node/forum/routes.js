let express = require('express')
let router = express.Router()

router.get('/', function (req, res) {
  let user = req.session.user || req.cookies.user
  res.render('index.html', {
    name: '我',
    user
  })
})

module.exports = router
