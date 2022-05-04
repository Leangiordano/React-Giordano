import React from 'react'
import ItemList from '../Item/ItemList';
import "./ItemListContainer.styles.css";
import { useState, useEffect } from 'react';
import {getProducts} from '../../services/getData';

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);

  useEffect(() =>{
    getProducts
    .then((response) => setProducts(response))
    .catch((error) => console.log("Error: " , error))
  }, []);


  return (
    <><div className="landing">
      <h1>{greeting}</h1>
    </div>
    <ItemList products={products} />
    </>
  )
}

export default ItemListContainer