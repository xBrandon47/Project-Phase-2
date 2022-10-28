import React, { useState } from "react";
import "../Form.css";

function SportCarForm({ car, setSportCar }) {
  const [name, setName] = useState("");
  const [hp, setHP] = useState("");
  const [engine, setEngine] = useState("");
  const [topSpeed, setTopSpeed] = useState("");
  const [price, setPrice] = useState("");
  const [frontUrl, setFrontUrl] = useState("");
  const [backUrl, setBackUrl] = useState("");

  function handleSumbit(e) {
    e.preventDefault();

    fetch("http://localhost:3000/sportcars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        hp: hp,
        engine: engine,
        topSpeed: topSpeed,
        price: price,
        image: {
          front: frontUrl,
          back: backUrl,
        },
      }),
    })
      .then((r) => r.json())
      .then((newCar) => {
        setSportCar([...car, newCar]);
      });
    setName("");
    setHP("");
    setEngine("");
    setTopSpeed("");
    setPrice("");
    setFrontUrl("");
    setBackUrl("");
  }

  return (
    <div>
      <h3> Create a New Sport Car !</h3>
      <form onSubmit={handleSumbit} className= "formSport">
        <input
          className="box"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label>
          {" "}
          <h10> HP</h10>
          <input
            className="box"
            placeholder="Horse Power"
            name="hp"
            value={hp}
            onChange={(e) => setHP(e.target.value)}
          ></input>
        </label>
        <input
          className="box"
          placeholder="Engine"
          name="engine"
          value={engine}
          onChange={(e) => setEngine(e.target.value)}
        ></input>
        <label>
          {" "}
          <h10> Mph:</h10>
          <input
            className="box"
            placeholder="Top Speed"
            name="topSpeed"
            value={topSpeed}
            onChange={(e) => setTopSpeed(e.target.value)}
          ></input>
        </label>
        <label>
          {" "}
          <h10> $</h10>
          <input
            className="box"
            placeholder="Price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            prefix="$"
          ></input>
        </label>
        <input
          className="box"
          placeholder="Front Image URL"
          name="frontUrl"
          value={frontUrl}
          onChange={(e) => setFrontUrl(e.target.value)}
        ></input>
        <input
          className="box"
          placeholder="Back Image URL"
          name="backUrl"
          value={backUrl}
          onChange={(e) => setBackUrl(e.target.value)}
        ></input>
        <button className="btn-sport" type="submit">
          {" "}
          Add Car!
        </button>
      </form>
    </div>
  );
}

export default SportCarForm;
