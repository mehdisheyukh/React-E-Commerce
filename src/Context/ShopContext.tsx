import React, { createContext, useState, ReactNode } from "react";
import all_product from "../Components/Assets/all_product";

interface ShopContextValue {
  all_product?: {
    id: number;
    name: string;
    category: string;
    image: any;
    new_price: number;
    old_price: number;
  }[];
  cartItems?: Record<number, number>;
  addToCart?: (itemId: number) => void;
  removeFromCart?: (itemId: number) => void;
  getTotalCartAmount?: () => number;
  getTotalCartItems?: () => number;
}

interface ShopContextProviderProps {
  children: ReactNode;
}

export const ShopContext = createContext<ShopContextValue | null>(null);


const getDefaultCart = (): Record<number, number> => {
  let cart: Record<number, number> = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider: React.FC<ShopContextProviderProps> = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = (): number => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = all_product.find((product) => product.id === Number(item));
        if (itemInfo !== undefined) {
            totalAmount += itemInfo.new_price * cartItems[item];
          }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = (): number => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue: ShopContextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );

};

export default ShopContextProvider;
