/**
 * We define super digit of an integer x using the following rules:

Given an integer, we need to find the super digit of the integer.

1. If x has only 1 digit, then its super digit is x.
2. Otherwise, the super digit of x is equal to the super digit of the sum of the digits of x.
For example, the super digit of 9875 will be calculated as: 
super_digit(9875) - 9 + 8 + 7 + 5 = 29
super_digit(29) - 2 + 9 = 11
super_digit(11) - 1 + 1 = 2
super_digit(2) - 2
 */

/**
 * p = n k times [9875, 4 => 9875987598759875]
 * @param {number} n
 * @param {number} k
 * return the super digit of k times n concatenated
 */

function sumOfDigits(stringNum) {
  const sum = stringNum.split("").reduce((acc, value) => acc + +value, 0);
  return sum / 10 > 1 ? sumOfDigits(`${sum}`) : sum;
}

function superDigit(n, k) {
  // Write your code here
  const prod = sumOfDigits(n) * k;
  return prod >= 10 ? sumOfDigits(`${prod}`) : prod;
}

console.log(superDigit("9875", 4));
console.log(superDigit("9875", 10000));
