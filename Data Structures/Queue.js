class Queue {
  constructor(initial = []) {
    this.queue = initial;
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  push(value) {
    this.queue = [...this.queue, value];
  }
  pop() {
    return this.queue.shift();
  }
  get(index) {
    return this.queue[index] ? this.queue[index] : null;
  }
  print() {
    console.log(this.queue.join(" "));
  }
}

const queue = new Queue();

queue.push(10);
queue.push(20);
queue.push(30);
queue.push(40);

queue.print();

console.log(`Pop ${queue.pop()} from the queue.`);
console.log(`Pop ${queue.pop()} from the queue.`);

queue.print();

queue.push(50);

queue.print();

console.log(`Value at ${1} -> ${queue.get(1)}`);
