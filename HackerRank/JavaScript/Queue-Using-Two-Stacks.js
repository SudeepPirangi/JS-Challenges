/**
 * A queue is an abstract data type that maintains the order in which elements were added to it, allowing the oldest elements to be removed from the front and new elements to be added to the rear. This is called a First-In-First-Out (FIFO) data structure because the first element added to the queue (i.e., the one that has been waiting the longest) is always the first one to be removed.

A basic queue has the following operations:

Enqueue: add a new element to the end of the queue.
Dequeue: remove the element from the front of the queue and return it.
In this challenge, you must first implement a queue using two stacks. Then process q queries, where each query is one of the following 3 types:

1 x: Enqueue element x into the end of the queue.
2: Dequeue the element at the front of the queue.
3: Print the element at the front of the queue.
Input Format

The first line contains a single integer, q, denoting the number of queries.
Each line i of the q subsequent lines contains a single query in the form described in the problem statement above. All three queries start with an integer denoting the query type, but only query 1 is followed by an additional space-separated value, x, denoting the value to be enqueued.

It is guaranteed that a valid answer always exists for each query of type .
Output Format

For each query of type , print the value of the element at the front of the queue on a new line.
 */

function processData(input) {
  // console.log(input);
  const inputsArray = input.split("\n").slice(1);
  const queue = [];
  for (let i = 0; i < inputsArray.length; i++) {
    // console.log(queue.length, queue);
    const [command, value] = inputsArray[i].split(" ");
    switch (command) {
      case "1":
        queue.push(+value);
        break;
      case "2":
        queue.shift(); // removes first element in an array
        break;
      case "3":
        console.log(queue[0]);
        break;
      default:
        break;
    }
  }
}

processData(`10
1 42
2
1 14
3
1 28
3
1 60
1 78
2
2`);
