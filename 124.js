const myArray = [-6, 2, 11];
console.log(myArray);

const newArray = myArray.map((el) => {
  return el * 3;
});

console.log(newArray);

console.log(myArray);
