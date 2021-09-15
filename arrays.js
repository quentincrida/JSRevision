"use strict";
const quentinArray = [
  "Quentin",
  "Crida",
  "Developer",
  2021 - 1971,
  ["Este", "Alex", "Tony", "Guido", "Kobus"],
  true,
];

const types = [];

for (let i = 0; i < quentinArray.length; i++) {
  //Reading fromquentinArray
  console.log(quentinArray[i], typeof quentinArray[i]);

  //Filling the types array
  types[i] = typeof quentinArray[i];
}

console.log(types);
