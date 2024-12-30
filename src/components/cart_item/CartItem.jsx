import Proptypes from "prop-types"
import { AppContext } from "../../AppContext"
import { useContext } from "react"
const CartItem = ({ id, name, qty, price, total }) => {
    let { cart, setCart } = useContext(AppContext)
    let removeItem = () => setCart([...cart.filter(item => item.id !== id)])
    return (
        <div className="border-b-[1px] border-solid border-rose100 flex items-center justify-between w-full">
            <div className="flex flex-wrap gap-y-2 gap-2 py-4 ">
                <h4 className="text-4-bold w-full ">{name}</h4>
                <span className="text-4-bold text-red">{qty}x</span>
                <span className="text-4 text-rose500">@ ${price}</span>
                <span className="text-4-bold">${total}</span>
            </div>
            <div className="p-1 border-solid border-2 border-rose400 rounded-[50%]" onClick={() => removeItem()}>
                <i className="block w-[10px] h-[10px] bg-rose400" onClick={() => removeItem()} style={{ mask: "url(./assets/images/icon-remove-item.svg) center / cover no-repeat", WebkitMask: "url(./assets/images/icon-remove-item.svg) center / cover no-repeat" }}></i>
            </div>
        </div>

    )
}
CartItem.propTypes = {
    id: Proptypes.number.isRequired,
    name: Proptypes.string.isRequired,
    qty: Proptypes.number.isRequired,
    price: Proptypes.number.isRequired,
    total: Proptypes.number.isRequired
}
export default CartItem