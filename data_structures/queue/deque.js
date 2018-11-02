/**
 * 双向队列，同时允许再队伍的开头和结尾添加和删除元素
 */
function Deque () {
  this.dataStore = []
  this.enqueueFront = enqueueFront
  this.enqueueBack = enqueueBack
  this.dequeueFront = dequeueFront
  this.dequeueBack = dequeueBack
  this.front = front
  this.back = back
  this.toString = toString
  this.empty = empty
}

/**
 * 尾部入队
 * @param { Any } element 插入元素
 */
function enqueueBack (element) {
  this.dataStore.push(element)
}

/**
 * 头部入队
 * @param { Any } element 插入元素
 */
function enqueueFront (element) {
  this.dataStore.splice(0, 0, element)
}

/**
 * 尾部出队
 */
function dequeueBack () {
  return this.dataStore.splice(this.dataStore.length - 1, 1)
}

/**
 * 头部出队
 */
function dequeueFront () {
  return this.dataStore.shift()
}

/**
 * 取出数组的第一个元素
 */
function front () {
  return this.dataStore[0]
}

/**
 * 取出最后一个数组元素
 */
function back () {
  return this.dataStore[this.dataStore.length - 1]
}

/**
 * 输出队列元素
 */
function toString () {
  let reStr = ''
  this.dataStore.forEach((item) => {
    reStr += `${item}\n`
  })
  return reStr
}

/**
 * 判断数组是否为空
 */
function empty () {
  return this.dataStore.length === 0
}

/**
 * 返回数组元素个数
 */
function count () {
  return this.dataStore.length
}
exports.Deque = Deque
