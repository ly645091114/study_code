/**
 * 正则三个基本标志
 * '/g' 表示该表达式将来在输入字符串中查找所有可能的匹配，返回的结构可以是多个。如果不加 '/g' 最多只会匹配一个
 * '/i' 表示匹配的时候不区分大小写
 * '/m' 表示多行匹配, 即匹配换行符两端潜在匹配。影响正则中的 '^', '$' 符号
 */
let str1 = 'D121456451512sd1f1221d2f1\nd12Afsf564w65ef1e1f5e1f'
let [reg1v1, reg1v1g] = [/1/, /1/g]
console.log('/g match:', str1.match(reg1v1), str1.match(reg1v1g)) // 这个地方需要声明一点 .split() 方法这两个正则返回结果是一样, 至于为什么需要研究一下 split 遍历匹配的方式才能完整解释

let [reg1v2, reg1v2i] = [/af/, /af/i]
console.log('/i match:',str1.match(reg1v2), str1.match(reg1v2i))

let [reg1v3, reg1v3i] = [/^d/, /^d/m]
console.log('/m match:',str1.match(reg1v3), str1.match(reg1v3i))

let reg1v4 = /^d/gmi // 标志混合使用
console.log('/gmi match:',str1.match(reg1v4))

/**
 * '\' 转义符,在特殊字符之前出现标识下一个字符是特殊字符
 */
let reg2 = /[a-z]\s/i // '\s' 标识空白符 该正则判断是否存在 a-z 后跟空格的情况
console.log(reg2.test('7bbb '), reg2.test('q7 '), reg2.test('sdfsfa dfdf ')) // true fase true

/**
 * '^' 首字母匹配, 如果正则存在 '/m', 那么换行符首字母也匹配
 * 注: 当 '^' 作为第一个字符出现在一个字符集合模式时, 表示的是反向字符集, 即它匹配任何没有包含在方括号中的字符
 */
let str3 = 'nihao\nxixihah\nnishishui'
let [reg3v1, reg3v1m] = [/^n/g, /^n/mg] // 判断字符串首字母是否为 n, 匹配所有情况
console.log('^ match:', str3.match(reg3v1), str3.match(reg3v1m))

let reg3v2 = /[^a-n]/g // 匹配所有不为 a-n 的字符
console.log('[^] match:', str3.match(reg3v2))

/**
 * '$' 尾字母匹配, 如果正则存在 '/m', 那么换行符尾字母也匹配
 */
