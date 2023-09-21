import React from "react";
import './SearchBar.scss';
import { HiLocationMarker } from "react-icons/hi";

const SearchBar = ({ filter, setFilter }) => {
  return (
    <div className="search">
      <HiLocationMarker color="var(--blue)" size={50} className="search__icon" />
      <input
        placeholder="Search by title/city/country..."
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="search__input"
      />
      <button className="search__button">Search</button>
    </div>
  );
};

export default SearchBar;
