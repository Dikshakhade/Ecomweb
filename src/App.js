import Main from "./Components/Main/Main";
import { getProducts } from "./api/axios";
import { createContext, useState, useEffect } from "react";
import Search from "./Components/Search/Search";
import SideBar from "./Components/SideBar/SideBar";
import ProductPage from "./Components/ProductPage/ProductPage";

export const Context = createContext();
function App() {
  const [products, setProducts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getProducts().then((json) => {
      setProducts(json);
      setSearchResults(json);
    });
  }, []);

  const category = [...new Set(products.map((product) => product.category))];

  const initialState = [
    products,
    setProducts,
    searchResults,
    setSearchResults,
    category,
  ];
  return (
    <Context.Provider value={initialState}>
      <div className="App">
        <Search />
        <div style={{ display: "flex" }}>
          <SideBar />
          {/* <Main /> */}
          <ProductPage />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
