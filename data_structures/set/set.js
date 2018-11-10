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
  this.size = size;
  this.contains = contains;
  this.union = union;
  this.intersect = intersect;
  this.subset = subset;
  this.difference = difference;
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

/**
 * 检查成员是否在集合中
 * @param { Any } data 检查成员
 * @return { Boolean } 检查结果
 */
function contains (data) {
  return this.dataStore.indexOf(data) > -1;
}

/**
 * 获取集合长度
 * @return { Number } 集合长度
 */
function size () {
  return this.dataStore.length;
}

/**
 * 并集操作，将两个集合合并成一个
 * 将第一个集合里的成员悉数加入一个临时集合，然后检查第二个集合的成员，看他们是否同时属于第一个集合，如果属于就跳过，否则就加入新集合
 * @param { Object } set 操作集合
 * @return { Object } 合并的新集合
 */
function union (set) {
  let tempSet = new Set();
  this.dataStore.forEach((item) => {
    tempSet.add(item);
  })
  set.dataStore.forEach((item) => {
    if (!tempSet.contains(item)) {
      tempSet.add(item);
    }
  })
  return tempSet;
}

/**
 * 交集操作
 * 每当发现第一个集合成员也属于第二个集合时，便将该成员加入一个新集合
 * @param { Object } set 操作集合
 * @return { Object } 相交的新集合
 */
function intersect (set) {
  let tempSet = new Set();
  this.dataStore.forEach((item) => {
    if (set.contains(item)) {
      tempSet.add(item);
    }
  })
  return tempSet;
}

/**
 * 判断集合一是不是集合二的子集
 * 首先判断集合一的长度 是否 大于集合二的长度
 * 判断第一个集合的元素是不是都在第二个集合中
 * 满足以上条件可以确定集合一是不是集合二的子集
 * @param { Object } set 操作集合
 * @return { Boolean } 判断结果
 */
function subset (set)  {
  if (this.size() > set.size()) {
    return false;
  }
  for (let item of this.dataStore) {
    if (!set.contains(item)) {
      return false;
    }
  }
  return true;
}

/**
 * 补集操作
 * 返回一个新集合，该集合包含的是属于第一个集合但不属于第二个集合的成员
 * @param { Object } set 操作集合
 * @return { Object } 新集合
 */
function difference (set) {
  let tempSet = new Set();
  this.dataStore.forEach((item) => {
    if (!set.contains(item)) {
      tempSet.add(item);
    }
  })
  return tempSet;
}

exports.Set = Set;
