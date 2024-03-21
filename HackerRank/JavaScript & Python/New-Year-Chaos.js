/**
 * It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from 1 to n. Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.

Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

Example
q = [1, 2, 3, 4, 5, 6, 7, 8]
If person 5 bribes person 4, the queue will look like this: 1, 2, 3, 5, 4, 6, 7, 8. Only 1 bribe is required. Print 1.
q= [4, 1, 2, 3]
Person 4 had to bribe 3 people to get to the current position. Print Too chaotic.

Function Description

Complete the function minimumBribes in the editor below.
minimumBribes has the following parameter(s):
int q[n]: the positions of the people after all bribes
Returns
No value is returned. Print the minimum number of bribes necessary or Too chaotic if someone has bribed more than 2 people.
 */

function minimumBribes1(q) {
  // Write your code here
  let bribes = 0;
  let flags = [];
  for (let i = 0; i < q.length; i++) {
    flags.push(0);
  }
  for (let i = 0; i < q.length; i++) {
    let chaosFlag = false;
    if (q[i] !== i + 1) {
      let pos = q.indexOf(i + 1);
      let diff = pos - i;
      while (diff > 0) {
        if (flags[q[i] - 1] === 2) {
          chaosFlag = true;
          break;
        }
        flags[q[pos - 1] - 1]++;
        // console.log(pos, diff, q[pos - 1], q[pos], flags);
        [q[pos - 1], q[pos]] = [q[pos], q[pos - 1]];
        bribes++;
        diff--;
        pos--;
        // console.log(pos, q[pos], bribes, diff);
      }
      if (chaosFlag) {
        console.log("Too chaotic");
        break;
      }
    }
  }
  if (bribes > 0) {
    console.log(bribes);
  }
}

function minimumBribes(q) {
  let bribes = 0;
  let p1 = 1;
  let p2 = 2;
  let p3 = 3;
  for (let i = 0; i < q.length; i++) {
    if (q[i] === p1) {
      [p1, p2, p3] = [p2, p3, ++p3];
    } else if (q[i] === p2) {
      bribes++;
      [p2, p3] = [p3, ++p3];
    } else if (q[i] === p3) {
      bribes += 2;
      p3++;
    } else {
      console.log("Too chaotic");
      return null;
    }
  }
  console.log(bribes);
}

// Note: Not my code again, I had a long solution minimumBribes1()
// where I swapped numbers and got a count of each player and their bribes  which was not needed
// so sicking to this short logic.

minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]); // 7
minimumBribes([1, 2, 3, 5, 4, 6, 7, 8]); // 1
minimumBribes([4, 1, 2, 3]); // Too chaotic
minimumBribes([2, 1, 5, 3, 4]); // 3
minimumBribes([2, 5, 1, 3, 4]); // Too chaotic
