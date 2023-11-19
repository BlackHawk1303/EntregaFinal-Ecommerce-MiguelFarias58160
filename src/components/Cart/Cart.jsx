import { Link } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import classes from './Cart.module.css';
import './Cart.module.css';

const Cart = () => {
    const { cart, removeItem } = useCart()

    const handleRemoveItem = (productId) => {removeItem(productId);
    };

    
    return (
        <div className={classes.card}>
            <h1 className={classes.cardTitle}>Carrito de Compra</h1>
            <hr className={classes.divider} />
            <div className={classes.cardDescription}>
                {
                    cart.map(prod => {
                        return (
                            <div key={prod.id}>
                                <h3 className={classes.cardItem}>{prod.name}</h3>
                                <img className={classes.cardImg} src={prod.img}/>
                                <button className={classes.removeItemButton} onClick={() => handleRemoveItem(prod.id)}>Eliminar Item</button>
                            </div>
                        )
                    })
                }
            </div>
            <hr className={classes.divider} />
            <button className={classes.checkoutButton}>
            <Link to='/checkout' className={classes.linkStyle}>Checkout</Link>
            </button>
            </div>
    )
}

export default Cart