/**
 * 字典测试
 */
const { Dictionary } = require('./dictionary.js')
let pbook = new Dictionary()
pbook.add('xsw', '121345')
pbook.add('hc', '1245')
pbook.add('ly', '1345')
pbook.sortShow()
console.log(`ly：${pbook.find('ly')}`)
pbook.remove('ly')
console.log(`\n当前：`)
pbook.showAll()
console.log(`当前长度是：${pbook.count()}`)
pbook.clear()
console.log(`当前长度是：${pbook.count()}`)
