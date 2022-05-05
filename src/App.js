import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

function App() {
  return (
    <div>
      <NavBar />
      <main className="bkg1">
       {/* <ItemListContainer greeting="Bienvenidos a Lenceria YeiMax" />  */}
        <ItemDetailContainer />
      </main>
    </div>
  );

}

export default App;
