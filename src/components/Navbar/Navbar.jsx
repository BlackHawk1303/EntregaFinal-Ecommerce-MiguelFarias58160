import classes from './Navbar.module.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, useNavigate } from 'react-router-dom'

import {coderhouseLogo} from "./src/assets/logo-coderhouse.png"

const Navbar = () => {
    const navigate = useNavigate()

    return (
            <nav className={classes.container}>
            <h1 onClick={() => navigate('/')}><img className="logo" src={coderhouseLogo} alt="" /> Ecommerce</h1>
            {/* <h1 onClick={() => navigate('/')}><img className="logo" src="./src/assets/logo-coderhouse.png" alt="" /> Ecommerce</h1> */}
            <section className={classes.buttonSection}>
                <NavLink to='/category/proyectos' className={classes.button}>Proyectos</NavLink>
                <NavLink to='/category/servicios' className={classes.button}>Servicios</NavLink>
                <NavLink to='/category/productos' className={classes.button}>Productos</NavLink>
            </section>
            <CartWidget/>
            </nav>
    )
} 

export default Navbar


