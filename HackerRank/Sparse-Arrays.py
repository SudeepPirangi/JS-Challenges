def matchingStrings(stringList, queries):
  result = []
  for i in range(len(queries)):
    result.append(stringList.count(queries[i]))
  return result


print(matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"]))
