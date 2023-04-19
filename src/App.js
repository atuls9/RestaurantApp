import "./App.css";
import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import DummyMeals from "./components/Meals/DummyMeals";
import MealSummary from "./components/Meals/MealSummary";
import { Modal } from "@mui/material";
import CartProvider from "./store/CartProvider";

function App() {
  const [openCart, setOpenCart] = useState(false);
  const handleClose = () => setOpenCart(false);

  return (
    <CartProvider>
      <Header setOpen={setOpenCart} />
      <MealSummary />
      <DummyMeals />
      <Modal open={openCart} onClose={handleClose}>
        <Cart setCloseCart={handleClose}> </Cart>
      </Modal>
    </CartProvider>
  );
}

export default App;
