import React from "react";
import { Context } from "../../App";
import Product from "../Product.jsx/Product";
import { useContext } from "react";

function ProductPage() {
  const [products, setProducts, searchResults, setSearchResults] =
    useContext(Context);

  const result = searchResults.map((product) => (
    <Product key={product.id} product={product} />
  ));

  const content = result.length ? result : <h1>No Matching Product</h1>;
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {content}
    </div>
  );
}

export default ProductPage;
