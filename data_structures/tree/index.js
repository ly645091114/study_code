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
console.log(`中序遍历二叉查找树：${nums.inOrder(nums.root)}`);
