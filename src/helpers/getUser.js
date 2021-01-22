const getUser = async () => {
  const getUserId = Math.floor(Math.random() * 10) + 1;

  const url = "https://jsonplaceholder.typicode.com/users/" + getUserId;
  const resp = await fetch(url);
  const user = await resp.json();

  return user;
};
export default getUser;
