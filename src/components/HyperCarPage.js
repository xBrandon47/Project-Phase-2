import React, { useEffect, useState } from "react";
import HyperCarCollection from "./HyperCarCollection";
import SearchHyper from "./SearchHyper";

function HyperCarPage() {
  const [hyperCar, setHyperCar] = useState([]);
  const [searchHyperCar, setSearchHyperCar] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/hypercars")
      .then((r) => r.json())
      .then((hyperData) => {
        setHyperCar(hyperData);
      });
  }, []);

  const showHyperCar = hyperCar.filter((hyper) => {
    return hyper.name.toLowerCase().includes(searchHyperCar.toLowerCase());
  });

  function handleDeleteHyperCar(hyperCarDelete) {
    const updateHyperCar = hyperCar.filter(
      (car) => car.id !== hyperCarDelete.id
    );
    setHyperCar(updateHyperCar);
  }

  return (
    <div>
      <br />
      <SearchHyper
        searchHyperCar={searchHyperCar}
        onSearchChangeHyper={setSearchHyperCar}
      />
      <HyperCarCollection
        hyperCar={showHyperCar}
        onDeleteHyperCar={handleDeleteHyperCar}
        setHyperCar={setHyperCar}
      />
    </div>
  );
}

export default HyperCarPage;
