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

// 2. Promise 对象有三种状态: pending(进行中), resolve(已完成), reject(已失败); 以下是证明(可以在控制台查看现象)
// console.log(new Promise(() => {})) // Promise {<pending>}
// console.log(new Promise((resolve) => { // Promise {<resolved>: undefined}
// 	resolve()
// }))
// console.log(new Promise((resolve, reject) => { // Promise {<rejected>: undefined}
// 	reject()
// }))

// 3. 状态只能由 pending 变为 resolved 或由 pending 变为 rejected , 且状态改变之后不会再发生变化，会一直保持这个状态; 以下是证明(可以在控制台查看现象)
// console.log(new Promise((resolve, reject) => { // Promise {<rejected>: undefined}
// 	reject()
// 	resolve()
// }))

// console.log(new Promise((resolve, reject) => { // Promise {<resolved>: undefined}
// 	resolve()
// 	reject()
// }))

/* 4. Promise 的 then 方法接收两个可选参数 onFulfilled, onRejected
 * 如果 onFulfilled 或 onRejected 不是函数，其必须被忽略, 所以需判断两个参数是否为函数
 * 当 Promise 状态变为 resolved 时必须调用 onFulfilled，其第一个参数为 Promise resolved 状态传入的值（Resolve 执行时传入的值）
 * 当 Promise 状态变为 rejected 时必须调用 onRejected， 其第一个参数为 Promise rejected 状态传入的值（reject 执行时传入的值）
 * onFulfilled，onRejected 在 Promise 状态改变前不可被调用，并且调用次数不可超过一次
 */

 /**
  * 5. then 方法可以被同一个 Promise 对象调用多次
  * Promise 状态为 resolved 时，所有 onFulfilled 需按其注册顺序依次回调
  * Promise 状态为 rejected 时，所有 onRejected 需按其注册顺序依次回调
  */

/**
 * 6. then 方法必须返回一个新的 Promise 对象，因此 Promise 支持链式调用
 * promise2 = promise1.then(onFulfilled, onRejected);
 * promise1.then(onFulfilled1, onRejected1).then(onFulfilled2, onRejected2);
 * 这里涉及到 Promise 的执行规则，包括 "值的传递" 和 "错误捕获" 机制
 * 6.1 如果 onFulfilled 或者 onRejected 返回一个值 x，则运行该 Promise 解决过程: [[Resolve]](promise2, x)
 *  - 若 x 不为 Promise, 则使 x 直接作为新返回的 Promise 对象的值，即新的 onFulfilled 或者 onRejected 函数的参数
 *  - 若 x 为 Promise, 这时后一个回调函数，就会等待该 Promise 对象（即 x ）的状态发生变化，才会被调用，并且新的 Promise 状态和 x 的状态相同
 */

// let promise1 = new Promise((resolve, reject) => { // 解决过程证明
//   setTimeout(() => {
//     resolve()
//   }, 1000)
// })
// promise2 = promise1.then(res => { // 返回一个普通值
//   return '这里返回一个普通值'
// })
// promise2.then(res => { // 这里返回一个普通值
//   console.log(res)
// })

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve()
//   }, 1000)
// })
// promise2 = promise1.then(res => { // 返回一个普通值
//   return new Promise((resolve, reject) => { // 返回一个Promise对象
//     setTimeout(() => {
//      resolve('这里返回一个Promise')
//     }, 2000)
//   })
// })
// promise2.then(res => { // 这里返回一个Promise
//   console.log(res)
// })

/**
 * 6.2 如果 onFulfilled 或者 onRejected 抛出一个异常 e ，则 promise2 必须变为失败（Rejected），并返回失败的值 e
 */
// let promise1 = new Promise((resolve, reject) => { // 6.2 验证
//   setTimeout(() => {
//     resolve('success')
//   }, 1000)
// })
// promise2 = promise1.then(res => {
//   throw new Error('这里抛出一个异常 e')
// })
// promise2.then(res => {
//   console.log(res)
// })

/**
 * 6.3 如果 onFulfilled 不是函数且 promise1 状态为成功 (resolved), promise2 必须变为成功 (resolved) 并返回 promise1 成功的值
 * 如果 onRejected 不是函数且 promise1 状态为失败（rejected），promise2必须变为失败（rejected） 并返回 promise1 失败的值
 */
// let promise1 = new Promise((resolve, reject) => { // 6.3 验证
//   setTimeout(() => {
//     resolve('success')
//   }, 1000)
// })
// promise2 = promise1.then('这里的onFulfilled本来是一个函数，但现在不是')
// promise2.then(res => { // success
//   console.log(res)
// }, err => {
//   console.log(err)
// })

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('fail')
//   }, 1000)
// })
// promise2 = promise1.then(res => res, '这里的onRejected本来是一个函数，但现在不是')
// promise2.then(res => { // '这里的onRejected本来是一个函数，但现在不是'
//   console.log(res)
// }, err => {
//   console.log(err) 
// })
let executeAsync
if (typeof process === 'object' && process.nextTick) {
  executeAsync = process.nextTick
} else if (typeof setImmediate === 'function') {
  executeAsync = setImmediate
} else {
  executeAsync = function (fn) {setTimeout(fn, 0)}
}
function callAsync(fn, arg, callback, onError) {
  executeAsync(function () {
    try {
      callback ? callback(fn(arg)) : fn(arg)
    } catch (e) {
      onError(e)
    }
  })
}

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

    // 增加执行队列：由于 then 方法支持多次调用，我们可以维护两个数组，将每次 then 方法注册时的回调函数添加到数组中，等待执行
    this._fulfilledQueues = [] // 添加成功回调函数队列
    this._rejectedQueues = [] // 添加失败回调函数队列

    try { // 执行函数，将两个方法绑定到 _resolve 和 _reject 方法中
      handle(this._resolve.bind(this), this._reject.bind(this)) 
    } catch (err) {
      this._reject(err)
    }
  }

  _resolve (val) {
    if (this._status !== PENDING) return
    this._status = RESOLVED
    const runFulfilled = (value) => {
      let cb
      while (cb = this._fulfilledQueues.shift()) {
        cb(value)
      }
    }
    const runRejected = (error) => {
      let cb
      while (cb = this._rejectedQueues.shift()) {
        cb(error)
      }
    }
    if (val instanceof TestPromise) { // 如果resolve的参数为Promise对象，则必须等待该Promise对象状态改变后, 当前Promsie的状态才会改变，且状态取决于参数Promsie对象的状态
      val.then(value => {
        this._value = value
        runFulfilled(value)
      }, err => {
        this._value = err
        runRejected(err)
      })
    } else {
      this._value = val
      runFulfilled(val)
    }
  }

  _reject (err) {
    if (this._status !== PENDING) return
    // 依次执行失败队列中的函数，并清空队列
    const run = () => {
      this._status = REJECTED
      this._value = err
      let cb
      while (cb = this._rejectedQueues.shift()) {
        cb(err)
      }
    }
    setTimeout(run, 0) // 为了支持同步的Promise，这里采用异步调用
  }
  /**
   * @description 添加 then 方法
   * @param { Function } onFulfilled 成功执行方法
   * @param { Function } onRejected 失败执行方法
   * @returns { Function } 实例
   */
  then (onFulfilled, onRejected) {
    const { _value, _status } = this
    return new TestPromise((onFulfilledNext, onRejectedNext) => { // 返回一个新的 Promise 对象
      /**
       * @description 封装一个成功时执行的函数
       * @param { Any } value 成功参数
       */
      let fulfilled = value => { // 否则会将返回结果直接作为参数，传入下一个 then 的回调函数，并立即执行下一个 then 的回调函数
        if (isFunction(onFulfilled)) {
          callAsync(onFulfilled, value, res => {
            if (res instanceof TestPromise) { // 如果当前回调函数返回 TestPromise 对象，必须等待其状态改变后在执行下一个回调
              res.then(onFulfilledNext, onRejectedNext)
            } else { // 否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
              onFulfilledNext(res)
            }
          }, onRejectedNext)
        } else {
          try {
            onFulfilledNext(value)
          } catch (err) {
            // 如果函数执行出错，新的Promise对象的状态为失败
            onRejectedNext(err)
          }
        }
      }
      /**
       * @description 封装一个失败执行的函数
       * @param { Any } err 封装一个失败时执行的函数
       */
      let rejected = error => {
        if (isFunction(onRejected)) {
          callAsync(onRejected, error, res => {
            if (res instanceof TestPromise) { // 如果当前回调函数返回 TestPromise 对象，必须等待其状态改变后在执行下一个回调
              res.then(onFulfilledNext, onRejectedNext)
            } else { // 否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
              onFulfilledNext(res)
            }
          }, onRejectedNext)
        } else {
          try {
            onRejectedNext(error)
          } catch (err) { // 如果函数执行出错，新的Promise对象的状态为失败
            onRejectedNext(err)
          }
        }
      }
      switch (_status) { // 当状态为 pending 时，将 then 方法回调函数加入执行队列等待执行
        case PENDING:
          this._fulfilledQueues.push(fulfilled)
          this._rejectedQueues.push(rejected)
          break
        // 当状态已经改变时，立即执行对应的回调函数
        case RESOLVED:
          fulfilled(_value)
          break
        case REJECTED:
          rejected(_value)
          break
        default:
          break
      }
    })
  }
  /**
   * @description catch 方法
   * @param { Any } onRejected 错误参数 
   * @returns { Function } then 方法
   */
  catch (onRejected) {
    return this.then(undefined, onRejected)
  }
  /**
   * @description 添加静态 resolve 方法
   * @param {Any} value 回调参数
   * @returns { Function } 实例
   */
  static resolve (value) {
    if (value instanceof TestPromise) return value // 如果参数是MyPromise实例，直接返回这个实例
    return new TestPromise(resolve => resolve(value))
  }

  /**
   * @description call 方法实现
   * @param { Array } list 请求函数列表
   */
  static all (list) {
    return new TestPromise((resolve, reject) => {
      /**
       * 返回值的集合
       */
      let values = []
      let count = 0
      for (let p of list) {
        // 只要有一个实例率先改变，新的 TestPromise 的状态就跟着改变
        this.resolve(p).then(res => {
          values[i] = res
          count++
          if (count === list.length) resolve(values) // 所有状态都变成 resolved 时返回的 TestPromise 状态就变成 resolved
        }, err => {
          reject(err) // 有一个被 rejected 时返回的 TestPromise 状态就变成 rejected
        })
      }
    })
  }

  /**
   * @description race 方法
   * @param { Array } list 请求函数列表
   */
  static race (list) {
    return new TestPromise((resolve, reject) => {
      for (let p of list) {
        this.resolve(p).then(res => { // 只要有一个实例率先改变状态，新的 TestPromise 的状态就跟着改变
          resolve(res)
        }, err => {
          reject(err)
        })
      }
    })
  }

  finally (cb) {
    return this.then(
      value  => TestPromise.resolve(cb()).then(() => value),
      reason => TestPromise.resolve(cb()).then(() => { throw reason })
    )
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

new TestPromise(resolve => {
  console.log(1)
  resolve(3)
  TestPromise.resolve().then(() => console.log(4)).then(() => console.log(5))
  }).then(num => { console.log(num) }).then(() => { console.log(6) })
  console.log(2)