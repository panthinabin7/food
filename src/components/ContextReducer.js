import React, { createContext, useContext, useReducer } from "react";

const CartStateCotext = createContext(); // can change this state from any where
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          qty: action.qty,
          size: action.size,
          price: action.price,
          img: action.img,
        },
      ];
    case "REMOVE":
      let newArray = [...state];
      newArray.splice(action.index, 1);
      return newArray;

    case "UPDATE":
      let arr = [...state];
      arr.find((food, index) => {
        if (food.id === action.id) {
          console.log(
            food.qty,
            parseInt(action.qty),
            action.price + food.price
          );
          arr[index] = {
            ...food,
            qty: parseInt(action.qty) + food.qty,
            price: action.price + food.price,
          };
        }
        return arr;
      });
      return arr;

    default:
      console.log("error in reducer");
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []); //[] because starting our cart is empty array

  return (
    <div>
      <CartDispatchContext.Provider value={dispatch}>
        <CartStateCotext.Provider value={state}>
          {children}
        </CartStateCotext.Provider>
      </CartDispatchContext.Provider>
    </div>
  );
};

export default CartProvider;
export const useCart = () => useContext(CartStateCotext);
export const useDispatchCart = () => useContext(CartDispatchContext);
