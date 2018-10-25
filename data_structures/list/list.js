/**
 * 列表对象
 */
function List () {
  let self = this
  self.listSize = 0 // 列表长度
  self.pos = 0 // 定位
  self.dataStore = [] // 初始化一个空数组来保存列表元素
  self.clear = clear // 清空方法
  self.find = find // 查询方法
  self.toString = toString // 输出方法
  self.insert = insert // 插入方法
  self.append = append // 添加方法
  self.remove = remove // 移除方法
  self.font = font // 定位头部
  self.end = end // 定位尾部
  self.prev = prev // 后退方法
  self.next = next // 前进方法
  self.hasNext = hasNext // 尾部判断
  self.hasPrev = hasPrev // 头部判断
  self.length = length // 长度方法
  self.currPos = currPos // 获取定位
  self.moveTo = moveTo // 移动方法
  self.getElement = getElement // 获取元素
  self.contains = contains // 判断元素
}

/**
 * 给列表添加元素
 * @param { Any } element 添加元素
 */
function append (element) {
  let self = this
  self.dataStore[self.listSize++] = element // 在列表的下一个位置添加新元素
}

/**
 * 从列表中查找元素
 * @param { Any } element 查找元素
 */
function find (element) {
  let self = this
  let res = -1
  self.dataStore.forEach((item , index) => {
    if (item === element) {
      res = index
    }
  })
  return res
}

/**
 * 从列表中删除元素
 * @param { Any } element 删除元素
 */
function remove (element) {
  let self = this
  let fountAt = self.find(element)
  if (fountAt > -1) {
    self.dataStore.splice(fountAt, 1)
    --self.listSize
    return true
  }
  return false
}

/**
 * 获取列表长度
 */
function length () {
  let self = this
  return self.listSize
}

/**
 * 显示列表中元素
 */
function toString () {
  let self = this
  return self.dataStore
}

/**
 * 插入元素
 * @param { Any } element 插入元素
 * @param { Any } after 前元素
 */
function insert (element, after) {
  let self = this
  let insertPos = self.find(after)
  if (insertPos > -1) {
    self.dataStore.splice(insertPos + 1, 0 , element)
    ++self.listSize
    return true
  }
  return false
}

/**
 * 清空列表中的所有元素
 */
function clear () {
  let self = this
  delete self.dataStore
  self.dataStore.length = 0
  self.listSize = self.pos = 0
}

/**
 * 判断给定的值是否在列表中
 * @param { Any } element 判断值
 */
function contains (element) {
  let self = this
  let res = self.find(element)
  return res > -1
}

/**
 * 定位头部
 */
function font () {
  let self = this
  self.pos = 0
}

/**
 * 定位尾部
 */
function end () {
  let self = this
  self.pos = self.listSize - 1
}

/**
 * 后退
 */
function prev () {
  let self = this
  --self.pos
}

/**
 * 前进
 */
function next () {
  let self = this
  if (self.pos < self.listSize) {
    ++self.pos
  }
}

/**
 * 获取定位
 */
function currPos () {
  let self = this
  return self.pos
}

/**
 * 移动
 * @param { Number } position 目标位置
 */
function moveTo (position) {
  let self = this
  self.pos = position
}

/**
 * 获取当前元素
 */
function getElement () {
  let self = this
  return self.dataStore[self.pos]
}

/**
 * 判断尾部
 */
function hasNext () {
  let self = this
  return self.pos < self.listSize
}

/**
 * 判断头部
 */
function hasPrev () {
  let self = this
  return self.pos >= 0
}

exports.List = List;
