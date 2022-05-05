import * as React from 'react';
import "./ItemDetail.styles.css";
import ItemCount from '../ItemCount/ItemCount';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function ItemDetail({ title, description, image, price, category}) {
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
                <ItemCount initial={0} stock={10} onAdd={() => {}} />
            </Card>
        </div>
    )
}

export default ItemDetail