import React from 'react'
import ItemList from '../../components/Item/ItemList';
import "./ItemListContainer.styles.css";
import { useState, useEffect } from 'react';
import {getProducts} from '../../services/getData';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();


  useEffect(() =>{
    setLoading(true);
    getProducts (categoryId)
    .then(res => {
      setProducts(res);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => setLoading(false));
  }, [categoryId]);


  return (
    <> <div className="landing">
    <h1>{greeting}</h1>
  </div> {loading ? <h1>Cargando...</h1> :
    <ItemList products={products} /> }
    </>
  )
}

export default ItemListContainer