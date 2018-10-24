let { List } = require('./list.js')
let fs = require('fs')
/**
 * 从本地文件中获取，文件列表，通过换行符将其切分成数组
 * 再通过 trim() 去除首尾空格
 * @param { String } file 文件路径
 */
function createFileList(file) {
  let movies = fs.readFileSync(file, 'utf-8')
  movies = movies.split('\n')
  movies.forEach((item) => {
    item = item.trim()
  })
  return movies
}
let movies = createFileList('films.txt')
let movieList = new List()
movies.forEach((item) => {
  movieList.append(item)
})
console.log(movieList.dataStore)
// let names = new List()
// names.append('nrf')
// names.append('dqf')
// names.append('wch')
// console.log(names.toString())
// names.end()
// console.log(names.getElement())
// names.prev()
// console.log(names.getElement())
// names.next()
// console.log(names.getElement())
// names.font()
// console.log(names.getElement())
// for (names.font(); names.hasNext(); names.next()) { // 迭代器顺序遍历
//   console.log(`name: ${names.getElement()}`)
// }
// for (names.end(); names.hasPrev(); names.prev()) { // 迭代器倒序遍历
//   console.log(`name: ${names.getElement()}`)
// }
// names.remove('wch')
// console.log(names.toString())
