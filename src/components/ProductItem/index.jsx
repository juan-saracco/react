import React from 'react'
import { useParams } from 'react-router-dom';
import styles from './productItem.module.css'

const ProductItem = ({ productos }) => {
  const {id}= useParams()
  const producto = productos.find((producto)=> producto.id == id)

  return (
    <div className={styles.container}>
        <h4 className={styles.title}>{producto.title}</h4>
        <img className={styles.img} src={producto.image} alt="" />
        <p className={styles.price}>${producto.price}</p>
        <p className={styles.p}>{producto.description}</p>
    </div>
  )
}

export default ProductItem;
