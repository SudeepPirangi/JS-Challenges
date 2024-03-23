class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.head) {
      node.next = this.head;
    }
    this.head = node;
    return ++this.size;
  }

  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    return ++this.size;
  }

  insertAt(value, index = 0) {
    if (index === 0 || this.isEmpty()) {
      this.prepend(value);
    }
    if (index === this.size) {
      this.add(value);
    }
    if (index > this.size) {
      console.log("Index out of bounds, insertion not possible");
      return null;
    }
    let prev = this.head;
    for (let i = 1; i <= index; i++) {
      if (i === index) {
        const newNode = new Node(value);
        const tempNode = prev.next;
        prev.next = newNode;
        newNode.next = tempNode;
        break;
      }
      prev = prev.next;
      this.size++;
    }
    return this.size;
  }

  delete(value) {
    if (this.isEmpty()) {
      console.log("List is empty!");
      return null;
    }
    if (this.head.data === value) {
      this.head = this.head.next;
    }
    let prev = this.head;
    while (prev.next) {
      if (prev.next.data === value) {
        prev.next = prev.next.next;
      }
      prev = prev.next;
    }
    this.size--;
    console.log(`Deleted ${value}`);
  }

  search(value) {
    if (this.head.data === value) {
      console.log(`Search: ${value} found at 0.`);
      return true;
    }
    let index = 1;
    let curr = this.head;
    while (curr.next) {
      if (curr.next.data === value) {
        console.log(`Search: ${value} found at ${index}.`);
        return true;
      }
      curr = curr.next;
      index++;
    }
    console.log(`Search: ${value} not found.`);
    return false;
  }

  traverse() {
    const items = [];
    let curr = this.head;
    while (curr) {
      items.push(curr.data);
      curr = curr.next;
    }
    console.log(items.length ? items.join(" ") : "List is empty!");
  }

  sort() {
    // TODO: include a sorting algo
  }
}

const list = new LinkedList();

list.add(10);
list.add(20);
list.add(30);

list.traverse();

list.add(40);
list.add(50);

list.traverse();

list.delete(30);
list.delete(40);

list.search(40);
list.search(50);

list.traverse();

list.insertAt(30, 2);
list.traverse();

list.insertAt(40, 3);
list.traverse();
