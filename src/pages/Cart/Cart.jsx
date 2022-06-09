import { useCartContext } from "../../CartContext/CartContextProvider";
import CartItem from "../../components/CartItem/CartItem";
import { Link } from 'react-router-dom';

const Cart = () => {

    const {cartList, emptyCart, totalPrice} = useCartContext()

    return (
        <div>
            {cartList.map((item) => (
            <CartItem key={item.id} item={item} />
            ))}
            {cartList.length > 0 ? (
                <>
                <br />
                    <h1>Precio Total: ${totalPrice()}</h1>

                    <button className="btn-dark" onClick={() => emptyCart()}>Vaciar Carrito</button>
                    <button className="btn-warning">
              <Link to={"/checkout"}>Finalizar Compra</Link>
            </button>
                </>
            ) : (
                <h1>El carrito está vacío</h1>
            )}
            <br />
            <br />
            <Link to='/'>Volver a la tienda </Link>
    </div>
    );
}

export default Cart;