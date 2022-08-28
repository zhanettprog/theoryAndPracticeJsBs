const newPost = (post, addedAt = Date()) => {
  const myPost = {
    ...post,
    addedAt,
  };
  return myPost;
};

const firstPost = {
  id: 1,
  author: "Zhanett",
};

newPost(firstPost);

console.log(newPost(firstPost));
