/**
 * 数据排序测试
 */
const { CArray } = require('./carray.js')
let numElements = 100;
let myNums = new CArray(numElements);
myNums.setData();
console.log(myNums.toString());
