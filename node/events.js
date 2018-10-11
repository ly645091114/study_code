const events = require('events')
let eventsEmitter = new events.EventEmitter() // 事件发射对象
// var connectHandler = () => {
//   console.log('链接成功')
//   // 触发 data_received 事件
//   // eventsEmitter.emit('data_received')
// }

// // 绑定 connection 事件处理程序
// eventsEmitter.on('connection', connectHandler)

// // 使用匿名函数绑定 data_received 事件
// eventsEmitter.on('data_received', () => {
//   console.log('数据接收成功')
// })

// // 触发 connection 事件
// eventsEmitter.emit('connection')

// console.log('程序执行完毕')


/******************分割线***********************/
// let num = 0
// eventsEmitter.on('some_event', () => {
//   num++
//   console.log(num)
// })
// setTimeout(() => {
//   eventsEmitter.emit('some_event')
// }, 1000)


/*******************分割线********************* */
// let callback = () => {
//   console.log('移除成功')
// }
// eventsEmitter.on('someEvent', (arg1, arg2) => { // on 绑定事件可被多次执行
//   console.log('监听1', arg1, arg2)
// })
// eventsEmitter.once('someEvent', (arg1, arg2) => { // once 只会被执行一次
//   console.log('监听2', arg1, arg2)
// })
// eventsEmitter.once('otherEvent', (arg1, arg2) => { // once 只会被执行一次
//   console.log('监听2', arg1, arg2)
// })
// eventsEmitter.listenerCount('someEvent')
// eventsEmitter.emit('someEvent', '牛肉饭', '牛逼')
// eventsEmitter.emit('someEvent', '牛肉饭', '牛逼')

// eventsEmitter.removeAllListeners(['someEvent'])
// eventsEmitter.emit('otherEvent', '牛肉饭', '牛逼')
// eventsEmitter.emit('someEvent', '牛肉饭', '牛逼')

/*********************分隔符***********************/

// 监听器 #1
var listener1 = function listener1() {
  console.log('监听器 listener1 执行。')
}

// 监听器 #2
var listener2 = function listener2() {
 console.log('监听器 listener2 执行。')
}

// 绑定 connection 事件，处理函数为 listener1 
eventsEmitter.addListener('connection', listener1)

// 绑定 connection 事件，处理函数为 listener2
eventsEmitter.on('connection', listener2)

var eventListeners = eventsEmitter.listenerCount('connection')
console.log(eventListeners + " 个监听器监听连接事件。")

// 处理 connection 事件 
eventsEmitter.emit('connection')

// 移除监绑定的 listener1 函数
eventsEmitter.removeListener('connection', listener1) // removeListener('connection',callback); 此处参数 callback 必须和监听器中的回调函数是同一个，否则不生效。
console.log("listener1 不再受监听。")

// 触发连接事件
eventsEmitter.emit('connection')

eventListeners = eventsEmitter.listenerCount('connection')
console.log(eventListeners + " 个监听器监听连接事件。")

console.log("程序执行完毕。")
