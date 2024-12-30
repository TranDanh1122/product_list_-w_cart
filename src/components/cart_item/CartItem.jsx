import Proptypes from "prop-types"
import { AppContext } from "../../AppContext"
import { useContext } from "react"
const CartItem = ({ id, name, qty, price, total, thumbnail, isModel }) => {
    let { cart, setCart, checkOut } = useContext(AppContext)
    let removeItem = () => setCart([...cart.filter(item => item.id !== id)])
    return (
        <div className="border-b-[1px] border-solid border-rose100 flex items-center justify-start w-full">
            {(checkOut && isModel) ? <img src={thumbnail} alt={name} className="w-12 h-12 object-cover mr-2" /> : ''}
            <div className="flex flex-wrap gap-y-2 gap-2 py-4 ">
                <h4 className="text-4-bold w-full ">{name}</h4>
                <span className="text-4-bold text-red">{qty}x</span>
                <span className="text-4 text-rose500">@ ${price}</span>
                {(!checkOut && isModel) ? <span className="text-4-bold">${total}</span> : ''}
            </div>
            {(checkOut && isModel)
                ? <span className="text-4-bold ml-auto">${total}</span>
                :
                <div className="p-1 border-solid border-2 border-rose400 rounded-[50%] ml-auto" onClick={() => removeItem()}>
                    <i className="block w-[10px] h-[10px] bg-rose400" onClick={() => removeItem()} style={{ mask: "url(./assets/images/icon-remove-item.svg) center / cover no-repeat", WebkitMask: "url(./assets/images/icon-remove-item.svg) center / cover no-repeat" }}></i>
                </div>

            }

        </div>

    )
}
CartItem.propTypes = {
    id: Proptypes.number.isRequired,
    name: Proptypes.string.isRequired,
    qty: Proptypes.number.isRequired,
    price: Proptypes.number.isRequired,
    total: Proptypes.number.isRequired,
    thumbnail: Proptypes.string.isRequired
}
export default CartItem