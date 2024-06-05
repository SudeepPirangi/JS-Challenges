// Example usage:
const obj1 = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    zip: "10001",
  },
  hobbies: ["reading", "coding"],
};

const obj2 = {
  age: 31,
  address: {
    zip: "10002",
    street: "123 Main St",
  },
  hobbies: ["traveling"],
};

/* let merged = Object.assign({}, obj1); */
const mergeObjects = (merged, second) => {
  let copy = Object.assign({}, merged);

  for (let [key, val] of Object.entries(second)) {
    if (copy[key]) {
      if (typeof val !== "object" || Array.isArray(val)) {
        copy[key] = val;
      } else {
        copy[key] = mergeObjects(copy[key], val);
      }
    } else {
      copy[key] = val;
    }
  }

  return copy;
};
// merged = { ...obj1, ...mergeObjects(merged, obj2) };
/* console.log("merged object", mergeObjects(obj1, obj2)); */

// Output
// {
//     name: 'John',
//     age: 31,
//     address: {
//         city: 'New York',
//         zip: '10002',
//         street: '123 Main St'
//     },
//     hobbies: ['traveling']
// }

/* Ques 2: GEEKSFORGEEKS */

let input = "GEEKSFORGEEKS";
let substrings = [];
let max = 0;

/* const getDistinct = (input) => [...new Set(input.split(''))].join(''); */

for (let i = 0; i < input.length - 1; i++) {
  let str = input.substr(i);
  let set = new Set();
  let sub = "";

  for (let j = 1; j < str.length - 1; j++) {
    if (set.has(str[j])) {
      let subSize = sub.length;
      if (subSize > max) {
        max = subSize;
        substrings = [sub];
      } else if (subSize === max) {
        substrings.push(sub);
      }
      break;
    }
    set.add(str[j]);
    sub += str[j];
  }
}

console.log("longest substrings - " + substrings.join(" "));
/* console.log(getDistinct(input)); */
