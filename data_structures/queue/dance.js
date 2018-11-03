const { createFileList } = require('../utils/index.js')
/**
 * 通过队列的方式，实现方块舞的舞伴分配
 * 将来宾分为男女两队，选队列的中的第一人组成舞伴。他们身后的人各向前移动一位形成新的队首
 * 每个舞者信息存在一个对象中
 * @param { String } name 名称
 * @param { String } sex 性别
 */
function Dancer (name, sex) {
  this.name = name
  this.sex = sex
}

/**
 * 将舞者信息从文件中读取出来
 * @param { Object } males 男性队列
 * @param { Object } females 女性队列
 */
function getDancers (males, females) {
  let name = createFileList('./member-list.txt')
  name.forEach((item) => {
    item = item.trim()
  })
  name.forEach((item) => {
    let dancer = item.split(' ')
    let sex = dancer[0]
    let name = dancer[1]
    if (sex === 'F') {
      females.enqueue(new Dancer(name, sex))
    } else {
      males.enqueue(new Dancer(name, sex))
    }
  })
}

/**
 * 将男性和女性组成舞伴，并宣布结果
 * @param { Object } males 男性队列
 * @param { Object } females 女性队列
 */
function dance (males, females) {
  console.log('下一组搭档是：')
  while(!females.empty() && !males.empty()) {
    let person = females.front()
    let str = person.name
    females.dequeue()
    person = males.front()
    str += `和${person.name}`
    males.dequeue()
    console.log(str)
  }
}
exports = module.exports = {
  Dancer,
  getDancers,
  dance
}
