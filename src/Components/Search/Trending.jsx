import { useContext } from "react";
import "./trending.css";
import { Context } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export default function Trending({ onClose }) {
  const [
    products,
    setProducts,
    searchResults,
    setSearchResults,
    category,
    item,
    setItem,
  ] = useContext(Context);
  console.log(products.slice(0, 5));
  return (
    <div className="modal">
      <FontAwesomeIcon icon={faXmark} onClick={onClose} className="cancel" />
      <h1>Latest Trends</h1>
      <div className="modal-image">
        {products.slice(0, 3).map((product) => (
          <img src={`${product.image}`} />
        ))}
      </div>
      <h1>Popular Suggestions</h1>
      <div className="modal-title">
        {products.slice(0, 5).map((product) => (
          <p>{product.title}</p>
        ))}
      </div>
    </div>
  );
}
