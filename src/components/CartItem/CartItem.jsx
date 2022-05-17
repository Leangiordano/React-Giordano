import React from 'react';
import { useCartContext } from '../../CartContext/CartContextProvider';

const CartItem = ({item}) => {
    const { deleteById, removeOneUnit } = useCartContext()
    return (
        <div>
            <h1>{item.title}</h1>
            <h4>Unidades: {item.quantity}</h4>
            <h4>Precio unitario: ${item.price}</h4>
            <button onClick={() => removeOneUnit(item.id)}>Eliminar 1</button>
            <button onClick={() => deleteById(item.id)}>Eliminar todos</button>
        </div>
    );
};

export default CartItem;