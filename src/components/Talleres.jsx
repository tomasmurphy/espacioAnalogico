import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';
import Seo from './Head';
import { CartContext } from '../context/CartContext';

const Talleres = () => {
    window.scrollTo(0, 0)
    const { nombreCategoria } = useParams()
    const cartContext = useContext(CartContext);
    const {items} = cartContext

    const productosCategoria = nombreCategoria !== "todos" ?
        items.filter((p) => p.categoria === nombreCategoria) :
        items;

    return (
        <>
            <Seo
                title={"Tienda"}
                description={"Rollos, quimicos, revelado"}
                pathSlug={window.location.href}
            />
            <div className='item row'>
                <ItemList items={productosCategoria} />
            </div>
        </>
    );
};

export default Talleres;
