/**
 * 优先队列，一般情况下，从队列中删除的元素，一定是率先入队的元素。
 * 但是也有一些使用队列的应用，再删除元素时不必遵守先进先出的约定。
 * 所以需要一个优先队列的数据结构来模拟
 * 优先队列的方法在 queue.js 文件中的
 * pdequeue () 方法
 * 定义存储队列元素的对象，然后再构建我们的优先队列
 * @param { String } name 名字
 * @param { Number } code 优先级
 */
function Patient (name, code) {
  this.name = name;
  this.code = code;
}
exports.Patient = Patient;
