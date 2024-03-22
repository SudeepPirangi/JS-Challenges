class Stack {
  constructor(initial = []) {
    this.stack = initial;
  }
  isEmpty = () => {
    return this.stack.length === 0;
  };
  push = (value) => {
    console.log(`Pushing ${value} to the stack`);
    this.stack = [...this.stack, value];
  };
  pop = () => {
    if (this.isEmpty()) return null;
    return this.stack.splice(this.stack.length - 1, 1);
  };
  print = () => {
    for (let each of this.stack) {
      console.log(each);
    }
  };
  get = (index) => {
    return this.stack[index] ? this.stack[index] : null;
  };
}

const stack = new Stack();

console.log(stack.isEmpty() ? "Stack is empty" : "Stack is not empty");

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

stack.print();

console.log(`Pop ${stack.pop()} from stack.`);
console.log(`Pop ${stack.pop()} from stack.`);

stack.print();

stack.push(50);

stack.print();
