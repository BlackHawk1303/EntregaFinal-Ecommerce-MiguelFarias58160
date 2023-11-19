import cart from "./assets/Cart34.png"
import { Link } from 'react-router-dom';
import './CartWidget.module.css'
import { useCart } from '../../context/CartContext'

const CartWidget = () => {
    const { totalQuantity } = useCart()
    return (
        <Link to="/cart">
        <button className="btn btn-info cart-buttom">
            <img src={cart} alt="Cart Icon" className="cart-icon"/>
            <span className="cart-count">Carrito: </span>
            {totalQuantity}
        </button>
        </Link>
    )
}

export default CartWidget