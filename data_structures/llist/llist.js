/**
 * 链表，一组节点组成的集合，每个节点都使用一个对象的引用指向它的后继。指向另一个节点的引用叫做链
 * 下面是基于对象设计的链表
 * 构造一个节点类
 * @param { Any } element 新增元素
 */
function Node (element) {
  this.element = element
  this.next = null
}
/**
 * 链表构造函数
 * 这里 head 节点的 next 属性被初始化为 null, 当有新元素插入时, next 会指向新的元素, 所以在这里我们没有修改 next 的值 
 */
function LList () {
  this.head = new Node('head')
  this.find = find
  this.insert = insert
  this.remove = remove
  this.findPrevious = findPrevious
  this.display = display
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
 * 遍历链表元素，检查每一个节点的下一节点中是否存储待删除数据。如果找到返回该节点
 * @param { Any } element 查询元素
 * @return { Object } 返回前一节点
 */
function findPrevious (element) {
  let currNode = this.head
  while (!(currNode.next === null) && (currNode.next.element !== element)) {
    currNode = currNode.next
  }
  return currNode
}
/**
 * 删除节点, 需要先找到待删除节点前面的节点, 找到这个节点后, 修改它的 next 属性, 使其不再指向待删除节点
 * 而是指向待删除节点的下一节点
 * @param { Any } element 删除元素
 */
function remove (element) {
  let prevNode = this.findPrevious(element)
  if (!(prevNode.next === null)) {
    prevNode.next = prevNode.next.next
  } 
}
exports.LList = LList
