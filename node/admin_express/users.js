/**
 * 数据操作文件
 * 操作文件中的数据，只处理数据，不关心业务
 */
let fs = require('fs')

let dbPath = './db.json'

/**
 * @description 获取所有用户列表
 * @param { Function } callback 回调函数
 */
const find = function (callback) {
  /**
   * 通过回调函数实现异步操作
   */
  fs.readFile(dbPath, 'utf8', function (error, data) {
    if (error) {
      return callback(error)
    }
    /**
     * 从文件中读取到的数据一定是字符串
     * 所以一定要手动转成对象
     */
    callback(null, JSON.parse(data).users)
  })
}

/**
 * @description 获取所有用户列表
 * @param { Number } id 用户id
 * @param { Function } callback 回调函数
 */
const findById = function (id, callback) {
  fs.readFile(dbPath, 'utf8', function (error, data) {
    if (error) {
      return callback(error)
    }
    let users = JSON.parse(data).users
    let user = users.find(function(item) {
      return item.id === Number(id)
    })
    callback(null, user)
  })
}

/**
 * @description 添加用户
 * @param { Object } user 用户数据
 * @param { Function } callback 回调函数
 */
const add = function (user, callback) {
  find(function(error, data) {
    if (error) {
      return callback(error)
    }
    user.id = data[data.length - 1].id + 1
    data.push(user)
    let fileData = JSON.stringify({
      users: data
    })
    fs.writeFile(dbPath, fileData, function (error) {
      if (error) {
        return callback(error)
      }
      callback()
    })
  })
}

/**
 * 编辑用户
 */
const update = function (user, callback) {
  find(function(error, data) {
    if (error) {
      return callback(error)
    }
    user.id = parseInt(user.id)
    let resItem = data.find(function (item) {
      return item.id === Number(user.id)
    })
    for (let prop in user) { // 遍历拷贝对象
      resItem[prop] = user[prop]
    }
    let fileData = JSON.stringify({
      users: data
    })
    fs.writeFile(dbPath, fileData, function (error) {
      if (error) {
        return callback(error)
      }
      callback()
    })
  })
}

/**
 * 删除用户
 */
const del = function (id, callback) {
  find(function(error, data) {
    if (error) {
      return callback(error)
    }
    let deleteIndex = data.findIndex(function (item) {
      return item.id === Number(id)
    })
    data.splice(deleteIndex, 1)
    let fileData = JSON.stringify({
      users: data
    })
    fs.writeFile(dbPath, fileData, function (error) {
      if (error) {
        return callback(error)
      }
      callback()
    })
  })
}

module.exports = {
  find,
  add,
  update,
  del,
  findById
}
