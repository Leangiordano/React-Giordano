import React, { useEffect, useState } from 'react';
import {getProduct} from '../../services/getData';
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams ();

    useEffect(() => {
        getProduct(id)
            .then(res => {
                setData(res);
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, [id]);
    

    return (
        <div className='item-detail-container'>
           {loading ? <h1>Cargando...</h1> : <ItemDetail product={data} />}
        </div>
    );
}

export default ItemDetailContainer