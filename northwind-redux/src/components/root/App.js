import React from "react";
import Navi from "../navi/Navi";
import { Container } from "reactstrap";
import Dashboard from "./Dashboard";
import { Route, Routes } from 'react-router-dom'
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";

function App() {
  return (
    <Container>
      <Navi />
      {/* Routing işlemi için Switch kullanıyoruz */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route exact path="/cart" element={<CartDetail />} />
        <Route exact path="/saveproduct/:productId" element={<AddOrUpdateProduct />} />
      </Routes>
    </Container>
  );
}

export default App;
