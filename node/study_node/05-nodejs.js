/**
 * 文件操作：fs
 * 服务构建：http
 * 路径操作模块：path
 * 操作系统信息模块：os
 */
let os = require('os')
let path = require('path')
console.log(os.cpus())
console.log(os.totalmem())

console.log(path.extname('c:/a/b/c/d.txt')) // 获取拓展名
