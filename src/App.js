import "./App.css";
import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import DummyMeals from "./components/Meals/DummyMeals";
import MealSummary from "./components/Meals/MealSummary";

function App() {
  const [showCart, setShowCart] = useState(false);

  const cartShow = (state) => {
    setShowCart(state);
  };
  return (
    <div className="App">
      {showCart && <Cart />}
      {!showCart && (
        <>
          <Header showCart={cartShow} />
          <MealSummary />
          <DummyMeals />
        </>
      )}
    </div>
  );
}

export default App;
