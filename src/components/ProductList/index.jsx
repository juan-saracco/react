import React from 'react'
import Card from '../Card';
import styles from "./productList.module.css";


const ProductList = ({ productos }) => {
  return (
    <div className={styles.container}>      
      {productos.map((producto) => (
        <Card key={producto.id} producto={producto} />
      ))}
    </div>
  )
}

export default ProductList;
