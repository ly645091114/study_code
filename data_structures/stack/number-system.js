let { Stack } = require('./stack.js')
/**
 * 该方法，通过栈的形式，实现了十进制数制的转换，但仅限于基数为 2 ~ 9的数制
 * @param { Number } num 十进制数
 * @param { Number } base 基数
 * @return { String } 数制转换结果
 */
function mulBase (num, base) {
  let s = new Stack()
  do {
    s.push(num % base)
    num = Math.floor(num /= base)
  } while (num > 0)
  let converted = ''
  while (s.length() > 0) {
    converted += s.pop()
  }
  return converted
}
exports.mulBase = mulBase
