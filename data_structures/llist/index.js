/**
 * 链表测试
 */
const { LList } = require('./llist.js')
let member = new LList()
member.insert('谢宋伟', 'head')
member.insert('黄城', '谢宋伟')
member.insert('梁宇', '黄城')
console.log('当前成员：')
member.display()
member.remove('黄城')
console.log('当前成员：')
member.display()
