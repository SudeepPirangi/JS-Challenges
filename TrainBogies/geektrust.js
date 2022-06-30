const fs = require("fs");

const { TRAIN_A_IDENTIFIER, TRAIN_B_IDENTIFIER, TRAIN_C_IDENTIFIER } = require("./constants");
const { extractBogies, getBogiesAtHyd, getMergedBogies } = require("./helpers");

const filename = process.argv[2];

try {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) throw err;
    var inputLines = data.toString().split("\n");

    var lines2 = {};
    data
      .toString()
      .split("\n")
      .forEach((train) => {
        let each = train.split(" ");
        let each2 = train.split(" ");
        each2.splice(0, 2).map((bogie) => bogie.substring(0, 3));
        lines2[each[0]] = each2;
      });
    let xyz = [];
    for (var x in lines2) {
      xyz.push(...lines2[x]);
    }
    console.log("xyz", xyz);

    let trainA = extractBogies(inputLines[0]);
    let trainB = extractBogies(inputLines[1]);
    let trainC = extractBogies(inputLines[2]);

    let trainA_hyd = getBogiesAtHyd(TRAIN_A_IDENTIFIER, trainA);
    let trainB_hyd = getBogiesAtHyd(TRAIN_B_IDENTIFIER, trainB);
    let trainC_hyd = getBogiesAtHyd(TRAIN_C_IDENTIFIER, trainC);

    // console.log(0)

    let trainABC_hyd = getMergedBogies(trainA_hyd, trainB_hyd, trainC_hyd);

    console.log(`ARRIVAL TRAIN_A ENGINE ${trainA_hyd.join(" ")}`);
    console.log(`ARRIVAL TRAIN_B ENGINE ${trainB_hyd.join(" ")}`);
    console.log(`ARRIVAL TRAIN_C ENGINE ${trainC_hyd.join(" ")}`);
    console.log(`DEPARTURE TRAIN_ABC ENGINE ENGINE ${trainABC_hyd.join(" ")}`);
  });
} catch (error) {
  console.log("Error", error);
}
