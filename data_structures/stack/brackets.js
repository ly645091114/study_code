let { Stack } = require('./stack.js')
/**
 * 使用栈判断一个算术表达式中的括号是否匹配
 * @param { String } str 算术表达式
 * @return { Boolean } 判断结果
 */
function brackets (str) {
  let s = new Stack()
  for (let i = 0; i < str.length; ++i) {
    if (str[i] === '(') {
      s.push(str[i])
    } else if (str[i] === ')') {
      if (s.length() > 0) {
        s.pop()
      } else {
        return false
      }
    }
  }
  if (s.length() > 0) {
    return false
  }
  return true
}

exports.brackets = brackets
