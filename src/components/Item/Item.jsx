const Item = ({ title, price, stock, image }) => {
    return (
        <>
            <h1>{title}</h1>
            <h2>${price}</h2>
            <h3>Stock: {stock} unidades</h3>
            <h3><img src={image} /></h3>
        </>
    );
};

export default Item;