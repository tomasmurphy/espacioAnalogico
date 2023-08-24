import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TallerDetail } from './TallerDetail';
import Loader from '../Loader';
import { CartContext } from '../../context/CartContext';

const TallerDetailContent = (props) => {
    window.scrollTo(0, 0)
   
   

    const [itemDetail, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { idProducto } = useParams();

    // Obtiene el valor del arreglo items desde el contexto CartContext
    const { items } = useContext(CartContext);

    useEffect(() => {
        const foundItem = items.find(item => item.id === idProducto); // Busca el item correspondiente en el arreglo
        setItem(foundItem);
        setIsLoading(false);
    }, [idProducto, items]);

    return (
        <>
            {isLoading
                ? (<Loader></Loader>)
                : (
                    <div className='detalleTaller' >
                        <TallerDetail  itemDetail={itemDetail} />
                    </div>
                )
            }
        </>
    );
};

export default TallerDetailContent;
