import { createContext, useState } from "react";

// Create the context
export const AppContext = createContext();

// Create a provider component
const AppProvider = ({ children }) => {
    const [cart, updateCart] = useState(() => {
        let cart = localStorage.getItem('cart')
        return cart ? JSON.parse(cart) : [];
    });
    const [checkOut, isCheckOut] = useState(false);
    let setCart = (cart) => {
        localStorage.setItem('cart', JSON.stringify(cart))
        updateCart(cart)
    }
    return (
        <AppContext.Provider value={{ cart, setCart, checkOut, isCheckOut }}>
            {children}
        </AppContext.Provider>
    )
}
export default AppProvider