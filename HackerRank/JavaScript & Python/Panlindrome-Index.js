/**
 * Check if a string can be a palindrome string by removing any character from the string
 * there could be multiple chars that would make it palindrome but one is enough
 * return the index of the character, on popping which we could make the string a palindrome
 * if the given string is palindrome return -1
 * in anyway if the string cannot be a palindrome return -1
 */

function palindrome(str) {
  var len = str.length;
  var mid = Math.floor(len / 2);

  for (var i = 0; i < mid; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }

  return true;
}

function palindromeIndex(str) {
  let index = -1;

  if (palindrome(str)) {
    return index;
  }
  var result = -1;

  for (var j = 0; j < str.length / 2; j++) {
    if (str[j] !== str[str.length - 1 - j]) {
      if (
        str[j + 1] === str[str.length - 1 - j] &&
        palindrome(str.slice(0, j) + str.slice(j + 1))
      ) {
        result = j;
      } else if (
        str[j] === str[str.length - 2 - j] &&
        palindrome(str.slice(0, str.length - 1 - j) + str.slice(str.length - j))
      ) {
        result = str.length - 1 - j;
      } else {
        result = -1;
      }

      break;
    }
  }

  return result;
}

// console.log(palindromeIndex("quyjjdcgsvvsgcdjjyq"));
console.log(
  palindromeIndex("kjowoemiduaaxasnqghxbxkiccikxbxhgqnsaxaaudimeowojk")
);

console.log(palindromeIndex("baabu"));
console.log(palindromeIndex("abaaa"));
console.log(palindromeIndex("sudeep"));
console.log(palindromeIndex("level"));
console.log(palindromeIndex("adachada"));
console.log(palindromeIndex("hippish"));
