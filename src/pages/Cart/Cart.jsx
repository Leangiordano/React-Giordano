import { useCartContext } from "../../CartContext/CartContextProvider";
import CartItem from "../../components/CartItem/CartItem";

const Cart = () => {

    const {cartList, emptyCart, totalPrice} = useCartContext()

    return (
        <div>
            {cartList.map((item) => (
            <CartItem key={item.id} item={item} />
            ))}
            {cartList.length > 0 ? (
                <>
                    <button onClick={() => emptyCart()}>Vaciar Carrito</button>
                    <h1>Precio Total: ${totalPrice()}</h1>
                </>
            ) : (
                <h1>El carrito está vacío</h1>
            )}
    </div>
    );
}

export default Cart;