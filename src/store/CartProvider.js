import React, { useState } from "react";
import CartContext from "./cartContext";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {
    const existingCartItemIndex = items.findIndex((el) => el.id === item.id);
    console.log("existingItem", existingCartItemIndex);

    const existingCartItem = items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: +existingCartItem.amount + +item.amount,
      };
      console.log("updatedItem", updatedItem);
      updatedItems = [...items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = items.concat(item);
    }
    setItems(updatedItems);
    console.log("inside addItemtocarthandler ", cartContext);
  };
  const removeItemToCartHandler = (id) => {
    const existingCartItemIndex = items.findIndex((el) => el.id === id);
    const existingCartItem = items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem.amount === 1) {
      updatedItems = items.filter((item) => {
        return id !== item.id;
      });
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: +existingCartItem.amount - 1,
      };
      updatedItems = [...items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    setItems(updatedItems);
  };

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
