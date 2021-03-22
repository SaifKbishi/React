import React from "react";
import "./searchBox.styles.css";
const SearchBox = ({ onSearchChange, placeholder, type }) => {
  return (
    <div>
      <input type={type} placeholder={placeholder} onChange={onSearchChange} />
    </div>
  );
};
export default SearchBox;
