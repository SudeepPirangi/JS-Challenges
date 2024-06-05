/**
 * Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.
 *
 * Original alphabet - abcdefghijklmnopqrstuvwxyz
 * Alphabet rotated +3 - defghijklmnopqrstuvwxyzabc
 */

const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function caesarCipher(s, k) {
  // Write your code here
  const result = s.split("").map((char) => {
    const lowerIndex = lower.indexOf(char);
    const upperIndex = upper.indexOf(char);
    if (lowerIndex >= 0) {
      const newChar = lower.charAt(lowerIndex + k);
      return newChar ? newChar : lower.charAt((lowerIndex + k) % 26);
    }
    if (upperIndex >= 0) {
      const newChar = upper.charAt(upperIndex + k);
      return newChar ? newChar : upper.charAt((upperIndex + k) % 26);
    }
    return char;
  });

  return result.join("");
}

console.log(caesarCipher("xyz", 2));
console.log(caesarCipher("There's-a-starman-waiting-in-the-sky", 3));
console.log(caesarCipher("middle-Outz", 2));
console.log(caesarCipher("abcdefghijklmnopqrstuvwxyz", 3));
console.log(caesarCipher("Sudeep-is-a-good-developer", 0));
