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
myNums.clear(); // 数据初始化
myNums.setData(); // 生成新的随机数
console.log(`内含数据：${myNums.toString()}`);
console.log(`7${myNums.seqSearch(7) > 0 ? '存在' : '不存在'}于数组中。`);
myNums.clear(); // 数据初始化
myNums.setData(); // 生成新的随机数
myNums.quickSort();
console.log(`内含数据：${myNums.toString()}`);
console.log(`7${myNums.binSearch(7) > 0 ? '存在' : '不存在'}于数组中。`);
myNums.dataStore = [0, 2, 3, 4, 7, 7, 7, 7, 8, 9];
console.log(`内含数据：${myNums.toString()}`);
console.log(`7在数组中的个数为${myNums.count(7)}个`);
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
let index = myNums.seqSearch(23);
console.log(`23${index > 0 ? '存在' : '不存在'}于数组中${index > 0 ? `，位置在第${index + 1}位` : ''}`);
index = myNums.seqSearch(23);
console.log(`23${index > 0 ? '存在' : '不存在'}于数组中${index > 0 ? `，位置在第${index + 1}位` : ''}`);
console.log(`最小值为：${myNums.findMin()}`);
myNums.setData(); // 生成新的随机数
myNums.quickSort();
index = myNums.binSearch(888);
console.log(`888${index > 0 ? '存在' : '不存在'}于数组中${index > 0 ? `，位置在第${index + 1}位` : ''}`);
console.log(`888在数组中的个数为${myNums.count(888)}个`);
// myNums.setData(); // 生成新的随机数
// myNums.shellSort1();
// myNums.setData(); // 生成新的随机数
// myNums.mergeSort();
// myNums.setData(); // 生成新的随机数
// myNums.quickSort();
// myNums.setData(); // 生成新的随机数
// myNums.insideSort();

/**
 * 总结：在这个超高速处理器的时代，除非面向大数据集，否则要测量顺序查找和二分查找耗时上的区别变得越来越困难。然而，处理大数据集时二分查找要比顺序查找速度快，这一观点在数学理论上已经得到了证明。这是由于在决定算法性能的每一步循环嵌套中，二分查找减少了一半的查找量（数组中的元素）。
 */

 /**
  * 高级算法测试
  */
const { doRecurFib, doDynFib } = require('./algorithm');
console.log(doRecurFib(30));
console.log(doDynFib(1000));
