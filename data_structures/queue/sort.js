/**
 * 通过队列对数据进行排序，基数排序
 * 将数据集扫描两次，第一次按个位数上的数字进行排序，第二次按十位数上的数字进行排序
 * 每个数字根据对应位上的数值被分在不同的盒子里
 */
/**
 * 根据相应位上的数值分配到对应的队列
 * @param { Array } nums 数据集
 * @param { Array } queues 队列集
 * @param { Number } digit 个位或十位
 */
function distrbute (nums, queues, digit) {
  nums.forEach((item) => {
    switch (digit) {
      case 1:
        queues[item % 10].enqueue(item)
        break
      case 10:
        queues[Math.floor(item / 10)].enqueue(item)
        break
      default:
        break
    }
  })
}
/**
 * 从队列中收集数字
 * @param { Array } nums 数据集
 * @param { Array } queues 队列集
 */
function collect (queues, nums) {
  let i = 0
  queues.forEach((item) => {
    while (!item.empty()) {
      let num = item.front()
      nums[i++] = num
      item.dequeue()
    }
  })
}
/**
 * 展示数组
 */
function dispArray (arr) {
  let str = ''
  arr.forEach((item) => {
    str += `${item} `
  })
  return str
}
exports = module.exports = {
  distrbute,
  collect,
  dispArray
}

