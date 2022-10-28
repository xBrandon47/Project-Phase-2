import React from "react";
import "../Search.css"


function SearchHyper({ searchHyperCar, onSearchChangeHyper }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Hyper Cars:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => onSearchChangeHyper(e.target.value)}
        value={searchHyperCar}
      />
    </div>
  );
}

export default SearchHyper;
