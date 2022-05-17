import React from "react";
import { GrCart } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../CartContext/CartContextProvider";
import "./CartWidget.styles.css";

const CartWidget = () => {
    const {totalCount} = useCartContext()
    return (
        <NavLink to="/Cart">
        <div className="navbar__cart">
            <GrCart className="navbar__cart-icon" />
            <span className="navbar__cart-count">{totalCount()}</span>
        </div>
        </NavLink>
    );
};

export default CartWidget;