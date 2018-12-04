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
 */
function doDynFib (n) {
  let start = new Date().getTime();
  let val = dynFib(n);
  let end = new Date().getTime();
  console.log(`动态规划斐波拉契耗时：${end - start}ms`);
  return val;
}

exports = module.exports = {
  doRecurFib,
  doDynFib
}
