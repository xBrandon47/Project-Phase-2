import React, { useEffect, useState } from "react";
import MomsCarCollection from "./MomsCarCollection";
import SearchMomCar from "./SearchMomCar";

function MomsCarPage() {
  const [momsCar, setMomsCar] = useState([]);
  const [searchMomCar, setSearchMomCar] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/momcar")
      .then((r) => r.json())
      .then((momsData) => {
        setMomsCar(momsData);
      });
  }, []);

  const showMomCar = momsCar.filter((mom) => {
    return mom.name.toLowerCase().includes(searchMomCar.toLowerCase());
  });

  function handleDeleteMomCar(momCarDelete) {
    const updateMomCar = momsCar.filter((car) => car.id !== momCarDelete.id);
    setMomsCar(updateMomCar);
  }

  return (
    <div>
      <br />
      <SearchMomCar
        searchMomCar={searchMomCar}
        onSearchChangeMom={setSearchMomCar}
      />
      <MomsCarCollection
        momsCar={showMomCar}
        setMomsCar={setMomsCar}
        onDeleteMomCar={handleDeleteMomCar}
      />
    </div>
  );
}

export default MomsCarPage;
