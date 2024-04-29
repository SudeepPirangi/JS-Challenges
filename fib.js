const bruteForceFibonacci = (n) => {
  let a = 0;
  let b = 1;
  let i = 0;
  while (i <= n) {
    if (i === 0 || i === 1) {
      console.log(i);
    } else {
      [a, b] = [b, a + b];
      console.log(b);
    }
    i++;
  }
};

const fibRec = (n) => {
  if (n <= 1) {
    return n;
  }
  return fibRec(n - 1) + fibRec(n - 2);
};

const printFib = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(fibRec(i));
  }
};

bruteForceFibonacci(20);
printFib(20);
