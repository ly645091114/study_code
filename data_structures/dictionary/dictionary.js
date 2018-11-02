/**
 * 字典 键-值对
 * 基础是 Array 类
 * 构建一个字典类
 */
function Dictionary () {
  this.dataStore = new Array()
  this.add = add
  this.find = find
  this.remove = remove
  this.showAll = showAll
  this.count = count
  this.clear = clear
  this.sortShow = sortShow
}

/**
 * 插入键值
 * @param { Number, String } key 键
 * @param { Any } value 值
 */
function add (key, value) {
  this.dataStore[key] = value
}

/**
 * 查询
 * @param { Number, String } key 键
 * @return { Any } 值
 */
function find (key) {
  return this.dataStore[key]
}

/**
 * 删除
 * @param { Number, String } key 键
 */
function remove (key) {
  delete this.dataStore[key]
}

/**
 * 打印
 */
function showAll () {
  Object.keys(this.dataStore).forEach((key) => {
    console.log(`${key} -> ${this.dataStore[key]}`)
  })
}

/**
 * 获取字典中的元素个数
 * @return { Number } 元素个数
 */
function count () {
  let n = 0
  Object.keys(this.dataStore).forEach(() => {
    ++n
  })
  return n
}

/**
 * 清空
 */
function clear () {
  Object.keys(this.dataStore).forEach((key) => {
    delete this.dataStore[key]
  })
}

/**
 * 排序打印
 */
function sortShow () {
  Object.keys(this.dataStore).sort().forEach((key) => {
    console.log(`${key} -> ${this.dataStore[key]}`)
  })
}
exports.Dictionary = Dictionary
