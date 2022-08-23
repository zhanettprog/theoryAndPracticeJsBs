const button = {
  width: 200,
  text: "Buy",
  color: "blue",
};

const redButton = {
  ...button,
  color: "red",
};

console.table(redButton);
