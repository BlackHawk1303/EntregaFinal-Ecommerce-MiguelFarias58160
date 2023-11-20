import {Link, useNavigate } from "react-router-dom";
import classes from './Item.module.css';

//Prueba
import prod1 from "../../assets/producto1.png"
import prod2 from "../../assets/producto2.png"
import proy1 from "../../assets/proyecto1.png"
import proy2 from "../../assets/proyecto2.png"
import proy3 from "../../assets/proyecto3.png"
//Prueba

//Intento cargar imagenes ya que no puedo visualizarlas en vercel
//Prueba
const cargarImg = (imagen) =>{
    let imagenItem = imagen.slice(4);
    imagenItem = "/src"+ imagenItem;
    if (imagenItem == prod1){
        return prod1;
    }
    if (imagenItem == prod2){
        return prod2;
    }
    if (imagenItem == proy1){
        return proy1;
    }
    if (imagenItem == proy2){
        return proy2;
    }
    if (imagenItem == proy3){
        return proy3;
    }

};
//Prueba

const Item = ({ id, name, img, price }) => {

    const handleClick = (e) => {
        e.stopPropagation()
        console.log('Click en Item')
    }

    return (
        <div onClick={handleClick} className={classes.card}>
            {/*<img src={img} alt={name} className={classes.cardImage} /> */}
            <img src={cargarImg(img)} alt={name} className={classes.cardImage} />

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

