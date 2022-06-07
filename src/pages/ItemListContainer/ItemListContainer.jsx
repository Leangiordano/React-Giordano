import React from "react"
import ItemList from "../../components/Item/ItemList";
import "./ItemListContainer.styles.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { 
  collection, 
  getDocs, 
  getFirestore, 
  query,
  where,
 } from "firebase/firestore";

function getProducts (category) {
  const db = getFirestore();
  const itemCollection = collection(db, "items");
  const q = category
  ? query(itemCollection, where("category", "==", category))
  : query(itemCollection);

    return getDocs(q);
}    

function ItemListContainer ({ greeting }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProducts (categoryId)
    .then((snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => { 
          return { ...doc.data(), id: doc.id };
      })
    );
    console.log(
      snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      })
    );
    })
    .catch((error) => {
      console.log("error: ", error);
    })
    .finally(() => setLoading(false));
  }, [categoryId]);




  return (
    <> <div className="landing">
    <h1>Bienvenidos a Lencería YeiMax</h1>
  </div> {loading ? <h1>Cargando...</h1> :
    <ItemList products={products} /> }
    </>
  )
}

export default ItemListContainer