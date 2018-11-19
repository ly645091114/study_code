/**
 * 图：由 边 的集合以及 顶点 的集合组成
 * 如中国地图，每个城市都有道路相连。地图，就是一种图。每个城市看作一个顶点，连接城市的道路就是边。
 * 边由（v1, v2）定义，v1 和 v2分别是图中的两个顶点。顶点也有权重，也称为成本。如果一个图的顶点对是有序的，则可以称之为有向图。
 * 图中一系列顶点构成路径，路径中所有的顶点都由边链接。路径的长度用路径中第一个顶点到最后一个顶点之间边的数量表示。指向自身的顶点组成的路径称为环，环的长度为0.
 * 圈：至少由一条边的路径，且路径的第一个顶点和最后一个顶点相同。无论是有向图还是无向图，只要是没有重复边或重复顶点的圈，就是一个简单圈。
 * 图 构造方法
 * @param { Number } v 图的顶点数
 */
function Graph (v) {
  this.vertices = v;
  this.vertexList = []; // 将各个顶点关联到一个符号
  this.edges = 0; // 图的边数
  this.adj = []; // 邻接表
  for (let i = 0; i < this.vertices; i++) { // for 循环为数组中每个元素添加一个子数组来存储所有的相邻顶点，并将所有元素初始化为空字符串。
    this.adj[i] = [];
    this.adj[i].push('');
  }
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.dfs = dfs;
  this.bfs= bfs;
  this.marked = [];
  this.edgeTo = []; // 查找最短路径
  for (let i = 0; i < this.vertices; i++) {
    this.marked[i] = false;
  }
  this.pathTo = pathTo;
  this.hasPathTo = hasPathTo;
  this.topSort = topSort;
  this.topSortHelper = topSortHelper;
  this.newShowGraph = newShowGraph;
}

/**
 * 添加边数
 * 调用这个函数并传入顶点A 和 顶点B时，函数会先查找顶点A 的邻接表，将顶点B 添加到列表中，然后再查找顶点B 的邻接表，将顶点A 添加到列表中
 * 最后，这个函数会将边数加1
 * @param { Number } v 顶点1
 * @param { Number } w 顶点2
 */
function addEdge (v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}

/**
 * 打印所有顶点及其相邻顶点列表的方式来显示图
 */
function showGraph () {
  this.adj.forEach((items, index) => {
    let str = `${index} -> `;
    items.forEach((item) => {
      str += `${item} `;
    })
    console.log(str);
  })
}

/**
 * 深度优先搜索函数
 * 访问一个没有访问过的顶点，将它标记为已访问，再递归地去访问在初始顶点的邻接表中其他没有访问过的顶点
 * @param { Number } v 搜索顶点
 */
function dfs (v) {
  this.marked[v] = true;
  if (this.adj[v] !== undefined) {
    console.log(`当前顶点：${v}`);
  }
  for (let w in this.adj[v]) {
    let curVertice = this.adj[v][w];
    if (!this.marked[curVertice]) {
      this.dfs(curVertice);
    }
  }
}

/**
 * 广度优先搜索函数
 * 1.查找与当前顶点相邻的未访问顶点，将其添加到已访问顶点的列表及队列中
 * 2.从图中取出下一个顶点 v ，添加到已访问的顶点列表
 * 3.将所有与 v 相邻的未访问顶点添加到队列
 * @param { Number } s 搜索顶点
 */
function bfs (s) {
  let queue = [];
  this.marked[s] = true;
  queue.push(s); // 添加到队尾
  while (queue.length > 0) {
    let v = queue.shift(); // 从队首移除
    if (this.adj[v] !== undefined) {
      console.log(`当前顶点：${v}`);
    }
    for (let w in this.adj[v]) {
      let curVertice = this.adj[v][w];
      if (!this.marked[curVertice]) {
        this.edgeTo[curVertice] = v;
        this.marked[curVertice] = true;
        queue.push(curVertice);
      }
    }
  }
}

/**
 * 创建一个栈用来存储与指定顶点有共边的所有顶点
 * @param { Number } v 指定顶点
 * @return { Array } 路径
 */
function pathTo (v) {
  let source = 0;
  if (!this.hasPathTo(v)) {
    return undefined;
  }
  let path = [];
  for (let i = v; i !== source; i = this.edgeTo[i]) {
    path.push(i);
  }
  path.push(source);
  return path;
}

/**
 * 是否访问到顶点
 */
function hasPathTo (v) {
  return this.marked[v];
}

/**
 * 拓扑排序
 * 优先级约束调度，例如只有先上过英语写作1，才能上英语写作2
 * 构建一个方法并调用一个辅助函数topSortHelper(), 然后显示排序好的顶点列表。
 */
function topSort () {
  let stack = [];
  let visited = [];
  for (let i = 0; i < this.vertices; i++) {
    visited[i] = false;
    this.topSortHelper(i, visited, stack);
  }
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] !== undefined && stack[i] !== false) {
      console.log(this.vertexList[stack[i]]);
    }
  }
}

/**
 * 构建一个方法将当前顶点标记为已访问，然后递归访问当前顶点邻接表中的每一个相邻顶点，标记这些顶点为已访问。最后，将当前顶点入栈
 */
function topSortHelper(v, visited, stack) {
  visited[v] = true;
  for (let w in this.adj[v]) {
    let item = this.adj[v][w];
    if (!visited[item]) {
      this.topSortHelper(visited[item], visited, stack);
    }
  }
  stack.push(v);
}

/**
 * 构建一个新的展示方法
 */
function newShowGraph () {
  let visited = [];
  for (let i = 0; i < this.vertices; ++i) {
    let str = `${this.vertexList[i]} -> `;
    visited.push(this.vertexList[i]);
    for (let j = 0; j < this.vertices; ++j) {
      if (this.adj[i][j] !== undefined) {
        if (visited.indexOf(this.vertexList[j]) < 0) {
          str += `${this.vertexList[j]} `;
        }
      }
    }
    console.log(str);
    visited.pop();
  }
}

exports.Graph = Graph;
