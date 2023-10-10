import React, { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./main.css";
import { Context } from "../../App";
function Main() {
  const [data, SetData] = useState([]);
  const [heart, setHeart] = useState(Array(20).fill(false));
  const [view, setView] = useState(Array(20).fill(false));

  const [products, setProducts, searchResults, setSearchResults] =
    useContext(Context);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => SetData(json));
  // }, []);

  function handleHeart(index) {
    const nextHeart = heart.map((eachHeart, i) => {
      if (i === index) {
        return !eachHeart;
      } else {
        return eachHeart;
      }
    });
    setHeart(nextHeart);
  }
  function handleView(index) {
    const nextView = view.map((eachView, i) => {
      if (i === index) {
        return !eachView;
      } else {
        return false;
      }
    });
    setView(nextView);
  }
  console.log(data);
  return (
    <div className="wrapper">
      {products[0] &&
        products.map((item, i) => {
          return (
            <div style={{ display: "flex", flexDirection: "column" }} key={i}>
              <div className="heart-container">
                <FontAwesomeIcon
                  className="heart"
                  icon={faHeart}
                  style={{ color: heart[i] ? "#FF0000 " : "#fbc1c4" }}
                  onClick={() => {
                    handleHeart(i);
                  }}
                />
              </div>
              <div className="container">
                <div
                  className="image-div"
                  onMouseEnter={(e) => {
                    handleView(i);
                  }}
                  onMouseLeave={(e) => {
                    handleView(i);
                  }}
                >
                  <img src={`${item.image}`}></img>
                  {view[i] && <div className="view">View Product</div>}
                </div>
                <div className="description">
                  <p>{item.title}</p>
                  <p> ₹ {item.price}</p>
                  <p>
                    {item.rating.rate} ({item.rating.count})
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Main;
