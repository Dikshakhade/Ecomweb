import React, { useContext } from "react";
import "./sidebar.css";
import { Context } from "../../App";
function SideBar() {
  const [products, setProducts, searchResults, setSearchResults, category] =
    useContext(Context);
  return (
    <div className="sidebar">
      <div className="categories">
        <p>Category</p>

        {category.map((cat, i) => {
          return (
            <div className="each-input" key={i}>
              <input type="checkbox" />
              <label>{cat} </label>{" "}
            </div>
          );
        })}
      </div>
      <div className="categories">
        <p>Price</p>
        <div className="each-input">
          <input type="checkbox" />
          <label>100-200</label>{" "}
        </div>
        <div className="each-input">
          <input type="checkbox" />
          <label>200 above</label>{" "}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
