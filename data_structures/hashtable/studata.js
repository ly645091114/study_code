/**
 * 散列运用学生成绩录入
 * 通过指定随机数最大值 和 最小值 构造学生成绩
 * @param { Number } min 最小值
 * @param { Number } max 最大值
 * @return { Number } 随机成绩
 */
function getRadomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * 随机构造九位数学生 ID
 * @return { Array } 成绩数组
 */
function getStuData (arr) {
  for (let i = 0; i < arr.length; ++i) {
    let num = ''
    for (let j = 0; j <= 9; ++j) { // 内层循环随机生成学生 ID
      num += Math.floor(Math.random() * 10)
    }
    num += getRadomInt(50, 100) // 随机生成该学生成绩
    arr[i] = num
  }
}

exports.getStuData = getStuData
