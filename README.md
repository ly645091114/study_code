# study_code
自我业余提升案例代码

## 项目描述
作为刚毕业的应届生，一年的前端实习经历；以及到目前为止的工作经历让我发现在开发中遇到的不足： 
(2017年7月10日 - 2018年10月26日 以上为本人从 `实习` 到 `创建` 该项目的时间)

0. 如何用最少的代码实现功能；
0. 思考什么样的场景需要独立封装成可复用的方法；
0. 这个方法之后的可拓展性如何；
0. 怎样写出优美，可维护，易懂的代码；
- 诸如此类的问题，让我有了想要自我提升的想法。
- 针对自己现有的不足，以及自己想发展的方向制定了一个提升的方案，本项目只为记录一些对应知识点可能用到的场景。

### 构建该项目原因：

0. 对知识点的记录；
0. 对自我提升的监督（希望每天都有知识点的补充）；
0. 对知识的分享（每个方法都会有注释，以及使用场景）；

## 提升方案
由于工作原因，可能每天只有2-3小时时间学习，以下是提升方案；

0. 数据结构与算法 参考书籍`《数据结构与算法Javascript描述》`
0. ECMAScript 6 参考书籍`《ECMAScript 6入门》`
0. 代码优化 参考书籍`《Javascript语言精粹》`、`《高性能Javascript》`
0. 前端架构 参考书籍`《前端架构设计》`
0. 服务端开发 参考书籍`《深入浅出node.js》`

## 项目环境
本项目的开发环境基于
- [node.js](https://nodejs.org/en/)

## 目录结构
有详细目录结构的代表本人的学习进度
- `study_code`
  - `data_structures` 数据结构与算法
    - `array` 数组
      - `array.js` 数组基础
      - `objectarray.js` 数组对象
      - `week.js` 数组应用 （周天气）
    - `list` 列表
      - `borrow.js` 列表应用 （影碟列表）
      - `customer.js` 列表应用 （影碟租借）
      - `films.txt` 影碟列表文本
      - `index.js` 列表功能测试
      - `list.js` 列表基础
    - `llist` 链表
      - `index.js` 链表功能测试
      - `llist.js` 链表基础
    - `queue` 队列
      - `dance.js` 队列应用 （方块舞的舞伴分配）
      - `deque.js` 双向队列基础
      - `index.js` 队列功能测试
      - `member-list.txt` 成员文本
      - `palindrome.js` 双向队列应用 （回文判断）
      - `priority-queue.js` 队列应用 （优先队列）
      - `queue.js` 队列基础
      - `sort.js` 队列应用 （基数排序）
    - `stack` 栈
      - `brackets.js` 栈应用 （算术表达式中的括号是否匹配）
      - `index.js` 栈功能测试
      - `number-system.js` 栈应用 （数制转换）
      - `palindrome.js` 栈应用 （回文判断）
      - `recursion.ks` 栈应用 （阶乘）
      - `stack.js` 栈基础
  - `ES6`
  - `node`
  - `README.md`

## 执行文件

- 本项目基于 `node` 环境 测试执行代码均在 对应文件夹的 `index.js` 文件中
- `cd` 对应文件夹 `node` 该文件夹 `index.js` 文件即可看到运行结果
```
cd /data_structures/stack
node ./index.js
```