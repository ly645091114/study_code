function weekTemps () {
  let self = this
  self.dataStore = []
  self.add = add
  self.average = average
}

function add (temp) {
  let self = this
  self.dataStore.push(temp)
}
function average () {
  let self = this
  let total = 0
  self.dataStore.map((item) => {
    total += item
  })
  return total / self.dataStore.length
}

console.log(thisWeek.average())
thisWeek.add(52)
thisWeek.add(55)
thisWeek.add(61)
thisWeek.add(65)
thisWeek.add(55)
thisWeek.add(50)
thisWeek.add(52)
thisWeek.add(49)
console.log(thisWeek.average())