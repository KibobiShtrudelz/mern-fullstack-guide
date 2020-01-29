import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Lord Slatina",
      image: "https://placeimg.com/400/300/any",
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
