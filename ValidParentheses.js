function validParentheses(parens) {
  // Write your code here
  let arr = parens.split("");
  let stack = [];
  if (arr[0] === ")") return false;
  for (let i = 0; i < arr.length; i++) {
    let par = arr[i];
    if (par === "(") {
      stack.push(par);
    } else {
      //console.log(par, stack, stack.length)
      if (stack.length === 0) {
        return false;
      } else {
        let pop = stack.pop();
        if (pop !== "(") return false;
      }
    }
  }
  if (stack.length) return false;
  return true;
}

console.log(validParentheses("())"));
console.log(validParentheses("()())"));
console.log(validParentheses("()))"));
console.log(validParentheses("(())((()())())"));
