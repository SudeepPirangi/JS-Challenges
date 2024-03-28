function staircase(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    console.log(
      [...new Array(n - i).fill(" "), ...new Array(i).fill("#")].join("")
    );
  }
}

staircase(4);

staircase(12);
