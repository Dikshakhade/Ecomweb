import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./product.css";
import StarRating from "../StarRating/StarRating";
function Product({ product }) {
  const [heart, setHeart] = useState(false);
  const [view, setView] = useState(false);
  return (
    <div key={product.id} className="main-product-display">
      <div className="heart-container">
        <FontAwesomeIcon
          className="heart"
          icon={faHeart}
          style={{ color: heart ? "#FF0000 " : "#fbc1c4" }}
          onClick={() => {
            setHeart(!heart);
          }}
        />
      </div>
      <div className="container">
        <div
          className="image-div"
          onMouseEnter={(e) => {
            setView(true);
          }}
          onMouseLeave={(e) => {
            setView(false);
          }}
        >
          <img src={`${product.image}`}></img>
          {view && <div className="view">View Product</div>}
        </div>
        <div className="description">
          <p style={{ fontWeight: "bold" }}>{product.title}</p>
          <p style={{ color: "rgba(118, 8, 243)", fontSize: "1.2rem" }}>
            {" "}
            ₹ {product.price}
          </p>
          <p>
            <StarRating stars={product.rating.rate} /> ({product.rating.count})
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
