/** 
 * 通过字典实现存储一段文本中各个单词出现的次数，每个单词只出现一次
 * @param { String } str 存储文本
 */
const { Dictionary } = require('./dictionary.js')
function wordCount (str) {
  let textList = new Dictionary()
  str = str.split(' ')
  textList.add = add
  str.forEach((item) => {
    textList.add(item)
  })
  console.log('\n单词对应个数：')
  textList.showAll()
  console.log('\n排序展示单词对应个数：')
  textList.sortShow()
} 
/**
 * 重新封装字典的添加事件
 * @param { Number, String } key 键
 */
function add (key) {
  if (this.dataStore[key]) {
    this.dataStore[key]++
  } else {
    this.dataStore[key] = 1
  }
}
exports.wordCount = wordCount
