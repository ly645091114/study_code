/**
 * 散列测试
 */
const { HashTable } = require('./hashtable.js');
const { getStuData } = require('./studata.js');
const { NewHashTable } = require('./newhashtable.js');
const { createFileList } = require('../utils/index.js');
const { LHashTable, LineHashTable } = require('./collisions.js');
let someName = ['David', 'Jennifer', 'Donnie', 'Raymond', 'Cynthia', 'Mike', 'Clayton', 'Danny', 'Jonathan'];
let hTable = new HashTable(137);
someName.forEach((item) => { // 注意这个地方 'Clayton' 和 'Raymond' 散列值一样的，所以 'Raymond' 被覆盖了, 这就是所谓的碰撞, 通过改善散列函数来避免
  hTable.put(item);
})
hTable.showDistro();
let bTable = new HashTable(137);
bTable.put = put;
console.log('\n更好的散列函数实现');

/**
 * 采用更好散列函数的 散列
 */
function put (data) {
  let pos = this.betterHash(data, 37);
  this.table[pos] = data;
}
someName.forEach((item) => { // 注意这个地方 'Clayton' 和 'Raymond' 散列值一样的，所以 'Raymond' 被覆盖了, 这就是所谓的碰撞, 通过改善散列函数来避免
  bTable.put(item);
})
bTable.showDistro();

/**
 * 散列运用学生成绩录入
 */
let numStudents = 10;
let students = new Array(numStudents);
getStuData(students);
console.log('\n学生成绩：');
students.forEach((item) => {
  console.log(`${item.substring(0, 9)}: ${item.substring(10)}`);
})
console.log('\n散列保存：');
let sTable = new HashTable(137);
students.forEach((item) => { // 同样存在碰撞的情况
  sTable.put(item);
})
sTable.showDistro();

/**
 * 采用更好散列函数的 散列
 */
console.log('\n更好的散列保存：');
let bSTable = new HashTable(137);
bSTable.put = put;
students.forEach((item) => { // 同样存在碰撞的情况
  bSTable.put(item);
})
bSTable.showDistro();

/**
 * 散列表测试
 */
let num = createFileList('../dictionary/number.txt');
let members = new HashTable(137);
NewHashTable(members);
num.forEach((item) => {
  let member = item.split(' ');
  members.put(member[0], member[1]);
})
console.log(`梁宇电话号码：${members.get('梁宇')}`);

/**
 * 开链法应用
 */
let lhashtable = new HashTable(137);
LHashTable(lhashtable);
lhashtable.buildChains();
someName.forEach((item) => {
  lhashtable.put(item, item);
})
console.log('\n开链法：');
lhashtable.showDistro();
console.log(lhashtable.get('Raymond'));

/**
 * 线性探测法应用
 */
let linehashtable = new HashTable(137);
LineHashTable(linehashtable);
someName.forEach((item) => {
  linehashtable.put(item, item);
})
console.log('\n线性探测法：');
linehashtable.showDistro();
console.log(linehashtable.get('Raymond'));
