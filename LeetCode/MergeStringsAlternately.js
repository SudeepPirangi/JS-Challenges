var mergeAlternately = function (word1, word2) {
  let str = "";
  const [min, max] =
    word1.length - word2.length < 0 ? [word1, word2] : [word2, word1];
  for (let i = 0; i < min.length; i++) {
    str += word1[i] + word2[i];
  }
  // console.log(min, max, max.slice(min.length, max.length));
  return str + max.slice(min.length, max.length);
};

console.log(mergeAlternately("ab", "pqrs"));
