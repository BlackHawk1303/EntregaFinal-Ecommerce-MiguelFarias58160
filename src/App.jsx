import './App.css'
//import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { NotificationProvider } from './notify/NotifyContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <>
    <NotificationProvider>
        <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Todos los Proyectos/Productos/Servicios.'}/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Filtro por Categoria.'}/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/checkout' element={<Checkout />}/>
          </Routes>     
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
      <Footer />
    </>
  )
}

export default App