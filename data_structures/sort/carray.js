/**
 * 构造一个数组测试类, 辅助完成基本排序算法的研究
 * 包含方法：insert 插入新数据, toString 显示数组, swap 交换数组元素
 * @param { Number } numElements 数据数量
 */
function CArray (numElements) {
  this.dataStore = [];
  this.pos = 0;
  this.numElements = numElements;
  this.insert = insert;
  this.toString = toString;
  this.clear = clear;
  this.setData = setData;
  this.swap = swap;
  for (let i = 0; i < numElements; ++i) {
    this.dataStore[i] = i;
  }
}

/**
 * 生成随机数据
 */
function setData () {
  for (let i = 0; i < this.numElements; ++i) {
    this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
  }
}

/**
 * 清空数据
 */
function clear () {
  for (let i = 0; i < this.numElements; ++i) {
    this.dataStore[i] = 0;
  }
}

/**
 * 插入数据
 * @param { Number } element 插入数据
 */
function insert (element) {
  this.dataStore[this.pos++] = element;
}

/**
 * 展示数组数据
 * @return { String } 展示数据
 */
function toString () {
  let restr = '';
  for (let i = 0; i < this.dataStore.length; ++i) {
    restr += `${this.dataStore[i]} `;
    if (i > 0 && i % 10 === 0) {
      restr += '\n';
    }
  }
  return restr;
}

/**
 * 数据交换
 * @param { Array } 操作数组
 * @param { Number } index1 交换数据1
 * @param { Number } index2 交换数据2
 */
function swap (arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

exports.CArray = CArray;
