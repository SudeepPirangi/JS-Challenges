const os = require("os");
// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
  stdin_input += input; // Reading input from STDIN
});

process.stdin.on("end", function () {
  main(stdin_input);
});

function main(input) {
  let inputs = input
    .split(os.EOL)[1]
    .split(" ")
    .map((num) => +num);
  // process.stdout.write("Hi, " + newInput + ".\n");
  console.log(getFizzBuzz(inputs));
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail
function getFizzBuzz(inputs) {
  let fizzy = "";
  for (let i = 0; i < inputs.length; i++) {
    fizzy += getFizz(inputs[i]) + os.EOL;
  }
  function getFizz(num) {
    let fizzy = [];
    for (let i = 1; i <= num; i++) {
      let subFizzy = "";
      if (i % 3 === 0) subFizzy += "Fizz";
      if (i % 5 === 0) subFizzy += "Buzz";
      if (subFizzy.length === 0) subFizzy = i;
      fizzy.push(subFizzy);
    }
    return fizzy.join(os.EOL);
  }
  return fizzy;
}
