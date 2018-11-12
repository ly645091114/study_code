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
  this.edges = 0; // 图的边数
  this.adj = []; // 邻接表
  for (let i = 0; i < this.vertices; i++) { // for 循环为数组中每个元素添加一个子数组来存储所有的相邻顶点，并将所有元素初始化为空字符串。
    this.adj[i] = [];
    this.adj[i].push('');
  }
  this.addEdge = addEdge;
  this.showGraph = showGraph;
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

exports.Graph = Graph;
