import React, { useEffect, useState } from 'react';
import {getProduct} from '../../services/getData';
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer() {
    const [data, setData] = useState({});

    useEffect(() => {
        getProduct
            .then(res => {
                setData(res);
            })
            .catch(err => {
                console.log(err);
                alert('Ocurrio un error, revisar la consola');
            });
    }, []);
    
    console.log(data);

    return (
        <div className='item-detail-container'>
            <ItemDetail title={data.title} description={data.description} price={data.price} image={data.image} category={data.category} />
        </div>
    );
}

export default ItemDetailContainer