/**
 * 数据排序测试
 */
const { CArray } = require('./carray.js')
let numElements = 10;
let myNums = new CArray(numElements);
myNums.setData();
console.log(`冒泡排序前：${myNums.toString()}`);
myNums.bubbleSort();
console.log(`冒泡排序后：${myNums.toString()}`);
myNums.clear(); // 数据初始化
myNums.setData(); // 生成新的随机数
console.log(`选择排序前：${myNums.toString()}`);
myNums.selectionSort();
console.log(`选择排序后：${myNums.toString()}`);
