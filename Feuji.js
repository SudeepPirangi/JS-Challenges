// 1-(1/3)+(1/5)-(1/7)+(1/9)
const printSeries = (n) => {
  let series = "";
  let prev = 1;
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      series += `${i}`;
    } else {
      prev += 2;
      series += i % 2 ? `+(1/${prev})` : `-(1/${prev})`;
    }
  }
  console.log(series);
};

printSeries(20);

// 0, 1, 1, 2, 4, 7, 13, 24 (3 consec);
const consecutiveSum = (n) => {
  let series = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) series.push(0);
    else if (i === 1 || i === 2) series.push(1);
    else series.push(series[i - 1] + series[i - 2] + series[i - 3]);
  }
  console.log(series.join(" "));
};

consecutiveSum(20);
