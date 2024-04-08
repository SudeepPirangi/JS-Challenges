var canPlaceFlowers = function (flowerbed, n) {
  let curr = 0;
  while (n && curr <= flowerbed.length - 1) {
    if (!flowerbed[curr - 1] && !flowerbed[curr] && !flowerbed[curr + 1]) {
      flowerbed[curr] = 1;
      n--;
    }
    curr++;
  }
  return n ? false : true;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); // false
console.log(canPlaceFlowers([0, 1, 0], 1)); // false
