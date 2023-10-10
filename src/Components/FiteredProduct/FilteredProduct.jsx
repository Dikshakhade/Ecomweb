import React from "react";
import Product from "../Product.jsx/Product";
import { useContext } from "react";
import { Context } from "../../App";
function FilteredProduct() {
  const [
    products,
    setProducts,
    searchResults,
    setSearchResults,
    category,
    item,
    setItem,
  ] = useContext(Context);
  const result = item.map((product) => (
    <Product key={product.id} product={product} />
  ));
  const content = result ? result : <h1>No Matching Product</h1>;
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {content}
    </div>
  );
}

export default FilteredProduct;
