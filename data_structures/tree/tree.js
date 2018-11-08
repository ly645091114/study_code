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
      } else { // 反之，设新的当前节点为右节点
        current = current.right;
        if (current === null) { // 如果当前节点为 null 就将新的节点插入这个位置，推出循环；反之执行下一循环
          parent.right = n;
          break;
        }
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

exports.BST = BST;
