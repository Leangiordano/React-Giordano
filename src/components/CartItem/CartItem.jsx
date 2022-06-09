import React from 'react';
import { useCartContext } from '../../CartContext/CartContextProvider';

const CartItem = ({item}) => {
    const {image, title} = item;
    const { deleteById, removeOneUnit } = useCartContext()
    return (
        <div>
            <h1>{item.title}</h1>
            <img className="w-25" src= {image} alt= {title} />
            <h4>Unidades: {item.quantity}</h4>
            <h4>Precio unitario: ${item.price}</h4>
            <button className="btn-primary m-2" onClick={() => removeOneUnit(item.id)}>Eliminar 1</button>
            <button className="btn-primary" onClick={() => deleteById(item.id)}>Eliminar todos</button>
        </div>
    );
};

export default CartItem;