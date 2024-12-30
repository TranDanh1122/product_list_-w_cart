import { useContext } from "react";
import { AppContext } from "../../AppContext";
import CartItem from "../cart_item/CartItem"
const Cart = () => {
    const { cart } = useContext(AppContext)
    if (!cart || !cart.length) return (
        <div className="bg-white rounded-md p-6 w-[calc(30%-1rem)] h-max tb:w-full mb:w-full">
            <h2 className="text-2 text-red">Your Cart(0)</h2>
            <div className="flex items-center justify-center w-full h-full flex-col mt-6">
                <img src="./assets/images/illustration-empty-cart.svg" alt="empty-cart" className="w-32 h-32 object-cover" />
                <span className="text-4-bold text-rose500">Your added items will appear here</span>
            </div>
        </div>
    )
    return (
        <div className="bg-white rounded-md p-6 w-[calc(30%-1rem)] h-max tb:w-full mb:w-full">
            <h2 className="text-2 text-red">Your Cart({cart.reduce((sum, item) => sum + parseInt(item.qty), 0)})</h2>
            <div className="flex flex-nowrap flex-col items-start justify-start">
                {cart.map((item, index) => <CartItem id={item.id} key={index} name={item.name} qty={parseFloat(item.qty)} price={parseFloat(item.price)} total={parseFloat(item.total)} ></CartItem>)}
            </div>
            <div className="flex flex-nowrap my-6 justify-between items-center ">
                <span className="text-4">Order Total</span>
                <span className="text-2">${cart.reduce((sum, item) => sum + parseFloat(item.total), 0)}</span>
            </div>
            <span className="text-4 flex gap-2 items-center justify-center py-4 w-full bg-rose50 mb-6 mb:flex-wrap">
                <i className="block w-5 h-5 bg-green" style={{ mask: 'url("./assets/images/icon-carbon-neutral.svg") center / cover no-repeat', WebkitMask: 'url("./assets/images/icon-carbon-neutral.svg") center / cover no-repeat' }}></i>
                This is a <span className="text-4-bold">carbon-neutral</span> delivery
            </span>
            <button className="text-3 w-full text-white bg-red py-4 rounded-3xl">Confirm Order</button>
        </div>
    )
}
export default Cart