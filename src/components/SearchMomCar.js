import React from "react";
import "../Search.css"


function SearchMomCar({ searchMomCar, onSearchChangeMom }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Mom Cars:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => onSearchChangeMom(e.target.value)}
        value={searchMomCar}
      />
    </div>
  );
}
export default SearchMomCar;
