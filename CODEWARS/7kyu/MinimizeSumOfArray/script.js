"use strict";

/*  

  Input >> Output Examples

    minSum({5,4,2,3})  
  Explanation:
  The minimum sum obtained from summing each two integers 
  product ,  5*2 + 3*4 = 22

*/

// -------FIRST TRY----------
// function minSum(arr) {
//   //  n(n-1) / 2 >>>> get the number of pair combination of set of number
//   let lenghtArr = arr.length;
//   let numberCombination = (lenghtArr * (lenghtArr - 1)) / 2;

//   // hacer la multiplicacion
//   let sum = 0;
//   for (let i = 0; i < numberCombination; i++) {
//     sum = sum + arr[i] * arr[arr.length - 1];

//     return sum;
//   }
// }

console.log(minSum([5, 4, 2, 3]));
console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6]));

// -------FIRST TRY----------

function minSum1(arr) {
  /* we need to multiply the mayor with the minor number
   with sort I can organise from minor to mayor */
  let addArr = arr.sort((a, b) => a - b);

  /* How arr.length is a EVEN number, we can say that the  number 
  of multiplication would be equal to the half part of the length */
  let numberOfmultiplication = arr.length / 2;

  let sum = 0;

  for (let i = 0; i < numberOfmultiplication; i++) {
    /*[ 1,2,3,4,5,6] >>>[i=0 , i=1, i=2, i=3, i=4, i=5] //length = 6.
    if 1*6 + 2*5 + 3*4 --> 2*5 it is (i=1)*(i=4)--> (i+1)*(length-2)=> (i=1)*(length-1-(i=1)     */
    sum = sum + arr[arr.length - 1 - i] * arr[i];
  }
  return sum;
}

console.log(minSum1([5, 4, 2, 3]));
console.log(minSum1([9, 2, 8, 7, 5, 4, 0, 6]));
