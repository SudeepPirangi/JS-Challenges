/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let set1 = new Set([...nums1]);
  let set2 = new Set([...nums2]);
  let uniques = [[], []];
  for (let num of set1) {
    if (!set2.has(num)) uniques[0].push(num);
  }
  for (let num of set2) {
    if (!set1.has(num)) uniques[1].push(num);
  }
  return uniques;
};

console.log(findDifference([1, 2, 3], [2, 4, 6])); // [[1,3],[4,6]]
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2])); // [[3],[]]
