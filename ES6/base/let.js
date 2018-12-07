/**
 * ES6 新增 let 命令，用于声明变量 （类似于 var），但是所声明的变量，只在 let 命令所在的代码块内有效。
 */
{
  let a = 10;
  var b = 1;
}
// console.log(a); // ReferenceError: a is not defined
// console.log(b); // 1


/**
 * let 适用场景 for 循环的计数器
 */ 
for (let i = 0; i < 10; i++) {
}
// console.log(i); // ReferenceError: i is not defined
for (var j = 0; j < 10; j++) {
}
// console.log(j); // 10
/**
 * 上述列子对比可以看到 i 只在 for 循环的函数体内有效，在函数体外引用会报错；而 j 即使在函数体外值依然存在
 */


let c = [];
for (let i = 0; i < 10; i++) {
  c[i] = function () {
    console.log(i);
  }
}
// c[6](); // 6
/**
 * 上面代码中，变量 i 是 let 声明的，当前的 i 只在本轮循环有效，所以每一次循环的 i 其实都是一个新的变量，所以最后输出的是 6.
 * 问题：如果每一轮循环的变量 i 都是重新声明，那它怎么知道上一轮循环的值，从而计算出本轮的循环的值？
 * 答：因为 JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量 i 时，就在上一轮循环的基础上进行计算。
 */
c = [];
for (var i = 0; i < 10; i++) {
  c[i] = function () {
    console.log(i);
  }
}
// c[6](); // 10
/**
 * 上面代码中，变量 i 是 var 声明的，在全局范围都有效，所以全局只有一个变量 i。每一次循环，变量 i 的值都会发生改变，而循环内被赋值给数组 c 的函数内部的console.log(i)， 里面的 i 指向的就是全局的 i。也就是说所有数组 c 的成员里面的 i，指向的都是同一个 i，导致运行时输出的最后一轮的 i 的值，也就是 10.
 */


for (let i = 0; i < 3; i++) { // for 循环有个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内是一个单独的子作用域。
  let i = 'abc';
  console.log(i);
}
/**
 * 上面代码正确运行，输出了 3 次 abc。这表明函数内部的变量 i 与循环变量 i 在不同的一个作用域，有各自单独的作用域。
 */

 
/** 
 * 变量 test1 用 var 命令声明，会发生变量提升，即脚本开始运行时，变量 test1 已经存在了，但是没有值，所以会输出undefined。
 * 变量 test2 用 let 命令声明，不会发生变量提升。这表示在声明它之前，变量 test2 是不存在的，这时如果用到它，就会抛出一个错误。
 */
// console.log(test1);
var test1 = 1;
// console.log(test2);
let test2 = 1;

