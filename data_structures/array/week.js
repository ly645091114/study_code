/**
 * 周天气对象
 */
function weekTemps () {
  let self = this
  self.dataStore = []
  self.add = add
  self.average = average
}

/**
 * 添加温度
 * @param { Number } temp 温度
 */
function add (temp) {
  let self = this
  self.dataStore.push(temp)
}

/**
 * 求平均值
*/
function average () {
  let self = this
  let total = 0
  self.dataStore.forEach((item) => {
    total += item
  })
  return total / self.dataStore.length
}

let thisWeek = new weekTemps()
thisWeek.add(52)
thisWeek.add(55)
thisWeek.add(61)
thisWeek.add(65)
thisWeek.add(55)
thisWeek.add(50)
thisWeek.add(52)
thisWeek.add(49)
console.log(thisWeek.average())
