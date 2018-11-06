const { createFileList } = require('../utils/index.js');
const { Dictionary } = require('./dictionary.js');
/**
 * 写一个程序实现从一个文本文件中读入名字和电话号码
 */
function wrnum () {
  let num = createFileList('./number.txt');
  let memberList = new Dictionary();
  num.forEach((item) => {
    let member = item.split(' ');
    memberList.add(member[0], member[1]);
  })
  return memberList;
}

exports.wrnum = wrnum;
