/**
 * 双向链表，双向链表节点比链表多了一个前驱，提高操作效率
 * 构造一个节点类
 * @param { Any } element 新增元素
 */
function Node (element) {
  this.element = element
  this.next = null
  this.previous = null
}
/**
 * 链表构造函数
 * 这里 head 节点的 next 属性被初始化为 null, 当有新元素插入时, next 会指向新的元素, 所以在这里我们没有修改 next 的值
 */
function DlList () {
  this.head = new Node('head')
  this.find = find
  this.insert = insert
  this.display = display
  this.remove = remove
  this.findLast = findLast
  this.dispReverse = dispReverse
  this.advance = advance
  this.currentNode = this.head
  this.back = back
  this.show = show
}
/**
 * 查找方法，遍历链表查找数据
 * @param { Any } element 查找元素
 * @return { Object } 匹配元素的节点
 */
function find (element) {
  let currNode = this.head
  while (currNode.element !== element) {
    currNode = currNode.next
  }
  return currNode
}
/**
 * 将新节点插入链表
 * @param { Object } newElement 新节点
 * @param { Any } element 被插入节点
 */
function insert (newElement, element) {
  let newNode = new Node(newElement)
  let current = this.find(element)
  newNode.next = current.next
  newNode.previous = current
  current.next = newNode
}
/**
 * 显示链表中的元素
 */
function display () {
  let currNode = this.head
  while (!(currNode.next === null)) {
    console.log(currNode.next.element)
    currNode = currNode.next
  }
}
/**
 * 删除节点, 需要先找到待删除节点前面的节点, 找到这个节点后, 修改它的 next 属性, 使其不再指向待删除节点
 * 而是指向待删除节点的下一节点
 * @param { Any } element 删除元素
 */
function remove (element) {
  let currNode = this.find(element)
  if (!(currNode.next === null)) {
    currNode.previous.next = currNode.next
    currNode.next.previous = currNode.previous
    currNode.next = null
    currNode.previous = null
  } 
}
/**
 * 查询链表最后一个节点
 * @return { Object } 匹配元素的节点
 */
function findLast () {
  let currNode = this.head
  while (!(currNode.next === null)) {
    currNode = currNode.next
  }
  return currNode
}
/**
 * 反向遍历链表
 */
function dispReverse () {
  let currNode = this.head
  currNode = this.findLast()
  while (!(currNode.previous === null)) {
    console.log(currNode.element)
    currNode = currNode.previous
  }
}
/**
 * 向前移动节点
 * @param { Number } n 移动次数
 */
function advance (n) {
  while ((n > 0) && !(this.currentNode.next === null)) {
    this.currentNode = this.currentNode.next
    n--
  }
}
/**
 * 向后移动节点
 * @param { Number } n 移动次数
 */
function back (n) {
  while ((n > 0) && !(this.currentNode.element === 'head')) {
    this.currentNode = this.currentNode.previous
    n--
  }
}
/**
 * 显示当前节点
 * @return { Any } 当前节点元素
 */
function show () {
  console.log(this.currentNode.element)
}
exports.DlList = DlList
