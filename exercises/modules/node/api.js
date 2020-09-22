const { users, posts } = require("./data");
const getUserById = (id, cb) => {
  // simulate API call
  setTimeout(() => {
    const _user = users.find((user) => user.id === id);
    cb(_user);
  }, 150);
};

const getPostsForUser = (userId, cb) => {
  // simulate API call
  setTimeout(() => {
    const _posts = posts.filter((post) => post.createdBy === userId);
    cb(_posts);
  }, 150);
};

module.export = {
  getPostsForUser,
  getUserById,
};
