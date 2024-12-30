import { createContext, useState } from "react";

// Create the context
export const AppContext = createContext();

// Create a provider component
const AppProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [checkOut, isCheckOut] = useState();
    return (
        <AppContext.Provider value={{ cart, setCart, checkOut, isCheckOut }}>
            {children}
        </AppContext.Provider>
    );
};
export default AppProvider