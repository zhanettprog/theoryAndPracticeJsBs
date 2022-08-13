const myCity = {
  city: "New York",
};
myCity["popular"] = true;

console.log(myCity);

const countryProrertyName = "country";
myCity[countryProrertyName] = "USA";

console.log(myCity);

delete myCity[countryProrertyName];
console.log(myCity);
