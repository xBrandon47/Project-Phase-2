import React from "react";
import SportCarCard from "./SportCarCard";
import SportCarForm from "./SportCarForm";
import "../Container.css";

function SportCarCollection({ sportCar, setSportCar, onDeleteSportCar }) {
  const displaySportCar = sportCar.map((sport) => {
    return (
      <SportCarCard
        sport={sport}
        key={sport.id}
        onDeleteSportCar={onDeleteSportCar}
        setSportCar={setSportCar}
      />
    );
  });

  return (
    <div >
      <SportCarForm setSportCar={setSportCar} car={sportCar} />
      <div className= "car-container">
      {displaySportCar}
      </div>
    </div>
  );
}

export default SportCarCollection;
