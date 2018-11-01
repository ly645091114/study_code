/**
 * 链表测试
 */
const { LList } = require('./llist.js')
const { DlList } = require('./dllist.js')
const { RlList } = require('./rllist.js')
const { josephus } = require('./josephus.js')
console.log('单向链表：')
let member = new LList()
member.insert('谢宋伟', 'head')
member.insert('黄城', '谢宋伟')
member.insert('梁宇', '黄城')
console.log('\n当前成员：')
member.display()
member.remove('黄城')
console.log('\n当前成员：')
member.display()
/**
 * 双向链表
 */
console.log('\n双向链表：')
member = new DlList()
member.insert('谢宋伟', 'head')
member.insert('黄城', '谢宋伟')
member.insert('梁宇', '黄城')
console.log('\n当前成员：')
member.display()
member.advance(2)
console.log('\n当前节点：')
member.show()
member.back(1)
console.log('\n当前节点：')
member.show()
console.log('\n当前成员：')
member.display()
member.remove('黄城')
console.log('\n当前成员：')
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
console.log('\n当前成员：')
member.display()
member.remove('黄城')
console.log('\n当前成员：')
member.display()
/**
 * 约瑟夫环
 */
let len = 11
let i = 1
let num = 3
let persons = new RlList()
while (i <= len) {
  if (i === 1) {
    persons.insert(i, 'head')
  } else {
    persons.insert(i, i - 1)
  }
  i++
}
console.log('\n链表元素：')
persons.display()
josephus(persons, num)
