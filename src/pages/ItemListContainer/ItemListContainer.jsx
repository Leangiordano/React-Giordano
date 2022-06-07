import React from 'react'
import ItemList from '../../components/Item/ItemList';
import "./ItemListContainer.styles.css";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query } from 'firebase/firestore';

function getProducts (category) {
  const db = getFirestore();

    const itemCollection = collection(db, 'items');

    const q = query(
      itemCollection
    );

      return getDocs(q)

    }    

function ItemListContainer ({ greeting }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProducts (categoryId)
    .then(snapshot => {
      setProducts(snapshot.docs.map(doc => { 
        return { ...doc.data(), id: doc.id }
      }));
    })
    

    // getDocs(q)
      // .then(snapshot => {
        // console.log(snapshot.docs.map(doc => { 
          // setLoading(false);
          // return { ...doc.data(), id: doc.id }
        // }));
      // })
      // .catch(
        // err => console.error(err)
      // );
    .finally(() => setLoading(false));
  }, [categoryId]);


 // useEffect(() =>{
 //   setLoading(true);
 //   getProducts (categoryId)
 //   .then(res => {
 //     setProducts(res);
 //   })
 //   .catch(err => {
 //     console.log(err);
 //   })
 //   .finally(() => setLoading(false));
 // }, [categoryId]);


  return (
    <> <div className="landing">
    <h1>Bienvenidos a Lencería YeiMax</h1>
  </div> {loading ? <h1>Cargando...</h1> :
    <ItemList products={products} /> }
    </>
  )
}

export default ItemListContainer