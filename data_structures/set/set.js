/**
 * 集合：一种包含不同元素的数据结构
 * 集合中的元素称为成员
 * 集合特性：1.集合中的成员时无序的 2.集合中不允许相同成员存在
 * 集合用于保存一些独一无二的元素
 * 不包含成员的集合称为 空集， 全集 包含一切可能成员的集合
 * 两个集合的成员完全相同，则称两个集合相等
 * 集合操作：并集， 交集，补集
 * 集合 构造函数
 */
function Set () {
  this.dataStore = [];
  this.add = add;
  this.remove = remove;
  this.show = show;
}

/**
 * 存储数据方法
 * @param { Any } data 存储成员
 * @return { Boolean } 操作结果
 */
function add (data) {
  if (this.dataStore.indexOf(data) < 0) { // 集合中不允许相同成员存在
    this.dataStore.push(data);
    return true;
  }
  return false;
}

/**
 * 移除元素方法
 * @param { Any } data 移除成员
 * @return { Boolean } 操作结果
 */
function remove (data) {
  let pos = this.dataStore.indexOf(data);
  if (pos > -1) {
    this.dataStore.splice(pos, 1);
    return true;
  }
  return false;
}

/**
 * 展示集合成员
 * @return { Array } 集合
 */
function show () {
  return this.dataStore;
}

exports.Set = Set;
