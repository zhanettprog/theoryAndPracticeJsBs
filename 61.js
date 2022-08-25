const buttonInfo = {
  text: "Buy",
  color: "yellow",
  size: {
    width: 500,
    height: 600,
  },
};

const buttonStyle = {
  color: "red",
  width: 200,
  height: 300,
  size: {
    width: 700,
    height: 800,
  },
};

const button = {
  ...buttonInfo,
  ...buttonStyle,
};

console.table(button);
