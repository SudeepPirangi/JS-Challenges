// Recursive approach

const max = 20;
let first = 1;
let second = 1;
let fibs = [first, second];
const fibonacci = (first, second) => {
  let next = first + second;
  if (next >= max) return;
  fibs.push(next);
  return fibonacci(second, next);
};
fibonacci(first, second);
console.log("\nRecursive");
console.log(fibs.join(","));

// Closure approach

const outer = (max) => {
  let first = 1;
  let second = 1;
  let fibs = [first, second];
  const fibo = () => {
    let next = first + second;
    if (next >= max) return fibs;
    fibs.push(next);
    first = second;
    second = next;
    return fibo();
  };
  return fibo;
};
let fib90 = outer(90);
let fib20 = outer(20);
let fib50 = outer(50);
console.log("\nClosure");
console.log("fib20", fib20().join(","));
console.log("fib50", fib50().join(","));
console.log("fib90", fib90().join(","));
