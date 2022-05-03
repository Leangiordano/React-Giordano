import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <body className="bkg1">
      <main>
        <ItemListContainer greeting="Bienvenidos a Lenceria YeiMax" />

      </main>
      </body>
    </div>
  );

}

export default App;
