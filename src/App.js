import { NavBar } from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />

      <main>
        <ItemListContainer greeting="Bienvenidos a Lenceria Yei y Max" />
      </main>
    </div>
  );

}

export default App;
