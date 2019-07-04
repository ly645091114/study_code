let express = require('express')
let path = require('path')

let app = express()

app.use('/public/', express.static(path.join(__dirname, 'public')))
app.use('/node_modules/', express.static(path.join(__dirname, 'node_modules')))

app.listen(8081, function () {
  console.log('Server is running ...')
})
