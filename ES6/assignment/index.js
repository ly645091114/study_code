/**
 * 关于结构赋值
 * 这种写法属于匹配模式，只要等号两边的模式相同，左边的变量就会被赋予对应的值
 */
let [a, b, c] = [1, 2, 3]
console.log(a, b, c)

let [foo, [[bar], baz]] = [1, [[2], 3]]
console.log(foo, bar, baz)
