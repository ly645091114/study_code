/**
 * 散列，常用数据存储技术，可以快速插入或取用。
 * 散列使用的数据结构叫 散列表
 * 基于数组设计，预先预定数组长度，如有需要可随时增加
 * 数组大小常见限制：数组长度应该是一个质数
 * 需要避免碰撞（即两个键映射成同一个值）
 * 缺点：查询操作效率低下
 * 散列构造函数定义
 * @param { Number } len 数组长度
 */
function HashTable (len) {
  this.table = new Array(len);
  this.simpleHash = simpleHash;
  this.showDistro = showDistro;
  this.put = put;
  this.betterHash = betterHash;
}

/**
 * 散列函数
 * 最简单的散列函数 数组长度对键取余
 * 针对字符串类型的散列函数：字符ASCII码之和 除以数组长度取余
 * @param { Any } data 存入数据
 * @return { Number } 存入键
 */
function simpleHash (data) {
  let total = 0;
  for (let i = 0; i < data.length; ++i) {
    total += data.charCodeAt(i);
  }
  return total % this.table.length;
}

/**
 * 散列存入方法
 * @param { Any } data 存入数据
 */
function put (data) {
  let pos = this.simpleHash(data);
  this.table[pos] = data;
}

/**
 * 展示散列表
 */
function showDistro () {
  for (let i = 0; i < this.table.length; ++i) {
    if (this.table[i]) {
      console.log(`${i} -> ${this.table[i]}`);
    }
  }
}
/**
 * 避免碰撞的方法
 * 1. 保证数组长度是质数, 和键取余有关
 * 2. 霍纳算法 求和前每各字符 ASCII 码乘以一个质数。建议使用一个较小的质数
 * 构造一个更好的散列函数
 * @param { Any } data 存入数据
 * @param { Number } data 求和质数
 * @return { Number } 存入键
 */
function betterHash (data, num) {
  let total = 0;
  for (let i = 0; i < data.length; ++i) {
    total += num * total + data.charCodeAt(i);
  }
  total = total % this.table.length;
  if (total < 0) {
    total += this.table.length - 1;
  }
  return parseInt(total);
}
exports.HashTable = HashTable;
