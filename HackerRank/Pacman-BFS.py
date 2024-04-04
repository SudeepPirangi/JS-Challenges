from collections import deque

def maze_search (input, start):
  path = []

  queue = deque([start])
  visited = [start]
#   print(queue, visited, start not in visited)
  while queue:
    (i, j) = queue.popleft()
    # print('while', queue, visited, i, j)
    if input[i][j] == '.':
        print("Found end point at position", i, j)
        return True
    top = (i - 1, j)
    bottom = (i + 1, j)
    left = (i, j - 1)
    right = (i, j + 1)
    if top not in visited and input[top[0]][top[1]] != "%":
        # print(input[top[0]][top[1]])
        visited.append(top)
        queue.append(top)
    if bottom not in visited and input[bottom[0]][bottom[1]] != "%":
        # print(bottom, input[bottom[0]][bottom[1]])
        visited.append(bottom)
        queue.append(bottom)
    if left not in visited and input[left[0]][left[1]] != "%":
        # print(left, input[left[0]][left[1]])
        visited.append(left)
        queue.append(left)
    if right not in visited and input[right[0]][right[1]] != "%":
        # print(right, input[right[0]][right[1]])
        visited.append(right)
        queue.append(right)
  return False





input = [
  ['%', '%', '%', '%', '%', '%', '%', '%', '%', '%',],
  ['%', '%', '%', '%', '%', '%', '%', '%', '%', '%',],
  ['%', '%', '%', '%', '%', '%', '%', '%', '%', '%',],
  ['%', '%', '%', '%', 'P', ' ', ' ', ' ', '%', '%',],
  ['%', '%', '%', '%', '%', '%', '%', ' ', '%', '%',],
  ['%', '%', '%', '%', '%', '%', ' ', ' ', '%', '%',],
  ['%', '%', '%', '%', '%', '%', ' ', '%', '%', '%',],
  ['%', '%', '%', '%', '%', ' ', ' ', '%', '%', '%',],
  ['%', '.', ' ', ' ', ' ', ' ', '%', '%', '%', '%',],
  ['%', '%', '%', '%', '%', '%', '%', '%', '%', '%',]
]

print(maze_search(input, (3, 4)))