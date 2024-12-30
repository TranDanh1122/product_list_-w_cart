import { useContext } from "react";
import { AppContext } from "../../AppContext";
import CartItem from "../cart_item/CartItem"
const Cart = () => {
    const { cart } = useContext(AppContext)
    const cartItems = Array.isArray(cart) ? cart : [];
    if (!cartItems) return (
        <div>
            <h2>Your Cart(0)</h2>
            <div>
                <img src="./assets/images/favicon-32x32.png" alt="" />
            </div>
        </div>
    )
    return (
        <div>
            <h2>Your Cart({cart.length ?? 0})</h2>
            <div>
                {cart.map((item, index) => <CartItem key={index} name={item.name} qty={item.qty} price={item.price} total={item.total} ></CartItem>)}
            </div>
            <div>
                <span>Order Total</span>
                <span>{cart.total}</span>
            </div>
            <span> <i style={{ mask: 'url("./assets/images/icon-carbon-neutral.svg") center / cover no-repeat', WebkitMask: 'url("./assets/images/icon-carbon-neutral.svg") center / cover no-repeat' }}></i>This is a carbon-neutral delivery</span>
        </div>
    )
}
export default Cart