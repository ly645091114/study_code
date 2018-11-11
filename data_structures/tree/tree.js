/**
 * 二叉树，一种高效存储删除的数据结构
 * 每个节点的子节点不允许超过两个
 * 两个节点分为称为左节点和右节点，相对较小的值保存在左节点，较大的值保存在右节点
 * 节点 构造方法
 * Node 对象既保存数据，也保存其他节点的链接
 * @param { Any } data 存储数据
 * @param { Object } left 左节点
 * @param { Object } right 右节点
 */
function Node (data, left, right) {
  this.data = data;
  this.count = 1;
  this.left = left;
  this.right = right;
  this.show = show;
}

/**
 * 展示节点数据
 * @return { Any } 该节点数据
 */
function show () {
  return this.data;
}

/**
 * 二叉查找树 类 构造方法
 * 让类包含一个数据成员：一个表示二叉查找树根节点的 Node 对象。
 * 根节点初始化为 null
 */
function BST () {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.preOrder = preOrder;
  this.postOrder = postOrder;
  this.getMin = getMin;
  this.getMax = getMax;
  this.find = find;
  this.remove = remove;
}

/**
 * 二叉查找树的插入方法
 * @param { Any } data 存储数据
 */
function insert (data) {
  let n = new Node(data, null, null);
  if (this.root === null) { // 检查是否有根节点，如果没有，那么这是一棵新树，该节点就是根节点
    this.root = n;
  } else { // 待插入节点不是根节点，需要准备遍历 BST ，找到插入的适当位置。类似于遍历链表，用一个变量存储当前节点，层层遍历
    let current = this.root; // 设根节点为当前节点
    let parent;
    while (true) {
      parent = current;
      if (data < current.data) { // 如果待插入节点的保存数据小于当前节点，则设新的当前节点为原节点为左节点
        current = current.left;
        if (current === null) { // 如果当前节点为 null 就将新的节点插入这个位置，推出循环；反之执行下一循环
          parent.left = n;
          break;
        }
      } else if (data > current.data) { // 反之，设新的当前节点为右节点
        current = current.right;
        if (current === null) { // 如果当前节点为 null 就将新的节点插入这个位置，推出循环；反之执行下一循环
          parent.right = n;
          break;
        }
      } else { // 通过二叉查找树实现计数
        current.count++
        break
      }
    }
  }
}

/**
 * 中序遍历二叉查找树（通过递归的方式实现）
 * 按照节点上的键值，以升序访问 BST 上所有的节点
 */
function inOrder (node) {
  let str = '';
  if (!(node === null)) {
    str += `${inOrder(node.left)}${node.show()} ${inOrder(node.right)}`;
  }
  return str;
}

/**
 * 先序遍历
 */
function preOrder (node) {
  let str = '';
  if (!(node === null)) {
    str += `${node.show()} ${inOrder(node.left)}${inOrder(node.right)}`;
  }
  return str;
}

/**
 * 后序遍历
 */
function postOrder (node) {
  let str = '';
  if (!(node === null)) {
    str += `${inOrder(node.left)}${inOrder(node.right)}${node.show()} `;
  }
  return str;
}

/**
 * 查找最小值
 * 因为较小的值总是在左子节点上，在 BST 上查找最小值，只需要遍历左子树，直到找到最后的一个节点
 * @return { Any } 最小值
 */
function getMin () {
  let current = this.root;
  while (current.left !== null) {
    current = current.left;
  }
  return current.data;
}

/**
 * 查找最大值
 * 同查找最小值，在 BST 上查找最大值，只需要遍历右子树，直到找到最后的一个节点
 * @return { Any } 最大值
 */
function getMax () {
  let current = this.root;
  while (current.right !== null) {
    current = current.right;
  }
  return current.data;
}

/**
 * 查找指定值
 * 需要比较该值和当前节点值得大小，通过比较决定左遍历还是右遍历
 * @param { Any } data 查找值
 * @return { Object } 匹配值得节点 
 */
function find (data) {
  let current = this.root;
  while (current !== null) {
    if (current.data === data) {
      return current;
    } else if (data < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return null;
}

/**
 * 在二叉查找树上查找树上删除节点
 * 删除方法
 * @param { Any } 删除元素
 */
function remove (data) {
  this.root = removeNode(this.root, data);
}

/**
 * 删除节点
 * @param { Object } node 当前节点
 * @param { Any } data 删除元素
 * @return { Object } 删除节点后的树
 */
function removeNode (node, data) {
  if (node === null) { // 判断当前节点是否为空节点
    return null;
  }
  if (data === node.data) { // 如果当前节点为要删除节点
    if (node.left === null && node.right === null) { // 如果待删除节点为叶子节点
      return null;
    }
    if (node.left === null) { // 如果当前节点没有左节点
      return node.right;
    }
    if (node.right === null) { // 如果当前节点没有右节点
      return node.left;
    }
    var tempNode = getSmallest(node.right);
    node.right = removeNode(node.right, tempNode.data);
    return node;
  } else if (data < node.data) {
    node.left = removeNode(node.left, data);
    return node;
  } else {
    node.right = removeNode(node.right, data);
    return node;
  }
}

/**
 * 获取节点的最小值
 * @param { Object } node 查找节点
 * @return { Object } 返回下一节点或者当前节点为最小节点
 */
function getSmallest (node) {
  if (node.left === null) {
    return node
  } else {
    return getSmallest (node.left)
  }
}

exports.BST = BST;
