import Proptypes from "prop-types"
const CartItem = ({ name, qty, price, total }) => {
    return (
        <div>{name} {qty} {price}  {total}</div>
    )
}
CartItem.propTypes = {
    name: Proptypes.string.isRequired,
    qty: Proptypes.number.isRequired,
    price: Proptypes.number.isRequired,
    total: Proptypes.number.isRequired
}
export default CartItem