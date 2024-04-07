// var compress = function (chars) {
//   let s = "";
//   let count = 0;
//   let idx = 0;
//   for (let i = 0; i < chars.length; i++) {
//     count++;
//     if (chars[i] !== chars[i + 1]) {
//       let temp = chars[i];
//       chars[idx] = temp;
//       if (count === 1) {
//         s += temp;
//       } else {
//         s += temp + count;
//         count
//           .toString()
//           .split("")
//           .forEach((num) => {
//             chars[++idx] = num;
//           });
//       }
//       count = 0;
//       idx++;
//     }
//   }
//   // console.log(s, chars);
//   return s.length;
// };

var compress = function (chars) {
  let s = "";
  let count = 0;
  for (let i = 0; i < chars.length; i++) {
    count++;
    if (chars[i] !== chars[i + 1]) {
      s += count === 1 ? chars[i] : chars[i] + count;
      count = 0;
    }
  }
  for (let i = 0; i < s.length; i++) {
    chars[i] = s[i];
  }
  console.log(s, chars);
  return s.length;
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"])); // 6
console.log(compress(["a"])); // 1
console.log(
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
); // 4
