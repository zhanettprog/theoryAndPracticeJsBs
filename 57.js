const button = {
  width: 200,
  text: "Buy",
  color: "blue",
};

const redButton = {
  color: "red",
  ...button,
};

console.table(redButton);
