const myObject = {
  x: -50,
  y: true,
  z: "zxc",
};

Object.keys(myObject).forEach((key) => {
  console.log(key, myObject[key]);
});
