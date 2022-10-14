import { createContext, useState } from "react";
import { Route, Routes } from "react-router";
import Header from "./components/Header";
import NotFoundBlock from "./components/NotFoundBlock";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import "./scss/app.scss";

export const SearchContext = createContext('');

function App() {
  const [searchValue,setSearchValue] = useState('')
  return (
    <div className="wrapper">
   <SearchContext.Provider value={{searchValue,setSearchValue}}>
   <Header/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFoundBlock />} />
        </Routes>
      </div>
   </SearchContext.Provider>
    </div>
  );
}

export default App;
