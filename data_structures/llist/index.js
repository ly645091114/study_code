/**
 * 链表测试
 */
const { LList } = require('./llist.js')
const { DlList } = require('./dllist.js')
const { RlList } = require('./rllist.js')
console.log('单向链表：')
let member = new LList()
member.insert('谢宋伟', 'head')
member.insert('黄城', '谢宋伟')
member.insert('梁宇', '黄城')
console.log('当前成员：')
member.display()
member.remove('黄城')
console.log('当前成员：')
member.display()
/**
 * 双向链表
 */
console.log('\n双向链表：')
member = new DlList()
member.insert('谢宋伟', 'head')
member.insert('黄城', '谢宋伟')
member.insert('梁宇', '黄城')
console.log('当前成员：')
member.display()
member.remove('黄城')
console.log('当前成员：')
member.display()
member.dispReverse()
/**
 * 循环链表
 */
console.log('\n循环链表：')
member = new RlList()
member.insert('谢宋伟', 'head')
member.insert('黄城', '谢宋伟')
member.insert('梁宇', '黄城')
console.log('当前成员：')
member.display()
member.remove('黄城')
console.log('当前成员：')
member.display()
