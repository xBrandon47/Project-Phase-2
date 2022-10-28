import React, { useEffect, useState } from "react";
import SportCarCollection from "./SportCarCollection";
import SearchSportCar from "./SearchSportCar";

function SportCarPage() {
  const [sportCar, setSportCar] = useState([]);
  const [searchSportCar, setSearchSportCar] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/sportcars")
      .then((r) => r.json())
      .then((sportData) => {
        setSportCar(sportData);
      });
  }, []);

  const showsSportCar = sportCar.filter((sport) => {
    return sport.name.toLowerCase().includes(searchSportCar.toLowerCase());
  });

  function handleDeleteSportCar(sportCarDelete) {
    const updateSportCar = sportCar.filter(
      (car) => car.id !== sportCarDelete.id
    );
    setSportCar(updateSportCar);
  }

  return (
    <div>
      <br />
      <SearchSportCar
        searchSportCar={searchSportCar}
        onSearchChangeSport={setSearchSportCar}
      />
      <SportCarCollection
        sportCar={showsSportCar}
        onDeleteSportCar={handleDeleteSportCar}
        setSportCar={setSportCar}
      />
    </div>
  );
}

export default SportCarPage;
