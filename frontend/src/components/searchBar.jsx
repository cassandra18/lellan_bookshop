import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "../css/searchBar.css";

const SearchBar = ({ setResults }) => {
  const [state, setState] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results)
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  const handleChange = (value) => {
    setState(value);
    fetchData(value);
  };
  return (
    <div className="search-wrapper">
      <FaSearch className="searchIcon" />
      <input
        placeholder="Searching for..."
        className="input-field"
        value={state}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
