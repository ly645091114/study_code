let { Stack } = require('./stack.js')
/**
 * 使用栈，判断字符串是否是回文的方法
 * @param { String } word 检查文本
 * @return { Boolean } 判断结果
 */
function isPalindrome (word) {
  let s = new Stack()
  for (let i = 0; i < word.length; ++i) {
    s.push(word[i])
  }
  let rword = ''
  while (s.length() > 0) {
    rword += s.pop()
  }
  if (word === rword) {
    return true
  }
  return false
}
exports.isPalindrome = isPalindrome
