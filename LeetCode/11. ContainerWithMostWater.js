var maxArea = function (height) {
  let [max, l, r] = [0, 0, height.length - 1];
  while (l < r) {
    let area = (r - l) * Math.min(height[l], height[r]);
    // console.log(l, r, height[l], height[r], area);
    max = Math.max(max, area);
    if (height[l] > height[r]) r--;
    else l++;
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
