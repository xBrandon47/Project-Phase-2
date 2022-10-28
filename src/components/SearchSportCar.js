import React from "react";
import "../Search.css"

function SearchSportCar({ searchSportCar, onSearchChangeSport }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Sport Cars:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => onSearchChangeSport(e.target.value)}
        value={searchSportCar}
      />
    </div>
  );
}

export default SearchSportCar;
