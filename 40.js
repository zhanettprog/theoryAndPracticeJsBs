function myFn(a, b) {
  let c;
  a = a + 1;
  c = a + b;
  return c;
}

const test = myFn(10, 3);
console.log(test);
