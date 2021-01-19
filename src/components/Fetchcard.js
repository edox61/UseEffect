import React, { useState } from "react";

const initialUser = {
  name: "Edox",
  email: "edox@gmail.com"
};
const Fetchcard = () => {
  const [user, setUser] = useState(initialUser);

  return (
    <div>
      <h1>{user.name} </h1>
      <h1>{user.email}</h1>
    </div>
  );
};

export default Fetchcard;
