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
myNums.clear(); // 数据初始化
myNums.setData(); // 生成新的随机数
console.log(`插入排序前：${myNums.toString()}`);
myNums.insertionSort();
console.log(`插入排序后：${myNums.toString()}`);
myNums.clear(); // 数据初始化
myNums.setData(); // 生成新的随机数
console.log(`动态间隔序列希尔排序前：${myNums.toString()}`);
myNums.shellSort1();
console.log(`动态间隔序列希尔排序后：${myNums.toString()}`);
myNums.clear(); // 数据初始化
myNums.setData(); // 生成新的随机数
console.log(`归并排序前：${myNums.toString()}`);
myNums.mergeSort();
console.log(`归并排序后：${myNums.toString()}`);
myNums.clear(); // 数据初始化
myNums.setData(); // 生成新的随机数
console.log(`快速排序前：${myNums.toString()}`);
myNums.quickSort();
console.log(`快速排序后：${myNums.toString()}`);
myNums.clear(); // 数据初始化
myNums.setData(); // 生成新的随机数
console.log(`JS内置排序前：${myNums.toString()}`);
myNums.quickSort();
console.log(`JS内置排序后：${myNums.toString()}`);
/**
 * 万级数据排序
 */
console.log('万级数据排序：');
numElements = 10000;
myNums = new CArray(numElements);
myNums.setData();
myNums.bubbleSort();
myNums.clear(); // 数据初始化
myNums.setData(); // 生成新的随机数
myNums.selectionSort();
myNums.clear(); // 数据初始化
myNums.setData(); // 生成新的随机数
myNums.insertionSort();
myNums.clear(); // 数据初始化
myNums.setData(); // 生成新的随机数
myNums.mergeSort();
/**
 * 十万级数据排序
 */
// console.log('十万级数据排序：');
// numElements = 100000;
// myNums = new CArray(numElements);
// myNums.setData();
// myNums.bubbleSort();
// myNums.clear(); // 数据初始化
// myNums.setData(); // 生成新的随机数
// myNums.selectionSort();
// myNums.clear(); // 数据初始化
// myNums.setData(); // 生成新的随机数
// myNums.insertionSort();
/**
 * 百万级数据排序
 */
// console.log('百万级数据排序：');
// numElements = 1000000;
// myNums = new CArray(numElements);
// myNums.setData();
// myNums.bubbleSort();
// myNums.clear(); // 数据初始化
// myNums.setData(); // 生成新的随机数
// myNums.selectionSort();
// myNums.clear(); // 数据初始化
// myNums.setData(); // 生成新的随机数
// myNums.insertionSort();

/**
 * 希尔排序测试
 */
console.log('希尔排序：');
numElements = 10;
myNums = new CArray(numElements);
myNums.setData();
console.log(`排序前：${myNums.toString()}`);
myNums.shellSort();
console.log('万级数据排序：');
numElements = 10000;
myNums = new CArray(numElements);
myNums.setData(); // 生成新的随机数
myNums.insertionSort();
myNums.clear(); // 数据初始化
myNums.setData(); // 生成新的随机数
myNums.shellSort();
myNums.clear(); // 数据初始化
myNums.setData(); // 生成新的随机数
myNums.shellSort1();
/**
 * 百万级数据排序
 */
console.log('百万级数据排序：');
numElements = 1000000;
myNums = new CArray(numElements);
myNums.setData(); // 生成新的随机数
myNums.shellSort1();
myNums.setData(); // 生成新的随机数
myNums.mergeSort();
myNums.setData(); // 生成新的随机数
myNums.quickSort();
myNums.setData(); // 生成新的随机数
myNums.insideSort();
