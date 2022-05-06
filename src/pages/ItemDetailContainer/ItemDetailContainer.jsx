import React, { useParams, useEffect, useState } from 'react';
import {getProduct} from '../../services/getData';
import ItemDetail from '../../components/ItemDetail/ItemDetail'

function ItemDetailContainer() {
    const [data, setData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getProduct(id)
            .then(res => {
                setData(res);
            })
            .catch(err => console.log(err))
    }, [id])
    

    return (
        <div className='item-detail-container'>
            <ItemDetail title={data.title} description={data.description} price={data.price} image={data.image} category={data.category} stock={data.stock} />
        </div>
    );
}

export default ItemDetailContainer