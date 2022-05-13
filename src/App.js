import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer"
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import CartContextProvider from "./CartContext/CartContextProvider";


function App() {
  return (
    <div>
      <CartContextProvider>
      <NavBar />
      <main className="bkg1">
      <Routes>
      <Route path="/react-giordano" element={<ItemListContainer greeting="Bienvenidos a Lenceria YeiMax!"/>} />
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
      </main>
      </CartContextProvider>
    </div>
  );

}

export default App;
