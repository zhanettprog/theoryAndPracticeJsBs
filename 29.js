const person = {
  name: "Bob",
  age: 21,
};

const person2 = Object.assign({}, person);

person2.age = 26;
person2.isAdult = true;

console.log(person.age);
console.log(person2.age);

console.log(person2);
