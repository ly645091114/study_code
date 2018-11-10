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

/**
 * 求两个集合的并集
 */
let cis = new Set();
cis.add('谢宋伟');
cis.add('黄城');
cis.add('梁宇');
let dmp = new Set();
dmp.add('龚洲洲');
dmp.add('张磊');
dmp.add('梁宇');
let it = cis.union(dmp);
console.log(`cis 和 dmp 的并集是：${it.show()}`);

/**
 * 求两个集合的交集
 */
it = cis.intersect(dmp);
console.log(`cis 和 dmp 的交集是：${it.show()}`);

/**
 * 求集合是不是另一集合的子集
 */
let child = new Set();
child.add('黄城');
child.add('梁宇');
console.log(`child ${child.subset(cis) ? '是' : '不是'} cis 的子集`);
console.log(`dmp ${dmp.subset(cis) ? '是' : '不是'} cis 的子集`);

/**
 * 求两个集合的补集
 */
it = cis.difference(dmp);
console.log(`cis 相对于 dmp 的补集是：${it.show()}`);
