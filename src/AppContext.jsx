import { createContext, useState } from "react";

// Create the context
export const AppContext = createContext();

// Create a provider component
const AppProvider = ({ children }) => {
    const [stateCart, updateCart] = useState([]);
    const [checkOut, isCheckOut] = useState();
    let setCart = (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCart(cart)
    }
    let getCart = () => {
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    }
    let cart = getCart()
    
    return (
        <AppContext.Provider value={{ cart, setCart, checkOut, isCheckOut }}>
            {children}
        </AppContext.Provider>
    );
};
export default AppProvider