/**
 * 栈元素测试
 */
let { Stack } = require('./stack.js')
let { mulBase } = require('./number-system.js')
let s = new Stack()
s.push('谢宋伟')
s.push('黄城')
s.push('梁宇')
s.push('彭俊')
console.log(`当前长度：${s.length()}`)
console.log(s.peek()) // 验证栈顶查询是否出栈
console.log(s.peek())
let popped =s.pop()
console.log(`出栈元素：${popped}`)
console.log(s.peek())
s.push('陈修彬')
console.log(s.peek())
s.clear()
console.log(`当前长度：${s.length()}`)
s.push('梁宇')
console.log(s.peek())

/**
 * 进制转换
 */
let num = 32
let base = 2
let newNum = mulBase(num, base)
console.log(`十进制数${num}转二进制数结果：${newNum}`)
num = 125
base = 8
newNum = mulBase(num, base)
console.log(`十进制数${num}转八进制数结果：${newNum}`)
