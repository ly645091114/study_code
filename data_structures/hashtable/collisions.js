/**
 * 碰撞处理
 * 两种碰撞解决方法：开链法 和 线性探测法
 * 开链法：实现散列表的底层数组中，每一个数组又是一个新的数据结构，比如另一个数组
 * 构建 开链法 散列
 * @param { Object } hashtable 散列
 */
function LHashTable (hashtable) {
  hashtable.buildChains = buildChains;
  hashtable.showDistro = showDistro;
  hashtable.put = put;
  hashtable.get = get;
}

/**
 * 创建存储散列过的键值数组时，通过调用一个函数创建一个新的空数组
 */
function buildChains () {
  for (let i = 0; i < this.table.length; ++i) {
    this.table[i] = new Array();
  }
}

/**
 * 重新封装输出方法
 * 此处书本可能是本人理解有误, 也有可能作者有误, 已根据个人理解做出改动修改
 */
function showDistro () {
  for (let i = 0; i < this.table.length; ++i) {
    if (this.table[i][0] != undefined) {
      let index = 0;
      while (this.table[i][index] !== undefined) {
        console.log(`${i} -> ${this.table[i][index + 1]}`);
        index += 2;
      }
    }
  }
}

/**
 * 重新封装存储方法, 将键值散列，散列后的值对应数组中的一个位置
 * 先尝试将数据放到该位置上的数组中的第一个单元格
 * 如果该单元格已经里已经有数据，存储方法会搜索下一个位置，直到找到能放置数据的单元格
 * 此处书本可能是本人理解有误, 也有可能作者有误, 已根据个人理解做出改动修改
 * @param { Any } key 键
 * @param { Any } data 存入数据
 */
function put (key, data) {
  let pos = this.simpleHash(key); // 为验证碰撞方法，此处用了容易产生碰撞的散列函数
  let index = 0;
  while (this.table[pos][index] != undefined) {
    ++index;
  }
  this.table[pos][index] = key;
  this.table[pos][index + 1] = data;
}

/**
 * 重新封装查询方法
 * 此处书本可能是本人理解有误, 也有可能作者有误, 已根据个人理解做出改动修改
 * @param { Any } key 键
 * @return { Any } 查询结果
 */
function get (key) {
  let index = 0;
  let pos = this.simpleHash(key); // 为验证碰撞方法，此处用了容易产生碰撞的散列函数
  while (this.table[pos][index] !== key && this.table[pos][index] !== undefined) { // 原文有误 为了不进入死循环, 应该判断元素块是不是未赋值
    index += 2;
  }
  return this.table[pos][index + 1];
}

/**
 * 线性探测法, 一种更一般化的散列技术（开发寻址散列）
 * 发生碰撞时线性探测法检查散列表中的下一个位置是否为空
 * 如果为空, 就将数据存入该位置; 如果不为空, 则继续检查下一个位置, 直到找到一个空位置为止
 * 适用于存储使用的数组特别大的场景
 * 如何选择碰撞解决：
 * 开链法：数组的大小 / 待存数据个数 <= 1.5
 * 线性探测法：数组的大小 / 待存数据个数 > 2
 * 构建 线性探测法 散列
 * @param { Object } hashtable 散列
 */
function LineHashTable (hashtable) {
  hashtable.values = [];
  hashtable.put = linePut;
  hashtable.get = lineGet;
  hashtable.showDistro = lineShowDistro;
}

/**
 * 重新封装存储方法
 * @param { Any } key 键
 * @param { Any } data 存入数据
 */
function linePut (key, data) {
  let pos = this.simpleHash(key); // 为验证碰撞方法，此处用了容易产生碰撞的散列函数
  while (this.table[pos] != undefined) {
    pos++;
  }
  this.table[pos] = key;
  this.values[pos] = data;
}

/**
 * 重新封装查询方法
 * @param { Any } key 键
 * @return { Any } 查询结果
 */
function lineGet (key) {
  let pos = this.simpleHash(key); // 为验证碰撞方法，此处用了容易产生碰撞的散列函数
  while (this.table[pos] != undefined && this.table[pos] !== key) {
    pos++;
  }
  if (this.table[pos] != undefined) {
    return this.values[pos];
  }
  return undefined;
}

/**
 * 重新封装输出方法
 */
function lineShowDistro () {
  for (let i = 0; i < this.table.length; ++i) {
    if (this.table[i] != undefined) {
      console.log(`${this.table[i]} -> ${this.values[i]}`);
    }
  }
}

exports = module.exports = {
  LHashTable,
  LineHashTable
}
