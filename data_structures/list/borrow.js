let { List } = require('./list.js')
let { Customer } = require('./customer.js')
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
/**
 * 展示影碟清单
 */
function displayList (list) {
  for (list.font(); list.currPos() < list.length(); list.next()) {
    if (list.getElement() instanceof Customer) {
      console.log(`${list.getElement()['name']}, ${list.getElement()['movie']}`)
    } else {
      console.log(list.getElement())
    }
  }
}

/**
 * 检出电影
 * @param { Object } data 检出信息
 */
function checkOut(data) {
  if (data.movieList.contains(data.movie)) {
    let cusInfo = new Customer(data.name, data.movie)
    data.customers.append(cusInfo)
    movieList.remove(data.movie)
  } else {
    console.log(`找不到${data.movie},请联系服务员！`)
  }
}
let movies = createFileList('films.txt')
let movieList = new List() // 创建一个影碟列表对象
let customers = new List() // 创建一个用户列表对象
movies.forEach((item) => {
  movieList.append(item)
})
console.log('影碟菜单：')
displayList(movieList)
checkOut({
  name: '梁宇',
  movie: '《指环王：王者归来》',
  movieList: movieList,
  customers: customers
})
console.log('借出影碟：')
displayList(customers)
console.log('影碟菜单：')
displayList(movieList)
