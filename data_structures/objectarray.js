/**
 * 坐标对象
 * @param { Number } x x轴
 * @param { Number } y y轴
 */
function Point (x, y) {
  let self = this
  self.x = x
  self.y = y
}

/**
 * 打印坐标
 * @param { Array } arr 坐标数组
 */
function displayPts (arr) {
  arr.map((item) => {
    console.log(`${item.x},${item.y}`)
  })
}
let p1 = new Point(1, 2)
let p2 = new Point(3, 5)
let p3 = new Point(2, 8)
let p4 = new Point(4, 4)
let points = [p1, p2, p3, p4]
points.map((item, index) => {
  console.log(`Point${index + 1}: ${item.x},${item.y}`)
})
let p5 = new Point(12, -3)
points.push(p5) // 在数组后方数组插入一个元素
console.log('After push: ')
displayPts(points)
points.shift() // 删除数组第一个元素
console.log('After shift: ')
displayPts(points)
