import React, { useState, useEffect, useCallback } from "react";
import getUser from "../helpers/getUser";
import getPosts from "../helpers/getPosts";

// const initialUser = {
//   name: "Edox",
//   email: "edox@gmail.com"
// };

// const initialPosts = [
//   { id: 1, title: "Post 1" },
//   { id: 2, title: "Post 1" }
// ];

const Fetchcard = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  const updateUser = () => {
    getUser().then((newUser) => {
      setUser(newUser);
      //console.log(newUser);
    });
  };

  const updatePost = useCallback(() => {
    getPosts(user.id).then((newPosts) => {
      setPosts(newPosts);
    });
  }, [user.id]);

  useEffect(() => {
    updateUser();
  }, []);

  useEffect(() => {
    if (user?.id) {
      updatePost();
    }
  }, [user]);

  return (
    <div>
      <button onClick={updateUser}>New User</button>
      <h1>{user.name} </h1>
      <h1>{user.email}</h1>
      <br />
      <h2>Post - user : {user.id}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fetchcard;
