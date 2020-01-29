import React from "react";

import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";
import "./UsersList.css";

const UsersList = props => {
  if (!props.items.length) {
    return (
      <div className="center">
        <Card>
          <h2>No users found</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map(({ id, name, image, places }) => (
        <UserItem
          id={id}
          key={id}
          name={name}
          image={image}
          placeCount={places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
