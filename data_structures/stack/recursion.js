const { Stack } = require('./stack.js');
/**
 * 使用栈实现阶乘 （递归）
 * @param { Number } num 阶乘数
 * @return { Number } 阶乘结果
 */
function recursion (num) {
  let s = new Stack();
  while (num > 1) {
    s.push(num--);
  }
  let product = 1;
  while (s.length() > 0) {
    product *= s.pop();
  }
  return product;
}

exports.recursion = recursion;
