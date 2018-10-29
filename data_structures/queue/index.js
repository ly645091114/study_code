/**
 * 队列测试
 */
const { Queue } = require('./queue.js')
const { getDancers, dance } = require('./dance.js')
const { distrbute, collect, dispArray } = require('./sort.js')
const { Patient } = require('./priority-queue.js')
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
if (femaleDamcers.count() > 0) {
  console.log(`当前女性等候人数${femaleDamcers.count()}人`)
}
if (maleDancers.count() > 0) {
  console.log(`当前男性等候人数${maleDancers.count()}人`)
}
/**
 * 基数排序
 */
let queues = []
for (let i = 0; i < 10; ++i) {
  queues[i] = new Queue()
}
let nums = []
for (let i = 0; i < 10; i++) {
  nums[i] = Math.floor(Math.floor(Math.random() * 101))
}
console.log('基数排序前：')
console.log(dispArray(nums))
distrbute(nums, queues, 1)
collect(queues, nums)
distrbute(nums, queues, 10)
collect(queues, nums)
console.log('基数排序后：')
console.log(dispArray(nums))
/**
 * 优先队列的实现
 */
let p = new Patient('谢宋伟', 5)
let ed = new Queue()
ed.enqueue(p)
p = new Patient('黄城', 4)
ed.enqueue(p)
p = new Patient('梁宇', 6)
ed.enqueue(p)
p = new Patient('子琴', 1)
ed.enqueue(p)
p = new Patient('张磊', 1)
ed.enqueue(p)
console.log(`等候用户：`)
console.log(ed.ptoString())
let goon = ed.pdequeue()
console.log(`${goon.name}已出队`)
console.log(`等候用户：`)
console.log(ed.ptoString())
goon = ed.pdequeue()
console.log(`${goon.name}已出队`)
console.log(`等候用户：`)
console.log(ed.ptoString())
goon = ed.pdequeue()
console.log(`${goon.name}已出队`)
console.log(`等候用户：`)
console.log(ed.ptoString())
