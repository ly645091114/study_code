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
  this.bubbleSort = bubbleSort;
  this.selectionSort = selectionSort;
  this.insertionSort = insertionSort;
  this.shellSort = shellSort;
  this.shellSort1 = shellSort1;
  this.gaps = [5, 3, 1];
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

/**
 * 三个基本排序算法：冒泡排序（循环次数最多，最慢），选择排序，插入排序（最快）
 * 冒泡排序
 * 最慢且最容易实现，循环次数多
 */
function bubbleSort () {
  let numElements = this.dataStore.length;
  let start = new Date().getTime();
  for (let outer = numElements; outer >= 2; --outer) {
    for (let inner = 0; inner <= outer - 1; ++inner) {
      if (this.dataStore[inner] > this.dataStore[inner + 1]) {
        swap(this.dataStore, inner, inner + 1);
      }
    }
  }
  let end = new Date().getTime();
  console.log(`冒泡排序耗时：${end - start}ms`);
}

/**
 * 选择排序
 * 每次都在当前数据中寻找最小的的数据进行位置互换
 */
function selectionSort () {
  let min;
  let start = new Date().getTime();
  for (let outer = 0; outer < this.dataStore.length - 1; ++outer) {
    min = outer;
    for (let inner = outer + 1; inner < this.dataStore.length; ++inner) {
      if (this.dataStore[min] > this.dataStore[inner]) {
        min = inner;
      }
    }
    swap(this.dataStore, outer, min);
  }
  let end = new Date().getTime();
  console.log(`选择排序耗时：${end - start}ms`);
}

/**
 * 插入排序
 * 类似于人类按数字或者字母顺序对数据进行排序
 * 最快的基本排序
 */
function insertionSort () {
  let temp;
  let inner;
  let start = new Date().getTime();
  for (let outer = 1; outer <= this.dataStore.length - 1; ++outer) {
    temp = this.dataStore[outer];
    inner = outer;
    while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
      this.dataStore[inner] = this.dataStore[inner - 1];
      --inner;
    }
    this.dataStore[inner] = temp;
  }
  let end = new Date().getTime();
  console.log(`插入排序耗时：${end - start}ms`);
}

/**
 * 高级排序算法：希尔排序，快速排序，归并排序，堆排序
 * 希尔排序
 * 首先比较距离较远的元素，使用这种方案可以使离正确位置很远的元素更快地回到合适的位置。当开始用这个算法遍历数据集时，所有元素之间的距离会不断缩小。
 * 工作原理：通过定义一个间隔序列来表示在排序过程中进行比较的元素之间有多远的间隔。我们可以动态定义间隔序列，不过对于大部分的实际应用场景，算法要用到
 * 的间隔序列可以提前定义好 Best Increments for the Average Case of Shell Sort（希尔排序平均情况的最佳增量）：701，301，132，57，23，10，4，1
 */
function shellSort () {
  let start = new Date().getTime();
  for (let g = 0; g < this.gaps.length; ++g) { // 执行次数为间隔序列次数
    for (let i = this.gaps[g]; i < this.dataStore.length; ++i) { // 从间隔序列的最小间隔开始执行
      let temp = this.dataStore[i];
      let j;
      for (j = i; j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp; j -= this.gaps[g]) {
        this.dataStore[j] = this.dataStore[j - this.gaps[g]];
      }
      this.dataStore[j] = temp;
    }
    // console.log(`${this.gaps[g]}：${this.toString()}`);
  }
  let end = new Date().getTime();
  console.log(`希尔排序耗时：${end - start}ms`);
}

/**
 * 通过动态间隔序列实现希尔排序
 */
function shellSort1 () {
  let N = this.dataStore.length;
  let h = 1;
  let start = new Date().getTime();
  while (h < N / 3) {
    h = 3 * h + 1;
  }
  while (h >= 1) {
    for (let i = h; i < N; i++) {
      for (let j = i; j >= h && this.dataStore[j] < this.dataStore[j - h]; j -= h) {
        swap(this.dataStore, j, j - h);
      }
    }
    h = (h - 1) / 3;
  }
  let end = new Date().getTime();
  console.log(`动态间隔序列希尔排序耗时：${end - start}ms`);
}

exports.CArray = CArray;
