/** 
 * Suppose there is a circle. There are petrol pumps on that circle. Petrol pumps are numbered to
(both inclusive). You have two pieces of information corresponding to each of the petrol pump: (1)
the amount of petrol that particular petrol pump will give, and (2) the distance from that petrol pump to the next petrol pump.
Initially, you have a tank of infinite capacity carrying no petrol. You can start the tour at any of the petrol pumps. Calculate the first point from where the truck will be able to complete the circle. Consider that the truck will stop at each of the petrol pumps. The truck will move one kilometer for each litre of the petrol.
Input Format
The first line will contain the value of .
The next lines will contain a pair of integers each, i.e. the amount of petrol that petrol pump will give and the distance between that petrol pump and the next petrol pump.

Constraints:
  Output Format
An integer which will be the smallest index of the petrol pump from which we can start the tour.
*/

function letsGo(pumps, pumpCount, current, petrolAvailable) {
  console.log(pumpCount, petrolAvailable);
  if (pumpCount === pumps.length) {
    return true;
  }
  const index = current === pumps.length ? 0 : current;
  const [petrol, distance] = pumps[index];
  const remainingPetrol = petrolAvailable + petrol - distance;
  console.log(index, pumps[index], remainingPetrol);
  if (remainingPetrol < 0) return false;
  return letsGo(pumps, pumpCount + 1, index + 1, remainingPetrol);
}

function truckTour1(petrolpumps) {
  // Write your code here
  console.log("Pumps", petrolpumps);
  let pumpCount = 0;
  for (let i = 0; i < petrolpumps.length; i++) {
    console.log("starting at pump", i);
    if (letsGo(petrolpumps, pumpCount, i, 0)) {
      return i;
    }
  }
}

// like someone said - Problem only needs you to see smallest index from which you can reach the end, not loop in a circle
// so my logic was wrong and also it didn't work in some scenarios

function truckTour(petrolpumps) {
  let run = 0;
  return petrolpumps.reduce((start, pump, position) => {
    run += pump[0] - pump[1];
    console.log(start, pump, position, run);
    if (run < 0) {
      run = 0;
      start = position + 1;
    }
    return start;
  }, 0);
}

console.log(
  "Solution",
  truckTour([
    [1, 5],
    [10, 3],
    [3, 4],
  ])
);
