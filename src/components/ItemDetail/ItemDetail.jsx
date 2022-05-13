import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import "./ItemDetail.styles.css";
import { useCartContext } from "../../CartContext/CartContextProvider";
import ItemCount from '../ItemCount/ItemCount';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function ItemDetail({ product }) {
    const {stock, title, description, image, price, category} = product;
    const [cantidadDeProductos, setCantidadDeProductos] = useState(null);
    const { addToCart, cartList } = useCartContext();
    console.log(cartList);

        function addHandler(quantityToAdd) {
            setCantidadDeProductos(quantityToAdd);
            addToCart(product, quantityToAdd);
        };
    return (
        <div>
            <Card align="center" elevation={13}>
                <CardHeader
                title={title}
                subheader={category}
                />
                <CardMedia className="img"
                    image={image}
                    alt="Boxer Model Tyrant Negro"
                />

                <CardContent align="center">   
                    <Typography variant="overline" color="secondary">
                        {description}
                    </Typography>
                    <Typography variant="h4" color="red">
                        ${price}
                    </Typography>
                </CardContent>
            {cantidadDeProductos ?
                <button><Link to='/cart'>Terminar compra ({ cantidadDeProductos } items)</Link></button> :
                <ItemCount initial={0} stock={stock} onAdd={addHandler} />
            }
            </Card>
        </div>
    )
}

export default ItemDetail