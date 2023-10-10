import React, { useContext, useState } from "react";
import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../App";

function Search() {
  const [term, setTerm] = useState();
  const [products, setProducts, searchResults, setSearchResults] =
    useContext(Context);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(products);

    const resultsArray = products.filter(
      (product) =>
        product.title.includes(e.target.value) ||
        product.category.includes(e.target.value)
    );

    setSearchResults(resultsArray);
  };
  return (
    <div>
      <form onSubmit={submitHandler} className="search">
        <input
          value={term}
          onChange={handleSearchChange}
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
        />
        <button type="submit" className="searchButton">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  );
}

export default Search;
