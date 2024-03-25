const evaluate = (a, b, op) => {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return 0;
  }
};

const calculate = (exp) => {
  let result = 0;
  const arr = exp.split("");
  const stack = [];
  let i = 0;
  let num = "";
  while (i < arr.length) {
    // console.log(arr[i], num, stack);
    if (arr[i] === ")") {
      if (num.length) {
        stack.push(num);
        num = "";
      }
      const [x, op, y] = stack.splice(stack.length - 3, 3);
      result = evaluate(+x, +y, op);
      if (stack.length) stack.push(result.toString());
      // console.log(x, y, op, result, stack);
    } else if (
      arr[i] === "+" ||
      arr[i] === "-" ||
      arr[i] === "*" ||
      arr[i] === "/"
    ) {
      if (num.length) {
        stack.push(num);
        num = "";
      }
      stack.push(arr[i]);
    } else if (arr[i] !== "(") {
      num += arr[i];
    }
    i++;
  }
  return result;
};

console.log(calculate("(2+(3*5))")); // 17
console.log(calculate("(5*((5*2)+20))")); // 150
console.log(calculate("(300/(5*((5*2)+20)))")); // 2
console.log(calculate("(10+2)"));
