/**
 * Calulate the distance between the given nodes of undirectional graph given its edges
 * The distance of each edge is given 6 units
 * return an array of the distance to each node except the starting node
 * return -1 if there is no connection exists.
 */
// n = nodes
// m = edges
// s = start

function bfs(n, m, edges, s) {
  // Write your code here
  const nodes = new Array(n);
  const distances = new Array(n).fill(-1);
  console.log(n, m, edges, s);
  const nodeMap = {};
  for (const [start, end] of edges) {
    nodeMap[start] = nodeMap[start] ? [...nodeMap[start], end] : [end];
  }
  console.log(nodeMap);
  const visited = [s];
  while (visited.length) {
    const node = visited.shift();
    if (nodeMap[node]) {
      const children = nodeMap[node];
      for (const child of children) {
        visited.push(child);
        const distance = distances[child - 1];
        distances[child - 1] = distance < 0 ? 6 : distance + 6;
      }
      console.log(node, children, distances);
    }
  }
  distances.splice(s - 1, 1);
  return distances;
}

console.log(
  bfs(
    4,
    2,
    [
      [1, 2],
      [1, 3],
    ],
    1
  )
);
console.log(bfs(3, 1, [[2, 3]], 2));
console.log(
  bfs(
    5,
    3,
    [
      [1, 2],
      [1, 3],
      [3, 4],
    ],
    1
  )
);
console.log(
  bfs(
    10,
    6,
    [
      [3, 1],
      [10, 1],
      [10, 1],
      [3, 1],
      [1, 8],
      [5, 2],
    ],
    3
  )
);
