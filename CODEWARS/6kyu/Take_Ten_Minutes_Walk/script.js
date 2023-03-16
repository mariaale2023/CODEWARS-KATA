"use strict";

function isValidWalk(walk) {
  // How to get the count of each letter

  console.log(walk);
  console.log(walk.length);

  const numberN = walk.reduce((acc, letter) => {
    if (letter === "n") {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

  const numberW = walk.reduce((acc, letter) => {
    if (letter === "w") {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

  const numberS = walk.reduce((acc, letter) => {
    if (letter === "s") {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

  const numberE = walk.reduce((acc, letter) => {
    if (letter === "e") {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

  console.log(numberN);
  console.log(numberS);
  console.log(numberW);
  console.log(numberE);

  let validWalk =
    walk.length === 10 && numberN - numberS === 0 && numberW - numberE === 0
      ? true
      : false;
  return validWalk;

  // if (walk.length !== 10){
  //     return false
  //   } else if (numberN - numberS !== 0)
  //   {
  //     return false
  //   } else if (numberW - numberE !== 0)
  //   {
  //     return false
  //   }   else {
  //     return true
  //   }
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));

console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
);
console.log(isValidWalk(["w"]));
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));

const myArray = ["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"];

// How to get the count of each letter

// how to get the values from the object
