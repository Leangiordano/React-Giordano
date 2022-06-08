import { Fragment, useState } from "react";
import { useCartContext } from "../../CartContext/CartContextProvider";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

import "./Checkout.styles.css";

const Checkout = () => {
  const { cartList, totalPrice, emptyCart } = useCartContext();
  const [isLoading, setIsLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const [buyer, setBuyer] = useState({
    Nombre: '',
    Email: '',
    Telefono: '',
  });

  const { Nombre, Email, Telefono } = buyer;

  const handleInputChange = (e) => {
    setBuyer(({
      ...buyer,
      [e.target.name]:e.target.value,
    }));
  };


  const generateOrder = async (data) => {
    setIsLoading(true);
    try {
      const db = getFirestore();
      const orderCollection = collection(db, "Orders");
      const order = await addDoc(orderCollection, data);
      setOrderId(order.id);
      emptyCart();
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const items = cartList.map(e=> {return {id:e.id,title:e.title,price:e.price,quantity:e.quantity}})
    const day = new Date();
    const total = totalPrice();
    const data = {buyer, items, day, total};

    generateOrder(data);
  };

  return (
    <div className="checkout">
      {isLoading ? (
        <div className="spinner-container">
          
        </div>
      ) : (
        !orderId && (
          <Fragment>
            <h1>Finalizando Compra</h1>
            <div className="checkout-form__container">
              <h3>Completar Datos:</h3>

              <form className="checkout-form" onSubmit={handleSubmit}>
                <input
                  className="checkout-form__input"
                  type="text"
                  name="Nombre"
                  placeholder="Nombre"
                  value={Nombre}
                  onChange={handleInputChange}
                  required
                />
                <input
                  className="checkout-form__input"
                  type="email"
                  name="Email"
                  placeholder="Email"
                  value={Email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  className="checkout-form__input"
                  type="number"
                  name="Telefono"
                  placeholder="Telefono"
                  value={Telefono}
                  onChange={handleInputChange}
                  required
                />
                <input
                  className="btn-util"
                  type="submit"
                  value="Finalizar Compra"
                />
              </form>
            </div>
          </Fragment>
        )
      )
    }
    {orderId && (
        <div className="checkout-finished">
          <h1>Compra finalizada con éxito</h1>
          <span className="checkout-finished__code">
            <b>Código de compra:</b> {`${orderId}`}
          </span>
          <button className="btn-util">
            <Link to={"/"}>Volver al Inicio</Link>
          </button>
        </div>
      )}
    </div>
  )}

export default Checkout;
