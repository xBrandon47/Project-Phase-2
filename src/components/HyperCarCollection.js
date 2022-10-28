import React from "react";
import HyperCard from "./HyperCard";
import HyperCarForm from "./HyperCarForm";
import "../Container.css";


function HyperCarCollection({ hyperCar, setHyperCar, onDeleteHyperCar }) {
  const displayHyperCar = hyperCar.map((hyper) => {
    return (
      <HyperCard
        hyper={hyper}
        key={hyper.id}
        onDeleteHyperCar={onDeleteHyperCar}
      />
    );
  });

  return (
    <div className="car-container">
      <HyperCarForm setHyperCar={setHyperCar} car={hyperCar} />
      {displayHyperCar}
    </div>
  );
}

export default HyperCarCollection;
