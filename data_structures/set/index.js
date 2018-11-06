/**
 * 集合测试
 */
const { Set } = require('./set.js');
let name = new Set();
name.add('谢宋伟');
name.add('黄城');
name.add('梁宇');
let member = '彭俊';
console.log(`${member}${name.add(member) ? '添加成功' : '已存在'}`);
member = '梁宇';
console.log(`${member}${name.add(member) ? '添加成功' : '已存在'}`);
console.log(`成员集合：${name.show()}`);
console.log(`${member}${name.remove(member) ? '删除成功' : '已删除'}`);
console.log(`${member}${name.remove(member) ? '删除成功' : '已删除'}`);
