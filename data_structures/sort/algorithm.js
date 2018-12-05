/**
 * 高级算法：动态规划和贪心算法
 * 一、动态规划
 * 有时被认为是一种与递归相反的技术：递归是从顶部开始将问题分解，通过解决掉所有分解出小问题的方式，来解决整个问题。
 * 动态规划解决方案从底部开始解决问题，将所有小问题解决掉，然后合并成一个整体解决方案，从而解决掉整个大问题。
 * 使用递归去解决问题虽然简洁，但效率不高。包括 JavaScript 在内的众多语言，不能高效地将递归代码解释为机器代码，尽管写出来的程序很简洁，但是执行效率低下。但这并不是说使用递归是件坏事，本质上说，只是那些指令式编程语言和面向对象的编程语言对递归的实现不够完善，因为它们没有将递归作为高级编程的特性。
 * 许多使用递归去解决的编程问题，可以重写为使用动态规划的技巧去解决。动态规划方案通常会使用一个数组来建立一张表，用于存放被分解成众多子问题的解。当算法执行完毕，最终的解会在这个表中很明显的地方被找到。
 * 斐波拉契数列
 * 该序列前两项数值相加而成的。
 * 通过递归函数实现，斐波拉契数列
 * @param { Number } n 数列长度
 */
function recurFib (n) {
  if (n < 2) {
    return n;
  }
  else {
    return recurFib(n - 1) + recurFib(n - 2);
  }
}

/**
 * 斐波拉契数列递归执行方法
 * @param { Number } n 数列长度
 */
function doRecurFib (n) {
  let start = new Date().getTime();
  let val = recurFib(n);
  let end = new Date().getTime();
  console.log(`递归斐波拉契耗时：${end - start}ms`);
  return val;
}

/**
 * 从以上方法可以判断出将会有很多值在递归调用中被重新计算。如果可以将已经计算的值记录下来，函数的执行效率就不会如此差。通过动态规划设计的算法从它能解决的最简单的子问题开始，继而通过得到的解，去解决其他更复杂的子问题，直到整个问题都被解决。所有子问题的解通常被存储在一个数组里以便访问。
 * 通过动态规划实现，斐波拉契数列
 * @param { Number } n 数列长度
 */
function dynFib (n) {
  let val = [];
  for (let i = 0; i <= n; ++i) {
    val[i] = 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  } else {
    val[1] = 1;
    val[2] = 2;
    for (let i = 3; i <= n; ++i) {
      val[i] = val[i - 1] + val[i - 2];
    }
    return val[n - 1];
  }
}

/**
 * 斐波拉契数列动态规划执行方法
 * @param { Number } n 数列长度
 */
function doDynFib (n) {
  let start = new Date().getTime();
  let val = dynFib(n);
  let end = new Date().getTime();
  console.log(`动态规划斐波拉契耗时：${end - start}ms`);
  return val;
}

/**
 * 针对业务逻辑优化动态规划的斐波拉契数列
 * 使用迭代方案计算斐波拉契数列时，是可以不使用数组的。
 * 需要用到数组的原因是因为动态规划算法通常需要将中间结果保存起来。
 * 迭代版本的斐波拉契数列
 * @param { Number } n 数列长度
 */
function iterFib (n) {
  let last = 1;
  let nextLast = 1;
  let result = 1;
  for (let i = 2; i < n; ++i) {
    result = last + nextLast;
    nextLast = last;
    last = result;
  }
  return result;
}

/**
 * 迭代版本的斐波拉契数列
 * @param { Number } n 数列长度
 */
function doIterFib (n) {
  let start = new Date().getTime();
  let val = iterFib(n);
  let end = new Date().getTime();
  console.log(`迭代版本斐波拉契耗时：${end - start}ms`);
  return val;
}

/**
 * 经典问题：背包问题
 * 试想你是一个保险箱大盗，打开一个装满奇珍异宝的保险箱，但是你必须将这些宝贝放入你的小背包中。保险箱中的物品规格和价值不同。你希望自己的背包装进的宝贝总价值最大。
 * 定义一个比较大小的方法
 * @param { Number } a 参数a
 * @param { Number } b 参数b
 * @return { Number } 大的一方
 */
function max (a, b) {
  return (a > b) ? a : b;
}

/**
 * 递归实现背包问题
 * @param { Number } capacity 容积
 * @param { Array } size 体积数组
 * @param { Array } value 价值数组
 * @param { Number } n 物品个数
 */
function knapsack (capacity, size, value, n) {
  if (n === 0 || capacity === 0) {
    return 0;
  }
  if (size[n - 1] > capacity) {
    return knapsack(capacity, size, value, n - 1);
  } else {
    return max(value[n - 1] + knapsack(capacity - size[n - 1], size, value, n - 1), knapsack(capacity, size, value, n - 1));
  }
}

/**
 * 动态规划实现背包问题
 */
function dKnapsack (capacity, size, value, n) {
  let K = [];
  for (let i = 0; i <= capacity + 1; i++) {
    K[i] = [];
  }
  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (i === 0 || w === 0) {
        K[i][w] = 0;
      } else if (size[i - 1] <= w) {
        K[i][w] = max(value[i - 1] + K[i - 1][w - size[i - 1]], K[i - 1][w]);
      } else {
        K[i][w] = K[i - 1][w];
      }
    }
  }
  return K[n][capacity];
}

/**
 * 贪心算法：总是会选择当下的最优解，而不去考虑这一次的选择会不会对未来的选择造成影响。使用贪心算法通常表明，实现者希望做出的这一系列局部“最优”选择能够带来最终的整体“最优”选择。如果是这样的话，该算法将会产生一个最优解，否则，则会得到一个次优解。然而，对很多问题来说，寻找最优解很麻烦，这么做不值得，所以使用贪心算法足够了。
 * 贪心算法实现找零问题
 * 假设现在有以下面额的纸币，如何使用最优的方式去找零
 * @param { Number } origAmt 找零金额
 * @param { Array } coins 纸币面额
 */
function makeChange (origAmt, coins) {
  let arr = coins.slice();
  arr.sort((a, b) => {
    return a - b;
  });
  let remainAmt = 0;
  while (arr.length > 0) {
    let coin = arr.pop();
    if (origAmt % coin < origAmt) {
      console.log(`${coin}面额数量：${parseInt(origAmt / coin)}`);
      remainAmt = origAmt % coin;
      origAmt = remainAmt;
    }
  }
}

exports = module.exports = {
  doRecurFib,
  doDynFib,
  doIterFib,
  knapsack,
  dKnapsack,
  makeChange
}
