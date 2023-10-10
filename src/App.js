import Main from "./Components/Main/Main";
import { getProducts } from "./api/axios";
import { createContext, useState, useEffect } from "react";
import Search from "./Components/Search/Search";
import SideBar from "./Components/SideBar/SideBar";
import ProductPage from "./Components/ProductPage/ProductPage";
import FilteredProduct from "./Components/FiteredProduct/FilteredProduct";

export const Context = createContext();
function App() {
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [item, setItem] = useState([]);

  useEffect(() => {
    getProducts().then((json) => {
      setProducts(json);
      setSearchResults(json);
    });
  }, []);

  const category = [...new Set(products.map((product) => product.category))];

  const filterItems = (cat) => {
    const newItems = products.filter((product) => product.category === cat);
    console.log(newItems);
    setItem(newItems);
  };

  const initialState = [
    products,
    setProducts,
    searchResults,
    setSearchResults,
    category,
    item,
    setItem,
  ];
  return (
    <Context.Provider value={initialState}>
      <div className="App">
        <Search />
        <div style={{ display: "flex" }}>
          <SideBar filterItems={filterItems} setItem={setItem} />
          {item.length ? <FilteredProduct /> : <ProductPage />}
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
