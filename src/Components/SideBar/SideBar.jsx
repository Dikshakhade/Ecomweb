import React, { useContext, useState } from "react";
import "./sidebar.css";
import { Context } from "../../App";
function SideBar({ filterItems, setItem }) {
  const [products, setProducts, searchResults, setSearchResults, category] =
    useContext(Context);

  return (
    <div className="sidebar">
      <div className="categories">
        <p>Category</p>

        {category.map((cat, i) => {
          return (
            <div className="each-input" key={i}>
              <input
                type="checkbox"
                onChange={() => {
                  filterItems(cat);
                }}
              />
              <label>{cat} </label>{" "}
            </div>
          );
        })}
        <button onClick={() => setItem([])}>Remove</button>
      </div>
    </div>
  );
}

export default SideBar;
