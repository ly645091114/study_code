/**
 * 通过链表实现，约瑟夫环
 * 构建一个约瑟夫环方法
 * @param { Number } num 间隔
 * @param { Object } currNode 链表
 */
function josephus (currNode, num) {
  while (currNode.count() > num - 1) {
    currNode.advance(num);
    currNode.remove(currNode.currentNode.element);
  }
  console.log('\n安全结果是：');
  currNode.display();
}

exports.josephus = josephus;
