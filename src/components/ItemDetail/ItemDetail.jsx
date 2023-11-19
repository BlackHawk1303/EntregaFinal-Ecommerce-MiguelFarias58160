import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import classes from './ItemDetail.module.css';
import { useCart } from "../../context/CartContext";
import { useNotification } from "../../notify/NotifyContext";

const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
const [count, setCount] = useState(initial);

const increment = () => {
    if (count < stock) {
    setCount(count + 1);
    }
};

const decrement = () => {
    if (count > 1) {
    setCount(count - 1);
    }
};

return (
    <div className={classes.cardDiv}>
    <p>{count}</p>
    <button type="button" className="btn btn-primary" style={{ marginRight: '10px' }} onClick={decrement}>-</button>
    <button type="button" className="btn btn-outline-primary" onClick={() => onAdd(count)}>Añadir al Carrito</button>
    <button type="button" className="btn btn-primary" style={{ marginLeft: '10px' }} onClick={increment}>+</button>
    </div>
);
}

const ItemDetail = ({ id, name, category, img, price, stock, description }) => {
const [inputType] = useState('button');
const ItemCount = inputType === 'button' ? ButtonCount : null;

const { addItem, isInCart } = useCart();
const { setNotification } = useNotification();
const navigate = useNavigate();

const handleOnAdd = (quantity) => {
    const productToAdd = {
    id,
    name,
    price,
    quantity,
    img
    };

    addItem(productToAdd);
    setNotification('error', `Se agregaron ${quantity} ${name}`);
}

return (
    
    <article className={classes.classCard}>
        <header>
            <h2 className={classes.cardTitle}>{name}</h2>
        </header>
        <picture>
            <img src={img} alt={name} style={{ width: 250, display: 'block', margin: '0 auto' }} />
        </picture>
        <section className={classes.cardInfo}>
            <p>Categoria: {category}</p>
            <p className={classes.cardDescription}>Descripción: {description}</p>
            <p className={classes.cardPrice}>Precio: {price}</p>
        </section>
        <section className={classes.cardInfo}>
            {isInCart(id) ? (
            <button className={classes.finallyButton} onClick={() => navigate('/cart')}>Finalizar Compra</button>
            ) : (
            <ItemCount stock={stock} onAdd={handleOnAdd} />
            )}
        </section>        
    </article>
);
} 


export default ItemDetail;
