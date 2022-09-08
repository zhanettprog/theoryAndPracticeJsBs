const newPost = (post, addedAt = Date()) => ({
  ...post,
  addedAt,
});

const firstPost = {
  id: 1,
  author: "Zhanett",
};

newPost(firstPost);

const postFirst = newPost(firstPost);

console.log(postFirst);
