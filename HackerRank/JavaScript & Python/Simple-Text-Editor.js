/**
 * Implement a simple text editor. The editor initially contains an empty string, S. Perform Q operations of the following  types:

1. append W- Append string W to the end of S.
2. delete K- Delete the last K characters of S.
3. print K- Print the Kth character of S.
4. undo - Undo the last (not previously undone) operation of type 1 or 2, reverting S to the state it was in prior to that operation.

Example:
S = 'abcde'
ops = ['1 fg', '3, 6', '2 5', '4', '3 7', '4', '3 4']

operation
index   S       ops[index]  explanation
-----   ------  ----------  -----------
0       abcde   1 fg        append fg
1       abcdefg 3 6         print the 6th letter - f
2       abcdefg 2 5         delete the last 5 letters
3       ab      4           undo the last operation, index 2
4       abcdefg 3 7         print the 7th characgter - g
5       abcdefg 4           undo the last operation, index 0
6       abcde   3 4         print the 4th character - d

The results should be printed as:
f
g
d
 */

function processData(input) {
  let S = "";
  const prev = [];
  const inputArray = input.split("\n");
  for (let i = 1; i < inputArray.length; i++) {
    const [command, value] = inputArray[i].split(" ");
    switch (command) {
      case "1": {
        prev.push(S);
        S += value;
        break;
      }
      case "2": {
        prev.push(S);
        S = S.slice(0, S.length - +value);
        break;
      }
      case "3":
        console.log(S.charAt(+value - 1));
        break;
      case "4":
        S = prev.splice(prev.length - 1, 1)[0];
        break;
      default:
        break;
    }
    // console.log(prev, S, command, value);
  }
}

processData(`7
1 fg
3 6
2 5
4
3 7
4
3 4`);

// S = "abcde";
// processData(`8
// 1 abc
// 3 3
// 2 3
// 1 xy
// 3 2
// 4
// 4
// 3 1`);
