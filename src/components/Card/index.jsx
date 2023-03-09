import React from 'react'
import { Link } from 'react-router-dom';
import styles from './card.module.css'

const Card = ({ producto }) => {
  return (
    <Link to={`${producto.id}`}>
    <div className={styles.container}>
        <h4 className={styles.title}>{producto.title}</h4>
        <img className={styles.img} src={producto.image} alt="" />
        <p className={styles.price}>${producto.price}</p>
    </div>
    </Link>
  );
};

export default Card;
