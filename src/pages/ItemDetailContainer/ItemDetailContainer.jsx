import React, { useEffect, useState } from 'react';
import {getProduct} from '../../services/getData';
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
    const [data, setData] = useState({});
    const { id } = useParams ();

    useEffect(() => {
        getProduct(id)
            .then(res => {
                setData(res);
            })
            .catch(err => console.log(err))
    }, [id])
    

    return (
        <div className='item-detail-container'>
            <ItemDetail {...data} />
        </div>
    );
}

export default ItemDetailContainer