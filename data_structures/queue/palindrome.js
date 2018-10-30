const { Deque } = require('./deque.js')
/**
 * 通过双向队列，判断回文
 * @param { String } str 判断文字
 */
function isPalindrome (str) {
  let q = new Deque()
  for (let i = 0; i < str.length; i++) {
    q.enqueueFront(str[i])
  }
  let newStr = ''
  while(!q.empty()) {
    newStr += q.dequeueFront()
  }
  return str === newStr
}
exports.isPalindrome = isPalindrome
