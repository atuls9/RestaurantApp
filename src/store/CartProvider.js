import React, { useState } from "react";
import CartContext from "./cartContext";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {
    const existingCartItemIndex = items.findIndex((el) => el.id === item.id);

    const existingCartItem = items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: +existingCartItem.amount + +item.amount,
      };
      updatedItems = [...items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = items.concat(item);
      console.log(updatedItems, "add");
    }
    setItems(updatedItems);
  };

  const removeItemFromCartHandler = (id) => {
    const existingItemIndex = items.findIndex((el) => el.id === id);
    const existingItem = items[existingItemIndex];
    console.log("existingCartItem", existingItem);
    let updatedItems;
    console.log("existing.amount outside", existingItem.amount);

    if (+existingItem.amount === 1) {
      console.log("existing.amount", existingItem.amount);
      updatedItems = items.filter((item) => {
        return item.id !== id && item.amount > 0;
      });
      console.log("updatedItems", updatedItems);
    } else {
      const updatedItem = {
        ...existingItem,
        amount: +existingItem.amount - 1,
      };
      updatedItems = [...items];
      updatedItems[existingItemIndex] = updatedItem;
    }
    setItems(updatedItems);
  };

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
