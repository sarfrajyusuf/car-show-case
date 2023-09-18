"use client";
import { useState } from "react";
import { SearchManufacturer } from ".";

const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState("");
  //searBar
  const handleSearch = () => {};

  return (
    <form onSubmit={handleSearch} className="searchbar">
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
