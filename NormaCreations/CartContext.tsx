import React, { createContext, useState, ReactNode } from "react";
import { ImageSourcePropType } from "react-native";
import { Product } from "./Screens/ShopPage/types";
export class Item {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public imageLink: ImageSourcePropType,
    public price: number,
    public quantity: number = 1
  ) {}
}

interface CartContextState {
  cartItems: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (item: Item) => void;
  updateItemQuantity: (item: Item) => void;
  getTotal: () => number
}

export const CartContext = createContext<CartContextState>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateItemQuantity: () => {},
  getTotal: () => 0,
});

type ProviderProps = {
  children: ReactNode;
};
export const CartProvider: React.FC<ProviderProps> = (props) => {
  const [cartItems, setCartItems] = useState<Item[]>([]);

  const addToCart = (item: Product) => {
    let itemPresent = false;
    cartItems.forEach((element) => {
      if (element.id === item.id) {
        itemPresent = true;
        console.log("item already here");
        return;
      }
    });
    itemPresent
      ? updateItemQuantity(item, 1)
      : setCartItems([
          ...cartItems,
          new Item(item.id, item.title, item.content, item.imageLink[0], item.price),
        ]);
  };

  const removeFromCart = (item: Item) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index >= 0) {
      const newCartItems = [...cartItems];
      newCartItems.splice(index, 1);
      setCartItems(newCartItems);
    }
  };

  const updateItemQuantity = (item: Product | Item, quantity: number) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    const newCartItems = [...cartItems];
    newCartItems[index].quantity += quantity;
    newCartItems[index].quantity > 0
      ? setCartItems(newCartItems)
      : removeFromCart(newCartItems[index]);
  };

  const getTotal = () => 
    cartItems.reduce((accumulator,current)=> {
        return accumulator + (current.price * current.quantity)
    },0)
  

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateItemQuantity,
    getTotal,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};
