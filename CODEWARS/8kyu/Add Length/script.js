"use strict";

function addLength(str) {
  const array = str.split(" ");
  //   console.log(array)
  const map = array.map((x) => x + " " + x.length);
  //   console.log(map)
  return map;
}
