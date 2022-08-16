const person = {
  name: "Bob",
  age: 21,
  info: {
    sex: "men",
    city: "Los Angeles",
    country: "USA",
  },
};

const person2 = JSON.parse(JSON.stringify(person));

person2.name = "Mark";
person2.info.city = "New York";

console.log(person.info.city);
console.log(person2.info.city);

console.log(person);
console.log(person2);
