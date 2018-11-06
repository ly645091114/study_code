const fs = require('fs');
/**
 * 从本地文件中获取，文件列表，通过换行符将其切分成数组
 * 再通过 trim() 去除首尾空格
 * @param { String } file 文件路径
 * @return { Array } 文件数组
 */
function createFileList(file) {
  let list = fs.readFileSync(file, 'utf-8');
  list = list.split('\n');
  list.forEach((item) => {
    item = item.trim();
  })
  return list;
}

exports.createFileList = createFileList;
