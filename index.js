function hasTargetSum(array, target) {
  // Write your algorithm here
  let numbers = new Set();
  for (let num of array) {
    let complement = target - num;
    if (numbers.has(complement)) {
      return true;
    }
    numbers.add(num);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  The time complexity is 0(n) where 'n' refers to number of elements in  array.
*/

/* 
  Add your pseudocode here
  - An empty set named 'numbers', stores the numbers iterated throught the array.
  - The 'complement' is the number we need to find in 'numbers' to form a pair that sums up to target.
  - 'has' checks if 'complement' exists in the numbers and if found, it sums up to target and returns true.
  - Once fully iterated without finding any pair, it returns false.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
