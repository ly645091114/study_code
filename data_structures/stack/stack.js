/**
 * 构造一个 stack 类
 */
function Stack () {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.length = length;
  this.clear = clear;
}

/**
 * 入栈方法
 * @param { Any } element 入栈元素
 */
function push (element) {
  this.dataStore[this.top++] = element;
}

/**
 * 出栈方法
 */
function pop () {
  return this.dataStore[--this.top];
}

/**
 * 输出栈顶元素
 */
function peek () {
  return this.dataStore[this.top - 1];
}

/**
 * 获取栈内元素
 */
function length () {
  return this.top;
}

/**
 * 清空栈
 */
function clear () {
  return this.top = 0;
}
exports.Stack = Stack;
