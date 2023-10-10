import Main from "./Components/Main/Main";
import { getProducts } from "./api/axios";
import { createContext, useState, useEffect } from "react";
import Search from "./Components/Search/Search";
import SideBar from "./Components/SideBar/SideBar";

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

  return (
    <Context.Provider
      value={[products, setProducts, searchResults, setSearchResults]}
    >
      <div className="App">
        <Search />
        <div style={{ display: "flex" }}>
          <SideBar />
          <Main />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
