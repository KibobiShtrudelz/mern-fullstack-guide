import React from "react";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Dafuq is this title?!?",
    description: "Dafuq is that description?!?",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb4yPO1JjdL1b5erO5wHKIDf8oTufeUdUohLtHaJ19lDtFoyAqvA&s",
    address: "u nas",
    location: {
      lat: 44.444,
      lng: 77.777
    },
    creator: "u1"
  },
  {
    id: "p2",
    title: "Dafuq is this SECOND title?!?",
    description: "Dafuq is that SECOND description?!?",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb4yPO1JjdL1b5erO5wHKIDf8oTufeUdUohLtHaJ19lDtFoyAqvA&s",
    address: "u vas",
    location: {
      lat: 74.444,
      lng: -47.777
    },
    creator: "u1"
  }
];

const UserPlaces = props => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
