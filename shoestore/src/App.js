import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import ProductHome from "./components/ProductHome";
import './App.css';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Products" element={<Products />}>
          <Route path="" element={<ProductHome />}></Route>
          <Route path=":ProductID" element={<ProductDetails />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

    </div>
  );
}

export default App;
