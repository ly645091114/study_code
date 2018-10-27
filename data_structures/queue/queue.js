/**
 * 队列对象
 * 队列是一种列表，不同是队列只能在队尾插入元素，在队首删除元素；用于存储按顺序排列的数据，先进先出
 * 应用场景提交操作系统执行一系列操作
 */
function Queue () {
  this.dataStore = []
  this.enqueue = enqueue
  this.dequeue = dequeue
  this.front = front
  this.back = back
  this.toString = toString
  this.empty = empty
}
/**
 * 入队操作，即向队尾添加一个元素
 * @param { Any } element 添加元素
 */
function enqueue (element) {
  this.dataStore.push(element)
}
/**
 * 出队操作，即删除队首元素
 */
function dequeue () {
  this.dataStore.shift()
}
/**
 * 读取队首元素
 * @return { String } 队首元素
 */
function front () {
  return this.dataStore[0]
}
/**
 * 读取队尾元素
 * @return { String } 队尾元素
 */
function back () {
  return this.dataStore[this.dataStore.length - 1]
}
/**
 * 显示队列内所有元素
 * @return { String } 队列元素
 */
function toString () {
  let reStr = ''
  this.dataStore.forEach((item) => {
    reStr += `${item}\n`
  })
  return reStr
}
/**
 * 判断队列是否为空
 * @return { Boolean } 队列是否为空
 */
function empty () {
  return this.dataStore.length === 0
}

exports.Queue = Queue
