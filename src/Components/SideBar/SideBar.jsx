import React from "react";
import "./sidebar.css";
function SideBar() {
  return (
    <div className="sidebar">
      <div className="categories">
        <p>Category</p>
        <div className="each-input">
          <input type="checkbox" />
          <label>Mens </label>{" "}
        </div>
        <div className="each-input">
          <input type="checkbox" />
          <label>Jwellery</label>{" "}
        </div>
        <div className="each-input">
          <input type="checkbox" />
          <label>Electronics</label>{" "}
        </div>
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
