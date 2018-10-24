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
