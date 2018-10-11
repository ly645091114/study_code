const fs = require('fs')
// let data = fs.readFileSync('input.txt')
// console.log(typeof data)
// console.log(data.toString())
let data = fs.readFile('input.txt', (err, data) => {
  if (err) {
    return console.error(err)
  }
  console.log(typeof data)
  console.log(data.toString())
})
console.log('11111')