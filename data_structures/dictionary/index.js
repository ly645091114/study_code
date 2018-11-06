/**
 * 字典测试
 */
const { Dictionary } = require('./dictionary.js')
const { wrnum } = require('./wrnum.js')
const { wordCount } = require('./wordcount.js')
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

/**
 * 字典录入通讯录
 */
let memberList = wrnum()
console.log('\n当前成员列表')
memberList.showAll()
console.log(`梁宇的电话号码：${memberList.find('梁宇')}`)
memberList.add('梁平', '13687848128')
console.log('\n当前成员列表')
memberList.showAll()
memberList.remove('梁平')
console.log('\n当前成员列表')
memberList.showAll()
memberList.clear()
console.log(`\n当前成员个数：${memberList.count()}`)

/**
 * 文本录入字数统计
 */
let str = 'the brown fox jumped over the blue fox'
wordCount(str)
