var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * 布尔值
 * 最基本的数据类型就是简单的true/false值，在JavaScript和TypeScript里叫做boolean（其它语言中也一样）。
 */
var isDone = false;
/**
 * 数字
 * 和 JavaScript 一样，TypeScript 里的所有的数字都是浮点数。这些浮点数类型是 number。除了支持十进制和十六进制字面量，TypeScript 还支持 ECMAScript 2015 中引入的二进制和八进制字面量
 */
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
/**
 * 字符串
 * JavaScript 程序的另一项基本操作是处理网页或服务器端的文本数据。像其他语言里一样，我们使用 string 表示文本数据类型。和 JavaScript 一样，可以使用双引号 (") 或单引号(') 表示字符串
 */
var str = 'bob';
str = 'smith';
/**
 * 还可以使用模板字符串，它可以定义多行文本和内嵌表达式。
 */
var myName = "Gene";
var myAge = 37;
var mySentence = "Hello, my name is " + myName + ". I'll be " + (myAge + 1) + " years old next month";
/**
 * 数组
 * TypeScript 像 JavaScript 一样可以操作数组元素。有两种方式可以定义数组。第一种，可以在元素类型后面接上 []，便是由此类型组成的一个数组
 */
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
/**
 * 元组 Tuple
 * 元组类型允许表示一个已知元素数量和类型的数组，个元素类型不必相同。比如，可以定义一队分别为 string 和 number 类型的元组
 */
var x;
x = ['hello', 10];
// 当访问一个已知索引的元素，会得到正确的类型：
console.log(x[0].substr(1));
/**
 * 枚举
 * enum 类型是对 JavaScript 标准数据类型的一个补充。像C#等其他语言一样，使用枚举类型可以为一组数值赋予有好的名字
 */
var mapColor;
(function (mapColor) {
    mapColor[mapColor["Red"] = 0] = "Red";
    mapColor[mapColor["Green"] = 1] = "Green";
    mapColor[mapColor["Blue"] = 2] = "Blue";
})(mapColor || (mapColor = {}));
var c = mapColor.Green;
console.log(mapColor, c);
var mapColor2;
(function (mapColor2) {
    mapColor2[mapColor2["Red"] = 1] = "Red";
    mapColor2[mapColor2["Green"] = 2] = "Green";
    mapColor2[mapColor2["Blue"] = 3] = "Blue";
})(mapColor2 || (mapColor2 = {}));
var d = mapColor2.Green;
console.log(mapColor2, c);
/**
 * Any
 * 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。那么我们可以用 any 类型来标记这些变量
 */
var notSure = 4;
notSure = 'maybe a string instead';
notSure = false;
// 在对现有代码进行改写的时候，any 类型是十分有用的，它允许你在编译时可选择性地包含或移除类型检查。你可能认为 Object 有相似的作用，就像它在其他语言中那样。但是 Object 类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意方法，即便它真的有这些方法
notSure.ifItExists();
notSure.toFixed();
var prettySure = 4;
// 当你只知道一部分数据类型时, any 类型也是有用的。比如，你有一个数组，它包含了不同的类型的数据
var list3 = [1, true, 'free'];
list3[1] = 100;
/**
 * Void
 * 某种程度上来说，void 类型像是与 any 类型相反，它表示没有任何类型。当一个函数没有返回值时，你通常会见到其返回类型时 void
 */
function warnUser() {
    console.log('This is my warning message');
}
// 声明一个 void 类型的变量没什么大用，因为你只能为它赋予 undefined 和 null
var unusable = undefined;
/**
 * Null 和 Undefined
 * TypeScript 里， undefined 和 null 两者各自有自己的类型分别叫做 undefined 和 null。和 void 相似，他们的本身的类型用处不是很大
 */
var u = undefined;
var n = null;
// 默认情况下 null 和 undefined 是所有类型的子类型。就是说你可以把 null 和 undefined 赋值给 number 类型的变量
var num = undefined;
var str2 = null;
// 然而当你指定了 --strictNullChecks 标记, null 和 undefined 只能赋值给 void 和它们各自。这能避免很多常见的问题。也许在某处你想传入一个 string 或 null 或 undefined，你可以使用联合类型 string | null | undefined
var str3 = null;
// 注意：我们鼓励尽可能地使用 --strictNullChecks，但在本手册里我们假设这个标记是关闭的。
/**
 * Never
 * never 类型表示的是那些永不存在的值的类型。例如，never 类型是那些总是会抛出异常或者根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型，变量也可能 never 类型，当它们被永不为真的类型保护所约束时
 * never 类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是 never 的子类型或可以赋值给 never 类型（除了 never 本身之外）。即使 any 也不可以赋值给 never。
 * 下面是一些返回 never 类型的函数
 */
function error(messge) {
    throw new Error(messge);
}
function fail() {
    return error('Something failed');
}
function infiniteLoop() {
    while (true) {
    }
}
create({ prop: 0 });
create(null);
/**
 * 类型断言
 * 有时候你会遇到这样的情况，你会比 TypeScript 更了解某个值的详细信息。通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型
 * 通过类型断言这种方式可以告诉编译器: '相信我，我知道自己在干什么'。类型断言好比其他语言里的类型转换，但是不进行特殊的数据检查和解构。它没有运行时的影响，只是在编译阶段起作用。TypeScript 会假设你，程序员，已经进行了必须的检查
 */
var someValue1 = 'this is a string'; // 类型断言有两种形式。其一是"尖括号语法"
var strLength1 = someValue1.length;
var someValue2 = 'this is a string'; // 另一个为as语法
var strLength2 = someValue2.length;
// 两种形式是等价的。至于使用哪个大多数情况下是凭个人喜好；然而，当你在 TypeScript 里使用 JSX 时，只有 as 语法断言是被允许的
/**
 * 解构赋值
 * 如果想指定它的类型，仍然需要在其后写上完整的模式
 */
var o = {
    a: 'foo',
    b: 12,
    c: 'bar'
};
var a = o.a, b = o.b;
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
}
function f(_a) {
    var a = _a.a, b = _a.b;
    // ...
} // 小心使用解构，就算是最简单的解构表达式也是难以理解的。尤其当存在深层嵌套解构的时候，就算这时没有堆叠在一起的重命名，默认值和类型注解，也是令人难以理解的。解构表达式要尽量小而简单。你自己也可以直接使用解构将会生成的赋值表达式。
/**
 * 展开
 * 展开操作符正与解构相反。它允许你将一个数组展开为另一个数组，或将一个对象展开为另一个对象
 */
var frist = [1, 2];
var second = [3, 4];
var bothPlus = [0].concat(frist, second, [5]);
// 这会令bothPlus的值为[0, 1, 2, 3, 4, 5]。 展开操作创建了 first和second的一份浅拷贝。 它们不会被展开操作所改变。
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" }; // 还可以展开对象
var search = __assign({}, defaults, { food: "rich" });
// search的值为{ food: "rich", price: "$$", ambiance: "noisy" }。 对象的展开比数组的展开要复杂的多。 像数组展开一样，它是从左至右进行处理，但结果仍为对象。 这就意味着出现在展开对象后面的属性会覆盖前面的属性。 因此，如果我们修改上面的例子，在结尾处进行展开的话：
defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
search = __assign({ food: "rich" }, defaults);
// 那么，defaults里的food属性会重写food: "rich"，在这里这并不是我们想要的结果。
// 对象展开还有其它一些意想不到的限制。 首先，它仅包含对象 自身的可枚举属性。 大体上是说当你展开一个对象实例时，你会丢失其方法：
var D = /** @class */ (function () {
    function D() {
        this.p = 12;
    }
    D.prototype.m = function () {
    };
    return D;
}());
var g = new D();
var clone = __assign({}, g);
clone.p; // ok
// clone.m() // error!
// 其次，TypeScript编译器不允许展开泛型函数上的类型参数。 这个特性会在TypeScript的未来版本中考虑实现。
/**
 * 接口初探
 */
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: 'size 10 Object' };
printLabel(myObj);
function printLabel1(labelledObj) {
    console.log(labelledObj.label);
}
var myObj1 = { size: 10, label: 'size 10 Object' };
printLabel1(myObj1);
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'black' });
var p1 = { x: 10, y: 20 };
// p1.x = 5 // error!
// TypeScript 具有 ReadonlyArray<T> 类型，它与 Array<T> 相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改
var t = [1, 2, 3, 4];
var ro = t;
// ro[0] = 12 // error
// ro.push(5) // error
