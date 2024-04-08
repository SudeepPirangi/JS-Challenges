var reverseVowels = function (s) {
  const arr = s.split("");
  let head = 0;
  let tail = s.length - 1;
  while (head < tail) {
    const isVowel = (char) =>
      ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].includes(char);
    let isHead = isVowel(arr[head]);
    let isTail = isVowel(arr[tail]);
    if (isHead && isTail) {
      [arr[head], arr[tail]] = [arr[tail], arr[head]];
      head++;
      tail--;
    } else if (!isHead) {
      head++;
    } else if (!isTail) {
      tail--;
    }
  }
  return arr.join("");
};

console.log(reverseVowels("hello")); // holle
console.log(reverseVowels("leetcode")); // leotcede
