from collections import Counter
import heapq

def rearrange(s):
  
  count = Counter(s)
  max = [[-cc, el] for el, cc in count.items()]
  heapq.heapify(max)

  prev = None
  result = ""
  while max or prev:
    if prev and not max:
      return ""

    cc, el = heapq.heappop(max)
    # print(cc, el)
    result += el
    cc += 1
    if prev:
      heapq.heappush(max, prev)
      prev = None
    if cc != 0:
      prev = [cc, el]

  return result

# print(rearrange("aab"))

# print(rearrange("aaab"))

print(rearrange("aaabbbcccdddeee")) # abcdeabcdeabcde