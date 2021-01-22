const getPosts = async (userId) => {
  console.log(userId);
  const url = "https://jsonplaceholder.typicode.com/comments?postId=" + userId;
  const resp = await fetch(url);
  const posts = await resp.json();
  console.log(posts);
  return posts;
};
export default getPosts;
