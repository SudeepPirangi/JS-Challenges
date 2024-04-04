let inputString = "The quick brown fox jumps over the lazy red dog.".split("");

// inputString = "bbbbtttttttt";

const compare = "abt".split("");
console.log(compare, compare.length);
let counter = [];

for (let i = 0; i < compare.length; i++) {
  let count = 0;
  // console.log(compare[i]);
  for (let j = 0; j < inputString.length; j++) {
    // console.log(inputString[j]);
    if (inputString[j] === compare[i]) count++;
  }
  counter.push(count);
}

console.log(counter);
