import React from "react";
import MomCarCard from "./MomCarCard";
import MomsCarForm from "./MomsCarForm";
import "../Container.css";


function MomsCarCollection({ momsCar, setMomsCar, onDeleteMomCar }) {
  const displayMomCar = momsCar.map((momCar) => {
    return (
      <MomCarCard
        momCar={momCar}
        key={momCar.id}
        onDeleteMomCar={onDeleteMomCar}
        setMomsCar= {setMomsCar}
      />
    );
  });

  return (
    <div className="car-container">
      <MomsCarForm setMomsCar={setMomsCar} car={momsCar} />
      {displayMomCar}
    </div>
  );
}

export default MomsCarCollection;
