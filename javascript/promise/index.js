/**
 * 针对 Promise 实现流程的验证，代码实现 Promise
 * Promise 必须接受一个函数作为参数，我们称该函数为 handle, handle 又包含 resolve 和 reject 两个参数，均为函数
 */
// 1. 这里我们验证一下必须作为一个函数做参数是否如此
// new Promise() // Promise resolver undefined is not a function
// 由错误提示我们可以看出，Promise 的确是必须接受一个参数作为参数
/**
 * @description 判断变量是否为函数
 * @param { Any } variable 判断变量
 * @returns { Boolean } 判断结果
 */
const isFunction = variable => typeof variable === 'function'

// 2. Promise 对象有三种状态: pending(进行中), resolve(已完成), reject(已失败); 以下是证明(可以在谷歌浏览器控制台查看现象)
// console.log(new Promise(() => {})) // Promise {<pending>}
// console.log(new Promise((resolve) => { // Promise {<resolved>: undefined}
// 	resolve()
// }))
// console.log(new Promise((resolve, reject) => { // Promise {<rejected>: undefined}
// 	reject()
// }))

// 3. 状态只能由 pending 变为 resolved 或由 pending 变为 rejected , 且状态改变之后不会再发生变化，会一直保持这个状态; 以下是证明(可以在谷歌浏览器控制台查看现象)
// console.log(new Promise((resolve, reject) => { // Promise {<rejected>: undefined}
// 	reject()
// 	resolve()
// }))

// console.log(new Promise((resolve, reject) => { // Promise {<resolved>: undefined}
// 	resolve()
// 	reject()
// }))

// 4. Promise 的 then 方法接收两个可选参数 onResolve, onReject
// 如果 onResolve 或 onReject 不是函数，其必须被忽略, 所以需判断两个参数是否为函数

/**
 * @description 定义三个常量用于标记，Promise 对象的状态
 */
const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

/**
 * @description 定义一个名为 testPromise 的类，它接受一个 handle 的参数
 * @param { Function } handle 执行方法
 */
class TestPromise {
  constructor (handle) {
    if (!isFunction(handle)) {
      throw new TypeError(`TestPromise resolver ${handle} is not a function`)
    }

    // 添加初始状态
    this._status = PENDING
    this._value = undefined

    try { // 执行函数，将两个方法绑定到 _resolve 和 _reject 方法中
      handle(this._resolve.bind(this), this._reject.bind(this)) 
    } catch (err) {
      this._reject(err)
    }
  }

  _resolve (val) {
    if (this._status !== PENDING) return // 状态只能由 pending 变为 resolved 或由 pending 变为 rejected, 这里新增一个判断状态是否为 pending
    this._status = RESOLVED
    this._value = val
  }

  _reject (err) {
    if (this._status !== PENDING) return
    this._status = REJECTED
    this._value = err
  }
}

// 下面证明我们的方法是否满足 2, 3两点的逻辑
// console.log(new TestPromise(() => {})) // TestPromise { _status: 'pending', _value: undefined }

// console.log(new TestPromise((resolve, reject) => { // TestPromise { _status: 'resolved', _value: undefined }
//   resolve()
//   reject()
// }))

// console.log(new TestPromise((resolve, reject) => { // TestPromise { _status: 'rejected', _value: undefined }
//   reject()
//   resolve()
// }))
