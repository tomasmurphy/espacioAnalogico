import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContent from './ItemDetailContent';
import Home from './Home'
import Show from './Show'
import NavMenu from './NavMenu';
import Nav from './Nav';
import { useLocation } from 'react-router-dom';
import Cart from './Cart';
import { CartProvider } from '../context/CartContext'; 
import Talleres from './Talleres';
import Actividades from './Actividades';

const Main = () => {
    const location = useLocation().pathname
    const [showCart, setShowCart] = useState(false);

    const handleCartModal = () => {
        setShowCart(!showCart);
    };

    return (
        <>
            {(location !== "/admin") ?
                <>  <CartProvider>
                    <Nav handleCartModal={handleCartModal} />
                    <NavMenu></NavMenu>
                    <Cart show={showCart} handleModal={handleCartModal}></Cart>
                    <div className="container-fluid sinBorde">
                        <Routes >
                            <Route path='/' element={<Home />} />
                            <Route  path='/categoria/:nombreCategoria' element={<ItemListContainer />} />
                            <Route path='/detalle/:idProducto' element={<ItemDetailContent handleCartModal={handleCartModal} />} />
                            <Route path='/talleres' element={<Talleres />} />
                            <Route path='/actividades' element={<Actividades />} />
                            <Route path='/admin' element={<Show />} />
                        </Routes>
                    </div>
                    </CartProvider>
                </>
                : <div className="container-fluid sinBorde">
                    <Routes >
                        <Route path='/' element={<Home />} />
                        <Route path='/admin' element={<Show />} />
                    </Routes>
                </div>}
        </>
    );
};

export default Main;
