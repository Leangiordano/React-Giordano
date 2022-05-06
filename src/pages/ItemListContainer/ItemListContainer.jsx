import React from 'react'
import ItemList from '../../components/Item/ItemList';
import "./ItemListContainer.styles.css";
import { useState, useEffect } from 'react';
import {getProducts} from '../../services/getData';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();


  useEffect(() =>{
    getProducts (categoryId)
    .then(res => {
      setProducts(res);
    })
    .catch(err => {
      console.log(err);
    });
  }, [categoryId]);


  return (
    <><div className="landing">
      <h1>{greeting}</h1>
    </div>
    <ItemList products={products} />
    </>
  )
}

export default ItemListContainer