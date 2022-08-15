const person = {
  name: "Bob",
  age: 21,
};

const person2 = { ...person };

person2.name = "Alice";
person2.isAdult = true;

console.log(person.name);
console.log(person2.name);

console.log(person2);
