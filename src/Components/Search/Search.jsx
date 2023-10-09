import React, { useState } from "react";
import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
function Search() {
  const [term, setTerm] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="search">
        <form onSubmit={submitHandler}>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type="text"
            className="searchTerm"
            placeholder="What are you looking for?"
          />
          <button type="submit" className="searchButton">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
