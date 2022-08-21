import React from "react";
import { useParams } from "react-router-dom";
import places from "../data.json";

interface ITour {
  id: number;
  name: string;
  duration: string;
  rating: number;
  numberOfReviews: number;
  price: number;
  image: string;
}

interface IPlace {
  id: number;
  name: string;
  tours: ITour[];
}
const ChildPage = () => {
  const { pid, id } = useParams();
  const place = places.find((p: IPlace) => {
    return p.id === Number(pid);
  });
  let tour;
  if (place) {
    tour = place.tours.find((t: ITour) => {
      return t.id === Number(id);
    });
  }
  return (
    <div>
      <h1>{place && place.name}</h1>
      <h3>{tour && tour.name}</h3>
    </div>
  );
};

export default ChildPage;
