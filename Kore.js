// Find factorial recursively
const factorial = (num) => {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

console.log("5 factorial - ", factorial(5));
console.log("6 factorial - ", factorial(6));
console.log("12 factorial - ", factorial(12));

// Sort an array of 0s and 1s

const input1 = [0, 1, 0, 0, 1, 1, 0];
const input2 = [0, 0, 0, 0, 1, 1, 1];
const input3 = [1, 1, 1, 1, 1, 0, 0];
const input4 = [1, 0, 1, 0, 1, 0, 1];

const sortArray = (arr) => {
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    if (arr[l] && !arr[r]) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
    }
    if (!arr[l]) l++;
    if (arr[r]) r--;
  }
  return arr;
};

console.log(input1.join(" ") + " ==> " + sortArray(input1).join(" "));
console.log(input2.join(" ") + " ==> " + sortArray(input2).join(" "));
console.log(input3.join(" ") + " ==> " + sortArray(input3).join(" "));
console.log(input4.join(" ") + " ==> " + sortArray(input4).join(" "));
