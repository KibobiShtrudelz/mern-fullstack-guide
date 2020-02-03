import React from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {} from "../../shared/util/validators";

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
    address: "По света и у вас",
    location: {
      lat: 42.6731498,
      lng: 23.3634358
    },
    creator: "u2"
  }
];

const UpdatePlace = props => {
  const placeId = useParams().placeId;
  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    <form>
      <Input
        valid
        id="title"
        type="text"
        label="Title"
        element="input"
        validators={[]}
        onInput={() => {}}
        value={identifiedPlace.title}
        errorText="Please enter a valid title."
      />

      <Input
        valid
        type="text"
        validators={[]}
        id="description"
        element="textarea"
        onInput={() => {}}
        label="Description"
        value={identifiedPlace.description}
        errorText="Please enter a valid description (min. 5 characters)."
      />

      <Button type="submit" disabled>UPDATE PLACE</Button>
    </form>
  );
};

export default UpdatePlace;
