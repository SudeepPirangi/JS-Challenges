# /**
#  * Calulate the distance between the given nodes of undirectional graph given its edges
#  * The distance of each edge is given 6 units
#  * return an array of the distance to each node except the starting node
#  * return -1 if there is no connection exists.
#  */
# // n = nodes
# // m = edges
# // s = start

from collections import deque

def bfs(n, m, edges, s):
  # Write your code here
  graph = [[] for i in range(n + 1)]
  for start, end in edges:
    graph[start].append(end)
    graph[end].append(start)
  distances = [-1] * (n + 1)
  visited = [False] * (n + 1)
  visited[s] = True
  distances[s] = 0
  q = deque()
  q.append((s, 0))
  while q:
    node, dist = q.popleft()
    for i in graph[node]:
      if not visited[i]:
        visited[i] = True
        q.append((i, dist + 6))
        distances[i] = dist + 6
  distances.remove(0)
  return distances[1:]

# JavaScript has been giving timeout for some inputs

# print(bfs( 4, 2, [[1, 2],[1, 3], ], 1))
# print(bfs(3, 1, [[2, 3]], 2))
# print(bfs(5, 3, [[1, 2],[1, 3],[3, 4]], 1))
print(bfs(10, 6, [[3, 1], [10, 1], [10, 1], [3, 1], [1, 8], [5, 2]], 3))
