import React from "react";

const SearchBar = ({onSearchChange}) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue br3"
        type="search"
        placeholder="Search For Robots"
        onChange={onSearchChange}
      />
    </div>
  );
};
export default SearchBar;
