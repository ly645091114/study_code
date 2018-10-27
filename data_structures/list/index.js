/**
 * 关于列表的一些使用用例
 */
const { List } = require('./list.js')
let names = new List()
names.append('nrf')
names.append('dqf')
names.append('wch')
console.log(names.toString())
names.end()
console.log(names.getElement())
names.prev()
console.log(names.getElement())
names.next()
console.log(names.getElement())
names.font()
console.log(names.getElement())
for (names.font(); names.hasNext(); names.next()) { // 迭代器顺序遍历
  console.log(`name: ${names.getElement()}`)
}
for (names.end(); names.hasPrev(); names.prev()) { // 迭代器倒序遍历
  console.log(`name: ${names.getElement()}`)
}
names.remove('wch')
console.log(names.toString())
