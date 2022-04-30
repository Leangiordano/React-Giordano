import React from 'react'
import ItemList from '../Item/ItemList';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemListContainer.styles.css";
import { useState, useEffect } from 'react';
import getData from '../../services/getData';

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);

  useEffect(() =>{
    getData
    .then((response) => setProducts(response))
    .catch((error) => console.log("Error: " , error))
  }, []);


  return (
    <><div className="landing">
      <h1>{greeting}</h1>
    </div>
    <ItemCount stock={10} initial={1} />
    <ItemList products={products} />
    </>
  )
}

export default ItemListContainer