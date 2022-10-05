const myArray = [-10, 0, 13];
console.log(myArray);

const newArray = myArray.map((el) => {
  return el * 3;
});

console.log(newArray);

console.log(myArray);
