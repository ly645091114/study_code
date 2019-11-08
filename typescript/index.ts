/**
 * 布尔值
 * 最基本的数据类型就是简单的true/false值，在JavaScript和TypeScript里叫做boolean（其它语言中也一样）。
 */
let isDone: boolean = false

/**
 * 数字
 * 和 JavaScript 一样，TypeScript 里的所有的数字都是浮点数。这些浮点数类型是 number。除了支持十进制和十六进制字面量，TypeScript 还支持 ECMAScript 2015 中引入的二进制和八进制字面量
 */
let decLiteral: number = 6
let hexLiteral: number = 0xf00d
let binaryLiteral: number = 0b1010
let octalLiteral: number = 0o744

/**
 * 字符串
 * JavaScript 程序的另一项基本操作是处理网页或服务器端的文本数据。像其他语言里一样，我们使用 string 表示文本数据类型。和 JavaScript 一样，可以使用双引号 (") 或单引号(') 表示字符串
 */
let str: string = 'bob'
str = 'smith'

/**
 * 还可以使用模板字符串，它可以定义多行文本和内嵌表达式。
 */
let myName: string = `Gene`
let myAge: number = 37
let mySentence: string = `Hello, my name is ${myName}. I'll be ${myAge + 1} years old next month`

/**
 * 数组
 * TypeScript 像 JavaScript 一样可以操作数组元素。有两种方式可以定义数组。第一种，可以在元素类型后面接上 []，便是由此类型组成的一个数组
 */
let list1: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]

/**
 * 元组 Tuple
 * 元组类型允许表示一个已知元素数量和类型的数组，个元素类型不必相同。比如，可以定义一队分别为 string 和 number 类型的元组
 */
let x: [string, number]
x = ['hello', 10]

// 当访问一个已知索引的元素，会得到正确的类型：
console.log(x[0].substr(1))

/**
 * 枚举
 * enum 类型是对 JavaScript 标准数据类型的一个补充。像C#等其他语言一样，使用枚举类型可以为一组数值赋予有好的名字
 */
enum mapColor {Red, Green, Blue}
let c: mapColor = mapColor.Green
console.log(mapColor, c)

enum mapColor2 {Red = 1, Green, Blue}
let d: mapColor2 = mapColor2.Green
console.log(mapColor2, c)

/**
 * Any
 * 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。那么我们可以用 any 类型来标记这些变量
 */

let notSure: any = 4
notSure = 'maybe a string instead'
notSure = false

// 在对现有代码进行改写的时候，any 类型是十分有用的，它允许你在编译时可选择性地包含或移除类型检查。你可能认为 Object 有相似的作用，就像它在其他语言中那样。但是 Object 类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意方法，即便它真的有这些方法

notSure.ifItExists()
notSure.toFixed()

let prettySure: Object = 4

// 当你只知道一部分数据类型时, any 类型也是有用的。比如，你有一个数组，它包含了不同的类型的数据

let list3: any[] = [1, true, 'free']
list3[1] = 100

/**
 * Void
 * 某种程度上来说，void 类型像是与 any 类型相反，它表示没有任何类型。当一个函数没有返回值时，你通常会见到其返回类型时 void
 */
function warnUser() :void {
  console.log('This is my warning message')
}

// 声明一个 void 类型的变量没什么大用，因为你只能为它赋予 undefined 和 null
let unusable: void = undefined

/**
 * Null 和 Undefined
 * TypeScript 里， undefined 和 null 两者各自有自己的类型分别叫做 undefined 和 null。和 void 相似，他们的本身的类型用处不是很大
 */
let u: undefined = undefined
let n: null = null

// 默认情况下 null 和 undefined 是所有类型的子类型。就是说你可以把 null 和 undefined 赋值给 number 类型的变量
let num: number = undefined
let str2: string = null

// 然而当你指定了 --strictNullChecks 标记, null 和 undefined 只能赋值给 void 和它们各自。这能避免很多常见的问题。也许在某处你想传入一个 string 或 null 或 undefined，你可以使用联合类型 string | null | undefined
let str3: string | null | undefined = null

// 注意：我们鼓励尽可能地使用 --strictNullChecks，但在本手册里我们假设这个标记是关闭的。

/**
 * Never
 * never 类型表示的是那些永不存在的值的类型。例如，never 类型是那些总是会抛出异常或者根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型，变量也可能 never 类型，当它们被永不为真的类型保护所约束时
 * never 类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是 never 的子类型或可以赋值给 never 类型（除了 never 本身之外）。即使 any 也不可以赋值给 never。
 * 下面是一些返回 never 类型的函数
 */

function error(messge: string): never { // 返回 never 的函数必须存在无法到达的终点
  throw new Error(messge)
}

function fail() { // 推断的返回值类型为 never
  return error('Something failed')
}

function infiniteLoop(): never {
  while (true) {

  }
}

/**
 * Object
 * object 表示非原始类型，也就是除 number, string, boolean, symbol, null 或 undefined 之外的类型
 * 使用 object 类型，就可以更好的表示像 Object.create 这样的 API
 */
declare function create(o: object | null): void

create({ prop: 0 })
create(null)

/**
 * 类型断言
 * 有时候你会遇到这样的情况，你会比 TypeScript 更了解某个值的详细信息。通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型
 * 通过类型断言这种方式可以告诉编译器: '相信我，我知道自己在干什么'。类型断言好比其他语言里的类型转换，但是不进行特殊的数据检查和解构。它没有运行时的影响，只是在编译阶段起作用。TypeScript 会假设你，程序员，已经进行了必须的检查
 */

let someValue1: any = 'this is a string' // 类型断言有两种形式。其一是"尖括号语法"
let strLength1: number = (<string>someValue1).length

let someValue2: any = 'this is a string' // 另一个为as语法
let strLength2: number = (someValue2 as string).length

// 两种形式是等价的。至于使用哪个大多数情况下是凭个人喜好；然而，当你在 TypeScript 里使用 JSX 时，只有 as 语法断言是被允许的

/**
 * 解构赋值
 * 如果想指定它的类型，仍然需要在其后写上完整的模式
 */

let o = {
  a: 'foo',
  b: 12,
  c: 'bar'
}
let {a, b}: {a: string, b: number} = o

function keepWholeObject(wholeObject: { a: string, b?: number }) {
  let { a, b = 1001 } = wholeObject
}

/**
 * 函数声明
 * 解构也能用于函数声明
 */
type C = { a:string, b?:number }
function f({ a, b }: C): void {
  // ...
} // 小心使用解构，就算是最简单的解构表达式也是难以理解的。尤其当存在深层嵌套解构的时候，就算这时没有堆叠在一起的重命名，默认值和类型注解，也是令人难以理解的。解构表达式要尽量小而简单。你自己也可以直接使用解构将会生成的赋值表达式。