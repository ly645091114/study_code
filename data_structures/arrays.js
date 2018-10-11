let twod = []
let rows = 5
for (let i = 0; i < rows; ++i) {
  twod[i] = []
}

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
console.log(nums[3][4])