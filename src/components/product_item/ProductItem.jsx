import { useState, useContext } from "react";
import PropTypes from "prop-types"
import { AppContext } from "../../AppContext.jsx"
const Product = ({ id, name, image, category, price, thumbnail }) => {
    let [addToCart, isAdd] = useState(false)
    let { cart, setCart } = useContext(AppContext)
    let [qty, setQty] = useState(() => cart.find(item => item.id == id)?.qty ?? 0)
    let timeout;
    let updateCart = (newItem, isRemove = false) => {
        if (isRemove) {
            setCart([...cart.filter(item => item.id !== id)])
            return true
        }
        let item = cart.findIndex(item => item.id == id)
        if (item == -1) {
            setCart([...cart.filter(item => item.id !== id), newItem])
            return true
        }
        setCart(cart.map(item => {
            if (item.id === id) return newItem
            return item
        }))
    }
    let triggerAddCart = () => {
        clearTimeout(timeout)
        timeout = setTimeout(() => { isAdd(!addToCart) }, 5000)
    }
    let handleChangeQty = (e) => {
        let value = parseInt(e.target.value)
        console.log(value);

        if (!value || isNaN(value) || value < 0) {
            setQty(0)
            triggerAddCart()
            updateCart({}, true)
            return false
        }
        setQty(value)
        if (value == 0) triggerAddCart()
        let item = cart.find(item => item.id == id)
        let total = value
        if (item) total += parseInt(item.qty)
        updateCart({ name: name, id: id, price: price, qty: total, total: price * total, thumbnail: thumbnail }, value == 0)
    }
    let handleIncDesc = (isDesc = false) => {
        let newQty = 0
        if (isDesc) {
            newQty = qty > 0 ? qty - 1 : 0
        } else {
            newQty = qty + 1
        }
        setQty(newQty)
        if (newQty == 0) triggerAddCart()

        updateCart({ name: name, id: id, price: price, qty: newQty, total: price * newQty, thumbnail: thumbnail }, newQty == 0)
    }

    return (
        <div className="w-[calc(33.33%-1rem)] mb:w-full ">
            <div className="overflow-hidden">
                <img loading="lazy" src={image} alt={name} className={`w-full h-full object-cover ${addToCart ? 'border-2 border-solid border-red' : ''}  hover:scale-150`} />
            </div>
            {(addToCart)
                ?
                <div className="relative translate-y-[-50%] w-1/2 mx-auto">
                    <span className=" w-5 h-5 border-white border-solid border-2 rounded-[50%] absolute top-[calc(50%-10px)] left-4 flex items-center justify-center" onClick={() => handleIncDesc(true)}>
                        <i className="block w-[10px] h-[2px] bg-white " style={{ mask: "url('./assets/images/icon-decrement-quantity.svg') center / cover no-repeat", WebkitMask: "url('./assets/images/icon-decrement-quantity.svg') center / cover no-repeat" }}></i>
                    </span>
                    <input type="text" name={`qty_${id}`} className="w-full py-3 px-12 bg-red text-4-bold text-white outline-none border-none text-center rounded-3xl" value={qty} onChange={handleChangeQty} />
                    <span className=" w-5 h-5 border-white border-solid border-2 rounded-[50%] absolute top-[calc(50%-10px)]  right-4 flex items-center justify-center" onClick={() => handleIncDesc()}>
                        <i className="block w-[10px] h-[10px] bg-white " style={{ mask: "url('./assets/images/icon-increment-quantity.svg') center / cover no-repeat", WebkitMask: "url('./assets/images/icon-increment-quantity.svg') center / cover no-repeat" }}></i>
                    </span>
                </div>
                :
                <button onClick={() => isAdd(!addToCart)} className="w-max mx-auto bg-white text-4-bold translate-y-[-50%] border-[1px] border-solid border-rose400 flex flex-nowrap items-center justify-center gap-2 py-3 px-7 rounded-3xl">
                    <i className="block w-5 h-5 bg-red" style={{ mask: "url('./assets/images/icon-add-to-cart.svg') center / cover no-repeat", WebkitMask: "url('./assets/images/icon-add-to-cart.svg') center / cover no-repeat" }}></i>
                    Add To Cart
                </button>
            }
            <span className="text-4 text-rose500 capitalize">{category}</span>
            <h3 className="text-3 mt-1">{name}</h3>
            <span className="mt-1 text-3 text-red">${price.toFixed(2)}</span>
        </div>
    )
}
Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired
}
export default Product