import Item from "./Item";
import {Row} from "react-bootstrap";

const ItemList = ({ products }) => {
    console.log("products en ItemList", products)
    return (
        <>
        <Row xs={1} md={2} lg={4} className="g-4">
        { products.map((product =>{
        /*    console.log(product)*/
            return (
                <Item key={product.id} {...product} />
                // <Item key={product.id} title={product.title} price={product.price}  />
            )
        }))}
        </Row>
        </>
    );
};

export default ItemList;