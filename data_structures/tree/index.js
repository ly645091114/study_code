/**
 * 二叉查找树测试
 */
const { BST } = require('./tree.js');
let nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
nums.insert(22);
nums.insert(22);
nums.insert(22);
nums.insert(20);
nums.insert(19);
nums.insert(18);
nums.insert(33);
console.log(`中序遍历二叉查找树：${nums.inOrder(nums.root)}`);
console.log(`先序遍历二叉查找树：${nums.preOrder(nums.root)}`);
console.log(`后序遍历二叉查找树：${nums.postOrder(nums.root)}`);
console.log(`该树的最小值是：${nums.getMin()}`);
console.log(`该树的最大值是：${nums.getMax()}`);
console.log(`查找37：${nums.find(37)}`);
console.log(`查找1：${nums.find(1)}`);
console.log(`删除 18`);
nums.remove(18);
console.log(`中序遍历二叉查找树：${nums.inOrder(nums.root)}`);
console.log(`查找22：${nums.find(22).count}`);
