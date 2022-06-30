function intersection() {
  // write your code here
  let sortedArr = [...arguments].sort((a, b) => a.length > b.length);
  console.log("sorted", sortedArr);
  let commonElements = [];
  for (let i = 0; i < sortedArr[0].length; i++) {
    let common = checkCommon(sortedArr[0][i], sortedArr, 1);
    if (!common) break;
    commonElements.push(common);
  }
  console.log("commons", commonElements);
}

function checkCommon(elem, arr, index) {
  if (index === arr.length) return elem;
  if (arr[index].includes(elem)) {
    return checkCommon(elem, arr, index + 1);
  } else {
    return false;
  }
}

intersection([1, 2, 6, 3], [101, 2, 1, 10, 3], [2, 1, 3], [1, 3]);
