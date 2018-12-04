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
  this.mergeSort = mergeSort;
  this.mergeArrays = mergeArrays;
  this.qSort = qSort;
  this.quickSort = quickSort;
  this.insideSort = insideSort;
  this.gaps = [5, 3, 1];
  this.seqSearch = seqSearch;
  this.findMin = findMin;
  this.binSearch = binSearch;
  this.count = count;
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

/**
 * 归并排序
 * 把一系列排序好的的子序列合并成一个大的完整有序序列，理论上来讲这个算法很容易实现。
 * 需要两个排好序的子数组，然后通过比较数据大小，先从小的数据开始插入，最后合并得到第三个数组。
 * 弊端：对一个大数据集进行排序时，我们需要相当大的空间来合并存储两个子数组。耗费内存大。
 * 归并排序类型：自顶向下，自底向上
 * 自顶向下（通常实现方式），JavaScript 不太可行，递归深度太深
 * 自底向上（非递归，迭代版本），将数据集分解为一组只有一个元素的数组。然后创建子数组将他们慢慢合起来，每次合并都保存一部分排序好的数据，直到最后剩下的这个数组所有的数据都已排序完毕
 */
function mergeSort () {
  let start = new Date().getTime();
  if (this.dataStore.length < 2) { // 只有一位数据不需要排序
    return true;
  }
  let step = 1;
  let left;
  let right;
  while(step < this.dataStore.length) {
    left = 0;
    right = step;
    while (right + step <= this.dataStore.length) {
      mergeArrays(this.dataStore, left, left + step, right, right + step);
      left = right + step;
      right = left + step;
    }
    if (right < this.dataStore) {
      mergeArrays(this.dataStore, left, left + step, right, this.dataStore.length);
    }
    step *= 2;
  }
  let end = new Date().getTime();
  console.log(`归并排序耗时：${end - start}ms`);
}

/**
 * 合并子数列的方法
 * @param { Array } arr 操作数组
 * @param { Number } startLeft 左子列开始
 * @param { Number } stopLeft 左子列结束
 * @param { Number } startRight 右子列开始
 * @param { Number } stopRight 右子列结束
 */
function mergeArrays (arr, startLeft, stopLeft, startRight, stopRight) {
  let rightArr = new Array(stopRight - startRight + 1);
  let leftArr = new Array(stopLeft - startLeft + 1);
  let k = startRight;
  for (let i = 0; i < (rightArr.length - 1); ++i) { // 右数组填入数据
    rightArr[i] = arr[k];
    ++k;
  }
  k = startLeft;
  for (let i = 0; i < (leftArr.length - 1); ++i) { // 左数组填入数据
    leftArr[i] = arr[k];
    ++k;
  }
  rightArr[rightArr.length - 1] = Infinity; // 哨兵值
  leftArr[leftArr.length - 1] = Infinity; // 哨兵值
  let m = 0;
  let n = 0;
  for (let i = startLeft; i < stopRight; ++i) {
    if (leftArr[m] <= rightArr[n]) {
      arr[i] = leftArr[m];
      m++;
    } else {
      arr[i] = rightArr[n];
      n++;
    }
  }
}

/**
 * 快速排序
 * 是处理大数据集最快的排序算法之一。它是一种分而治之的算法，通过递归的方法将数据依次分解为包含较小元素和较大元素的不同子序列。
 * 该算法不断重复这个步骤直到所有数据都是有序的
 * 这个算法实现要在列表中选择一个元素作为基准值。数据排序围绕基准值进行，将列表中小于基准值的元素移到数组的底部，将大于基准值的元素移到数组的顶部。
 * 1.选择一个基准元素，将列表分隔成两个子序列；
 * 2.对列表重新排序，将所有小于基准值的元素放在基准值的前面，所有大于基准值的元素放在基准值的后面；
 * 3.分别对较小元素的子序列和较大元素的子序列重复步骤 1 和 2。
 */
function qSort (list) {
  if (list.length === 0) { // 首先检查数组的长度是否为0。如果是，那么这个数组就不需要任何排序，函数直接返回。
    return [];
  }
  let lesser = []; // 否则创建两个数组，一个用来存放比基准值小的元素，另一个用来存放比基准值大的元素。这里的基准值取自数组的第一个元素。
  let greater = [];
  let pivot = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] < pivot) {
      lesser.push(list[i]);
    } else {
      greater.push(list[i]);
    }
  }
  return qSort(lesser).concat(pivot, qSort(greater)); // 递归执行
}

/**
 * 快排方法
 */
function quickSort () {
  let start = new Date().getTime();
  this.dataStore = qSort(this.dataStore);
  let end = new Date().getTime();
  console.log(`快速排序耗时：${end - start}ms`);
}

/**
 * JS 内置排序算法
 * v8源码用的是cpp编译，里面有很多层优化速度相对比以上算法快
 */
function insideSort () {
  let start = new Date().getTime();
  this.dataStore.sort();
  let end = new Date().getTime();
  console.log(`JS内置排序耗时：${end - start}ms`);
}

/**
 * 检索算法
 * 两种查找方式：
 * 1.顺序查找 （适用于元素随机排列的列表）
 * 2.二分查找 （适用于元素已排序的列表）二分查找效率更高，但必须在进行查找之前花费额外的时间将列表中的元素排序
 * 顺序查找：从列表第一个元素开始对列表逐个进行判断，直到找到了想要的结果，或者直到列表结尾也没有找到。（有时称线性查找，属于暴力查找技巧的一种）
 * 在执行过程中可能会访问到数据结构里的所有元素。
 * @param { Number } data 查找元素
 */
function seqSearch (data) {
  let start = new Date().getTime();
  for (let i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] === data) {
      let end = new Date().getTime();
      if (i > 0) { // 使用自组织数据（通过频繁查找到的元素置于数据集的起始位置来最小化查找次数）
        // 比如：一个图书管理员，一天之内会被问到好几次同一本参考书，那么他会把书放在触手可及的地方，经过多次查找后，最频繁的元素会从原来位置移动到数据集的起始位置。数据的位置并非由程序员在程序执行前就组织好，而是在程序运行过程中由程序自动组织。（参考"80 - 20原则"的概率分布（帕累托分布））
        swap(this.dataStore, i, i - 1);
      }
      console.log(`查询耗时：${end - start}ms`);
      return i;
    }
  }
  let end = new Date().getTime();
  console.log(`查询耗时：${end - start}ms`);
  return -1;
}

/**
 * 查找最小值 (查找最大值的思路与查找最小值一样)
 * 1.将数组的第一个元素赋值给一个变量，把这个变量作为最小值；
 * 2.开始遍历数组，从第二个元素开始依次同当前最小值进行比较；
 * 3.如果当前元素数值小于当前最小值，则将当前元素设为新的最小值；
 * 4.移动到下一个元素，并且重复步骤3；
 * 5.当程序结束时，这个变量中存储的就是最小值。
 */
function findMin () {
  let start = new Date().getTime();
  let min = this.dataStore[0];
  let index = 0;
  for (let i = 1; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] < min) {
      min = this.dataStore[i];
      index = i;
    }
  }
  let end = new Date().getTime();
  console.log(`查询最小值耗时：${end - start}ms, 最小值在第${index + 1}位`);
  return min;
}

/**
 * 二分查找算法
 * 用于查找有序数据，二分查找算法比顺序查找算法更高效。
 * 原理：想象在玩猜数字游戏，这个数字位于1 ~ 100之间，而要猜的数字是由你的朋友来选定的。游戏规则是，你每猜一个数字，你的朋友将会做出以下三种回应中的一种：
 * 1.猜对了；
 * 2.猜大了；
 * 3.猜小了。
 * 算法描述：
 * 1.将数组的第一个位置设置为下边界（0）；
 * 2.将数组最后一个元素所在的位置设置为上边界（数组的长度减1）；
 * 3.若下边界等于或小于上边界，则做如下操作：
 *  a.将中点设置为（上边界加上下边界）除以2；
 *  b.如果中点的元素小于查询的值，则将下边界设置为中点元素所在下标加1；
 *  c.如果中点的元素大于查询的值，则将上边界设置为中点元素所在下标减1；
 *  d.否则中点元素即为要查找的数据，可以进行返回。
 * @param { Number } data 查找元素
 */
function binSearch (data) {
  let start = new Date().getTime();
  let upperBound = this.dataStore.length - 1;
  let lowerBound = 0;
  while (lowerBound <= upperBound) {
    let mid = Math.floor((upperBound + lowerBound) / 2);
    if (this.dataStore[mid] < data) {
      lowerBound = mid + 1;
    } else if (this.dataStore[mid] > data) {
      upperBound = mid - 1;
    } else {
      let end = new Date().getTime();
      console.log(`查询耗时：${end - start}ms`);
      return mid;
    }
  }
  let end = new Date().getTime();
  console.log(`查询耗时：${end - start}ms`);
  return -1;
}

/**
 * 基于二分查找算法计算重复次数
 * 当通过二分查找算法找到某个值时，如果在数据集中还有其他相同的值出现，那么该函数会定位在类似值的附近。
 * 函数中找到的值其实是多个该值中位置居中的那一个。这是二分查找算法的本质。
 * 所以一个统计重复值的函数要怎么做才能确保统计到了数据集中出现的所有重复的值呢？最简单的解决方案是写两个循环，一个对数据集向下遍历，或者向左遍历，统计重复次数；一个向上或者向右遍历，统计重复次数。
 * @param { Number } data 查找元素
 */
function count (data) {
  let count = 0;
  let position = this.binSearch(data);
  if (position > -1) {
    ++count;
    for (let i = position - 1; i > 0; --i) {
      if (this.dataStore[i] === data) {
        ++count;
      } else {
        break;
      }
    }
    for (let i = position + 1; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] === data) {
        ++count;
      } else {
        break;
      }
    }
  }
  return count;
}

exports.CArray = CArray;
