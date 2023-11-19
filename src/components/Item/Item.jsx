import {Link, useNavigate } from "react-router-dom";
import classes from './Item.module.css';

const Item = ({ id, name, img, price }) => {

    const handleClick = (e) => {
        e.stopPropagation()
        console.log('Click en Item')
    }

    return (
        <div onClick={handleClick} className={classes.card}>
            <img src={img} alt={name} className={classes.cardImage} />
            <hr className={classes.divider} />
            <div className={classes.cardInfo}>
                <h3 className={classes.cardTitle}>{name}</h3>
                <p className={classes.cardPrice}>${price}</p>
                <hr className={classes.divider} />
                <Link to={`/item/${id}`} className={classes.cardLink}>Ver Detalle</Link>
            </div>
        </div>
    )
}

export default Item

