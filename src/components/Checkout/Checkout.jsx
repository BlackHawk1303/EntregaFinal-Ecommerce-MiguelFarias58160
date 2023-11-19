import { useState } from "react"
import { useCart } from "../../context/CartContext"
import { getDocs, collection, query, where, documentId, writeBatch, addDoc } from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig"
import classes from './Checkout.module.css';
import './Checkout.module.css';
import ContactForm from "../ContactForm/ContactForm"

const Checkout = () => {
    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useCart()

    const createOrder = async (userData) => {
        try {
            setLoading(true)

            const objOrder = {
                buyer: {
                    name: userData.name,
                    email: userData.email,
                    phone: userData.fono
                },
                items: cart,
                total
            }
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = query(collection(db, 'products'), where(documentId(),'in',ids))
                                        
            const { docs } = await getDocs(productsRef)
    
            docs.forEach(async documentSnapshot => {
                const fields = documentSnapshot.data()
                const stockDb = fields.stock
    
                const productAddedToCart = cart.find(prod => prod.id === documentSnapshot.id)
                const prodQuantity = productAddedToCart.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(documentSnapshot.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: documentSnapshot.id, ...fields })
                }
    
                if(outOfStock.length === 0) {
                    const ordersRef = collection(db, 'orders')
    
                    const { id } = await addDoc(ordersRef, objOrder)
                    batch.commit()
                    clearCart()
                    setOrderId(id)
                    console.log(`El id de su Orden de Compra es ${id}`)
                } else {
                    console.log('No Existe Stock de este Item')
                }
            })
        } catch (error) {
            console.error('Error al Generar Orden de Compra', error);
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Generando Orden de Compra...</h1>
    }

    if(orderId) {
        return <div className={classes.container}><div className={classes.cardID}><h1>El ID de Orden es: {orderId}</h1></div></div>
    }

    return (
        <>
        <div className={classes.card}>
        <div className={classes.cardInfo}>
            <h1 className={classes.cardTitle}>Checkout</h1>
            <hr className={classes.divider} />
            <h2 className={classes.cardDescription}>Formulario para Compra</h2>
            <ContactForm onCreate={createOrder}/>
            </div>
            </div>
        </>
    )
}

export default Checkout