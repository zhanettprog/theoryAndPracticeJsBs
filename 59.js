const buttonInfo = {
  text: "Buy",
  color: "yellow",
};

const buttonStyle = {
  color: "red",
  width: 200,
  height: 300,
};

const button = {
  ...buttonInfo,
  ...buttonStyle,
};

console.table(button);
