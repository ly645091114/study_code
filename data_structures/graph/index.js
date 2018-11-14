/**
 * 图测试
 */
const { Graph } = require('./graph.js');
let g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
console.log('深度优先搜索：')
g.dfs(0); // 深度优先搜索

let gh = new Graph(5);
gh.addEdge(0, 1);
gh.addEdge(0, 2);
gh.addEdge(1, 3);
gh.addEdge(2, 4);
gh.showGraph();
console.log('\n广度优先搜索：')
gh.bfs(0); // 广度优先搜索
