import React from "react";
import { GrCart } from "react-icons/gr";
import "./CartWidget.styles.css";

function CartWidget() {
    return (
        <div className="navbar__cart">
            <GrCart className="navbar__cart-icon" />
            <span className="navbar__cart-count">0</span>
        </div>
    )
}

export default CartWidget;