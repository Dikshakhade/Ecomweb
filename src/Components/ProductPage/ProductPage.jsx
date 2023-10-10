import React from "react";
import { Context } from "../../App";
import Product from "../Product.jsx/Product";
import { useContext } from "react";
import "./productpage.css";
function ProductPage() {
  const [
    products,
    setProducts,
    searchResults,
    setSearchResults,
    category,
    item,
    setItem,
  ] = useContext(Context);

  let result;
  if (searchResults.length) {
    result = searchResults.map((product) => (
      <Product key={product.id} product={product} />
    ));
  }

  const content = result ? result : <h1>No Matching Product</h1>;

  return <div className="product-container">{content}</div>;
}

export default ProductPage;
