const sumPositiveNumber = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return "One of the arguments is not a number";
  }

  if (a <= 0 || b <= 0) {
    return "Number are not positive";
  }

  return a + b;
};

const test3 = sumPositiveNumber(3, 8);

console.log(test3);
