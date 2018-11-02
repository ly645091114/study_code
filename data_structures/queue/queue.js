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
  this.count = count
  this.pdequeue = pdequeue
  this.ptoString = ptoString
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
 * 优先队列出队操作
 * 元素越小优先级越高
 */
function pdequeue () {
  let entry = 0
  this.dataStore.forEach((item, index) => {
    if (item.code < this.dataStore[entry].code) {
      entry = index
    }
  })
  let reStr = this.dataStore[entry]
  this.dataStore.splice(entry, 1)
  return reStr
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
 * 优先队列输出
 */
function ptoString () {
  let reStr = ''
  this.dataStore.forEach((item) => {
    reStr += `${item.name} code: ${item.code}\n`
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

/**
 * 队列长度方法
 * @return { Number } 队列长度
 */
function count () {
  return this.dataStore.length
}

exports.Queue = Queue
