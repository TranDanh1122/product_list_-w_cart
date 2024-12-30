import { useState } from "react";
import PropTypes from "prop-types"
const Product = ({ name, image, category, price }) => {
    let [addToCart, isAdd] = useState(false)
    console.log(addToCart);
    
    return (
        <div className="w-[calc(33.33%-1rem)] ">
            <img src={image} alt={name} className={`w-full h-full object-cover ${addToCart ? 'border-2 border-solid border-red' : ''}`} />
            {(addToCart)
                ?
                <div className="relative translate-y-[-50%]">
                    <span className=" w-5 h-5 border-white border-solid border-2 rounded-[50%] absolute top-[calc(50%-10px)] left-4 flex items-center justify-center">
                        <i className="block w-[10px] h-[2px] bg-white " style={{ mask: "url('./assets/images/icon-decrement-quantity.svg') center / cover no-repeat", WebkitMask: "url('./assets/images/icon-decrement-quantity.svg') center / cover no-repeat" }}></i>
                    </span>
                    <input type="text" className="w-full py-3 px-12 bg-red text-4-bold text-white outline-none border-none text-center" />
                    <span className=" w-5 h-5 border-white border-solid border-2 rounded-[50%] absolute top-[calc(50%-10px)]  right-4 flex items-center justify-center">
                        <i className="block w-[10px] h-[10px] bg-white " style={{ mask: "url('./assets/images/icon-increment-quantity.svg') center / cover no-repeat", WebkitMask: "url('./assets/images/icon-increment-quantity.svg') center / cover no-repeat" }}></i>
                    </span>
                </div>
                :
                <button onClick={isAdd(!addToCart)} className="w-1/2 bg-white text-4-bold border-[1px] border-solid border-rose400 flex flex-nowrap items-center justify-center gap-2"><i className="block w-5 h-5 bg-red absolute top-[50%] left-6" style={{ mask: "url('./assets/images/icon-add-to-cart.svg') center / cover no-repeat", WebkitMask: "url('./assets/images/icon-add-to-cart.svg') center / cover no-repeat" }}></i>
                    Add To Card</button>
            }
            {name} {image} , {category}, {price}
        </div>
    )
}
Product.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
export default Product