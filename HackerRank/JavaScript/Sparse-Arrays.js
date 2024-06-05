function matchingStrings(stringList, queries) {
  // Write your code here
  console.log(stringList, queries);
  const result = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    let counter = 0;
    for (let j = 0; j < stringList.length; j++) {
      console.log(stringList[j], queries[i], stringList[j] == queries[i]);
      if (stringList[j] === queries[i]) counter++;
    }
    result[i] = counter;
  }
  return result;
}

console.log(
  matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"])
);
