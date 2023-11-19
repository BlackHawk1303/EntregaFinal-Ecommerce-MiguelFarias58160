import { memo } from 'react'
import classes from './ItemListContainer.module.css';
import { useAsync } from '../../hooks/useAsync';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../services/firebase/firestore/products'

const MemoizedItemList = memo(ItemList)

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams()

    const asyncFunction = () => getProducts(categoryId)

    const { data: products, loading, error } = useAsync(asyncFunction, [categoryId])
    if (loading) {
        return <h1 className={`${classes.color} ${classes.container}`}>Cargando...</h1>;
    }

    if (error) {
        return <h1 className={`${classes.color} ${classes.container}`}>Error al cargar los Items.</h1>;
    }

    if (products.length === 0) {
        return <h1 className={`${classes.color} ${classes.container}`}>No Existen Items en esta Categoría.</h1>;
    }

    return (
        <div className={classes.container} onClick={() => console.log('Click en ItemListContainer')}>
            <h1 className={`${classes.color} ${classes.bigfont}`}>{greeting}</h1>
            <MemoizedItemList products={products}/>
        </div>
    );
};

export default ItemListContainer;