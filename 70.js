const newPost = (post, addedAt = Date()) => ({
  ...post,
  addedAt,
});

const firstPost = {
  id: 1,
  author: "Zhanett",
};

newPost(firstPost);

console.log(newPost(firstPost));
