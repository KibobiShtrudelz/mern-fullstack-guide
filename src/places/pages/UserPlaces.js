import React from "react";
import { useParams } from "react-router-dom";

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
    imageUrl: "https://img.memecdn.com/dafuq_o_1443929.jpg",
    address: "u vas",
    location: {
      lat: 74.444,
      lng: -47.777
    },
    creator: "u2"
  }
];

const UserPlaces = props => {
  const { userId } = useParams();
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
