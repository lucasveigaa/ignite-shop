import { createContext, PropsWithChildren, useState } from "react";
import { ProductType } from "../types";


interface CartContextType {
  cart: ProductType[],
  addToCart: (product: ProductType) => void;
  removeProductCart: (product: ProductType) => void;
}

export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: PropsWithChildren) {
  const [cart, setCart] = useState([])

  function addToCart(product: ProductType) {
    const filteredCart = cart.filter((item) => item.id !== product.id)

    setCart([...filteredCart, product])
  }

  function removeProductCart(product: ProductType) {
    const filteredCart = cart.filter((item) => item !== product);
    setCart(filteredCart);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeProductCart }}>
      {children}
    </CartContext.Provider>
  )
}