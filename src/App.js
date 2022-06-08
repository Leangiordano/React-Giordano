import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import { Route, Routes, HashRouter } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import CartContextProvider from "./CartContext/CartContextProvider";


function App() {
  return (
    <div>
      <CartContextProvider>
      <HashRouter>
      <NavBar />
      <main className="bkg1">
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenidos a Lenceria YeiMax!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Bienvenidos a Lenceria YeiMax!" />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
      </main>      
      </HashRouter>
      </CartContextProvider>
    </div>
  );

}

export default App;
