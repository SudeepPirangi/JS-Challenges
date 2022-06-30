/* post data */
const router = require("express").router();
app.post("/xyz", (req, res, next) => {
  let body = req.body;
  console.log("firstname", body.firstname);
  console.log("lastname", body.lastname);
});

/*promise - map & reduce */
let promise = new Promise((resolve, reject) => {
  let newArray = ["1", "2", "3", "4"].map((char) => {
    return parseInt(char) * 5;
  });
  console.log("new", newArray);
  let total = newArray.reduce((cumul, num) => (cumul += num), 0);
  console.log("total", total);
  resolve(total);
});

promise.then((data) => console.log(data)).catch((err) => console.log("error", err));

/* sort-array */
let arr = [10, 50, 30, 40];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

console.log("sorted", arr);
