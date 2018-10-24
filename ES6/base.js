/** 
 * 变量 test1 用 var 命令声明，会发生变量提升，即脚本开始运行时，变量 test1 已经存在了，但是没有值，所以会输出undefined。
 * 变量 test2 用 let 命令声明，不会发生变量提升。这表示在声明它之前，变量 test2 是不存在的，这时如果用到它，就会抛出一个错误。
 */
console.log(test1)
var test1 = 1
console.log(test2)
let test2 = 1
