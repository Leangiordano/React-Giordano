import {useState} from "react";
import {Button} from "react-bootstrap";

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);

        const onIncrease = () => {
            const newValue = count + 1
            if(newValue <= stock) {
                setCount(newValue)
            }
        };

        const onDecrease = () => {
            const newValue = count - 1
            if(newValue >=  initial) {
                setCount(newValue)
            }
        };


    return (
        /*aca agregue el w-50 en el primer div. En el segundo agregue justify content.*/
        <div className="d-flex flex-column w-50">
        <div className="d-flex mt-3 justify-content-center">
            <Button variant="primary" onClick={onDecrease} className="px-3 mx-3"> - </Button> {" "}

            <h3 className="px-3 mx-3">{count}</h3>

            <Button variant="primary" onClick={onIncrease} className="px-3 mx-3"> + </Button> {" "}
        </div>
        <Button variant="danger" onClick={() => onAdd(count)} className="mt-3 mb-3 w-auto"> Agregar al Carrito </Button> {" "}
        </div>
    )
}

export default ItemCount