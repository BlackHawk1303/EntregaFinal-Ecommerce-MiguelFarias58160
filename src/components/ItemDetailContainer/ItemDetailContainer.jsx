import { useEffect, useState } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import classes from './ItemDetailContainer.module.css';
import './ItemDetailContainer.module.css';
import { getProductById } from "../../services/firebase/firestore/products"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [itemId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    if(!product) {
        return <h1>El Item no Existe</h1>
    }

    return (
        
        <div className={classes.cardContainer}>
            <main className={classes.cardInside}>
                <h1>Detalles</h1>
                <hr className={classes.divider} />
                <ItemDetail {...product}/>
            </main>
        </div>
    )
}   

export default ItemDetailContainer