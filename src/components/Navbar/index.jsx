import React from 'react'
import styles from './navbar.module.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
      <Link to='/'>
        <img src="https://cdn-icons-png.flaticon.com/512/388/388850.png" alt="icono" className={styles.icon} />
        </Link>
      </div>
      <ul className={styles.ul}>
        <Link to='/productos'>
        <li className={styles.li}>Productos</li>
        </Link>
        <Link to='/productos'>
        <li className={styles.li}>
          <img className={styles.cart} src="img/shopping-cart.png" alt="icon" />
        </li>
        </Link>

      </ul>
    </nav>
  )
}

export default Navbar;
