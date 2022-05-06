import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <main className="bkg1">
      <Routes>
      <Route path="/react-giordano" element={<ItemListContainer greeting="Bienvenidos a Lenceria YeiMax!"/>} />
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
      </main>
    </div>
  );

}

export default App;
