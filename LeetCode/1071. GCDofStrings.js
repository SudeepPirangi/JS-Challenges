var gcdOfStrings = function (str1, str2) {
  let min = str1.length - str2.length > 0 ? str2 : str2;
  for (let i = min.length; i >= 0; i--) {
    const isDivisor = (len) => {
      if (str1.length % i !== 0 || str2.length % i !== 0) return false;
      let fact1 = Math.floor(str1.length / len);
      let fact2 = Math.floor(str2.length / len);
      let newstr1 = [...new Array(fact1).fill(min.slice(0, len))].join("");
      let newstr2 = [...new Array(fact2).fill(min.slice(0, len))].join("");
      // console.log(newstr1, newstr2);
      if (newstr1 === str1 && newstr2 === str2) {
        return true;
      }
    };
    if (isDivisor(i)) return min.slice(0, i);
  }
  return "";
};

console.log(gcdOfStrings("ABCABC", "ABC"));
console.log(gcdOfStrings("ABABAB", "AB"));
