function birthdayCakeCandles(candles) {
  // Write your code here
  candles = candles.sort((a, b) => b - a);
  let maxes = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === candles[0]) {
      maxes++;
    } else {
      break;
    }
  }
  return maxes;
}

console.log(birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]));
