/**
 * 队列测试
 */
const { Queue } = require('./queue.js')
const { Dancer, getDancers, dance } = require('./dance.js')
let q = new Queue()
q.enqueue('谢宋伟')
q.enqueue('黄城')
q.enqueue('梁宇')
console.log(q.toString())
q.dequeue()
console.log(q.toString())
console.log(`队首元素：${q.front()}`)
console.log(`队尾元素：${q.back()}`)
/**
 * 方块舞伴分配
 */
let maleDancers = new Queue()
let femaleDamcers = new Queue()
getDancers(maleDancers, femaleDamcers)
dance(maleDancers, femaleDamcers)
if (!femaleDamcers.empty()) {
  console.log(`${femaleDamcers.front().name} 正在等待舞伴`)
}
if (!maleDancers.empty()) {
  console.log(`${maleDancers.front().name} 正在等待舞伴`)
}
