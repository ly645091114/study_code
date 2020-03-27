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

/**
 * 展开
 * 展开操作符正与解构相反。它允许你将一个数组展开为另一个数组，或将一个对象展开为另一个对象
 */
let frist = [1, 2]
let second = [3, 4]
let bothPlus = [0, ...frist, ...second, 5]

// 这会令bothPlus的值为[0, 1, 2, 3, 4, 5]。 展开操作创建了 first和second的一份浅拷贝。 它们不会被展开操作所改变。

let defaults = { food: "spicy", price: "$$", ambiance: "noisy" } // 还可以展开对象
let search = { ...defaults, food: "rich" }

// search的值为{ food: "rich", price: "$$", ambiance: "noisy" }。 对象的展开比数组的展开要复杂的多。 像数组展开一样，它是从左至右进行处理，但结果仍为对象。 这就意味着出现在展开对象后面的属性会覆盖前面的属性。 因此，如果我们修改上面的例子，在结尾处进行展开的话：

defaults = { food: "spicy", price: "$$", ambiance: "noisy" }
search = { food: "rich", ...defaults }

// 那么，defaults里的food属性会重写food: "rich"，在这里这并不是我们想要的结果。

// 对象展开还有其它一些意想不到的限制。 首先，它仅包含对象 自身的可枚举属性。 大体上是说当你展开一个对象实例时，你会丢失其方法：

class D {
  p = 12
  m() {
  }
}
let g = new D()
let clone = { ...g }
clone.p // ok
// clone.m() // error!

// 其次，TypeScript编译器不允许展开泛型函数上的类型参数。 这个特性会在TypeScript的未来版本中考虑实现。

/**
 * 接口初探
 */
function printLabel (labelledObj: { label: string }) {
  console.log(labelledObj.label)
}

let myObj = { size: 10, label: 'size 10 Object' }
printLabel(myObj)

// 类型检查器会查看 printLabel 的调用。printLabel 有一个参数，并要求这个对象参数有一个名为 label 类型为 string 的属性。需要注意的是，我们传入对象参数实际上会包含很多属性，但是编译器只会检查那些必需的属性是否存在，并且其类型是否匹配。然而，有些时候 TypeScript 却并不会这么宽松

// 使用接口来描述：必须包含一个 label 属性且类型为 string：

interface LabelledValue {
  label: string
}

function printLabel1 (labelledObj: LabelledValue) {
  console.log(labelledObj.label)
}

let myObj1 = { size: 10, label: 'size 10 Object' }
printLabel1(myObj1)

// LabelledValue 接口就好比一个名字，用来描述上面例子里的要求。它代表了有一个 label 属性且类型为 string 的对象。需要注意的是，我们在这里并不能像在其他语言里一样，说传给 printLabel 的对象实现了这个接口。我们只会去关注值的外形。只要传入的对象满足上面提到的必要条件，那么它就是被允许的。还有一点值得一提的是，类型检查器不会去检查属性得顺序，只要相应得属性存在并且类型也是对的就可以的。

/**
 * 可选属性
 * 接口里的属性不全都是必需的。有些是只在某些条件下存在，或者根本不存在。可选属性在应用 "option bags"模式时很常用，即给函数传入的参数对象中只有部分属性赋值了。
 */

interface SquareConfig {
  color?: string
  width?: number
}

function createSquare(config: SquareConfig) {
  let newSquare = { color: 'white', area: 100 }
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}

let mySquare = createSquare({ color: 'black' })

/**
 * 只读属性
 * 一些对象属性只能在对象刚刚创建的时候修改其值。可以在属性名前用 readonly 来指定只读属性
 */
interface Point {
  readonly x: number
  readonly y: number
}

let p1: Point = { x: 10, y: 20 }
// p1.x = 5 // error!

// TypeScript 具有 ReadonlyArray<T> 类型，它与 Array<T> 相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改

let t: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = t
// ro[0] = 12 // error
// ro.push(5) // error
// ro.length = 100 // error
// a = ro // error

// 上面代码的最后一行，可以看到就算把整个 ReadonlyArray 赋值到一个普通数组也是不可以的。但是你可以用类型断言重写
t = ro as number[]

/**
 * readonly VS const
 * 最简单判断该用 readonly 还是 const 的方法是看要把它作为变量还是作为一个属性。做为变量使用的话用 const，若作为属性则使用 readonly
 */

/**
 * 额外的属性检查
 * 我们在第一个例子里使用了接口，TypeScript 让我们传入 { size: number; label: string } 到仅期望得到 { label: string } 的函数里。我们已经学过了可选属性，并且知道他们 "option bags" 模式里很有用。
 * 然而，天真地将这两者结合的话就会像在 JavaScript 里那样搬起石头砸自己地脚
 */

function createSquare1(config: SquareConfig) {
  let newSquare = { color: 'white', area: 100 }
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}

// let mySquare1 = createSquare1({ colour: "red", width: 100 }) // error: 'colour' not expected in type 'SquareConfig'

/**
 * 此处传入的参数拼写为 colour 而不是 color。在 JavaScript 里，这里会失败。
 * 你可能会争辩这个程序已经正确的类型化了，因为 width 属性是兼容，不存在 color 属性，而且额外的 colour 属性是毫无意义的
 * 然而，TypeScript 会认为这段代码可能存在 bug。对象字面量会被特殊对待而且会经过 额外属性检查，当将它们赋值给变量或作为参数传递时候。如果一个对象字面量存在任何 "目标类型" 不包含的属性时，你会得到一个错误
 * 绕开这些检查非常简单。最简便的方法是使用类型断言
 */

let mySquare1 = createSquare1({ width: 100, opacity: 0.5 } as SquareConfig)

 // 然而，最佳的方式是能够添加一个字符串索引签名，前提是你能够确定这个对象可能具有某些做为特殊用途使用的额外属性。如果 SquareConfig 带有上面定义的类型的 color 和 width 属性，并且还会带有任意数量的其他属性，那么我们可以这样定义它

interface SquareConfig2 {
  color?: string
  width?: number
  [propName: string]: any
}

// 这里表示的是 SquareConfig2 可以有任意数量的属性，并且只要他们不是 color 和 width，那么就无所谓他们的类型是什么

// 最后一种跳过检查的方式，就是将这个对象赋值给另一个变量；因为 squareOptions 不会经过额外的属性检查，所以编译器不会报错。
let squareOptions = { colour: 'red', width: 100 }
let mySquare2 = createSquare1(squareOptions)

// 要留意，在像上面一样的简单代码里，你可能不应该去绕开这些检查。对于包含方法和内部状态的复杂对象字面量来讲，可能需要使用一些技巧