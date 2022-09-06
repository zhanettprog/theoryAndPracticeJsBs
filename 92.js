const userProfile = {
  name: "Zhanett",
  commentsQty: 31,
  hasSignedAgreement: false,
};

const userInfo = ({ name, commentsQty }) => {
  if (!commentsQty) {
    return `User ${name} has no comments`;
  }
  return `User ${name} has ${commentsQty} comments`;
};

console.log(userInfo(userProfile));
