import React, { useContext, useState } from "react";
import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../App";
import Trending from "./Trending";
import { createPortal } from "react-dom";

function Search() {
  const [
    products,
    setProducts,
    searchResults,
    setSearchResults,
    category,
    item,
    setItem,
  ] = useContext(Context);

  const [showModal, setShowModal] = useState(false);

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
          onChange={handleSearchChange}
          onClick={() => setShowModal(true)}
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
        />
        <button type="submit" className="searchButton">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        {showModal &&
          createPortal(
            <Trending onClose={() => setShowModal(false)} />,
            document.body
          )}
      </form>
    </div>
  );
}

export default Search;
