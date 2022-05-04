import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({data}) {
    return(
        <div>
            <ItemCount initial={0} stock={10} onAdd={() => {}} />
        </div>
    )
}

export default ItemDetail