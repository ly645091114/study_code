/**
 * 重新封装散列函数，使用散列表存储数据
 * 散列构造函数
 * @param { Object } hashtable 散列
 */
function NewHashTable (hashtable) {
    hashtable.put = put
    hashtable.get = get
}

/**
 * 重新封装存储方法
 * @param { Any } key 键
 * @param { Any } data 存入数据
 */
function put (key, data) {
  let pos = this.betterHash(key)
  this.table[pos] = data
}

/**
 * 读取散列表中的数据
 * @param { Any } key 键
 */
function get (key) {
  return this.table[this.betterHash(key)]
}

exports.NewHashTable = NewHashTable
