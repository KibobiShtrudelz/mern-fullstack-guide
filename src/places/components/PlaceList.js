import React from "react";

import PlaceItem from "./PlaceItem";
import Card from "../../shared/components/UIElements/Card";
import "./PlaceList.css";

const PlaceList = ({ items }) => {
  if (!items.length) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found. Maybe create one?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {items.map(
        ({ id, title, creator, address, imageUrl, location, description }) => (
          <PlaceItem
            id={id}
            key={id}
            title={title}
            image={imageUrl}
            address={address}
            creatorId={creator}
            coordinates={location}
            description={description}
          />
        )
      )}
    </ul>
  );
};

export default PlaceList;
