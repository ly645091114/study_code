let twod = []
let rows = 5
for (let i = 0; i < rows; ++i) {
  twod[i] = []
}

/**
 * 初始化一个二位数组
 * @param { Number } numrows 列数
 * @param { Number } numcols 行数
 * @param { Number } initial 初始值
 */
Array.matrix = (numrows, numcols, initial) => {
  let arr = []
  for (let i = 0; i < numrows; ++i) {
    let colnums = []
    for (let j = 0; j < numcols; ++j) {
      colnums[j] = initial
    }
    arr[i] = colnums
  }
  return arr
}

let nums = Array.matrix(5, 5, 0)
console.log(nums)
