import { Link } from "react-router-dom";
import React from 'react'

function Navbar() {
  return (
    <nav style={StyleSheet.navbar}>
        <ul style={StyleSheet.navList}>
            <li style={style.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
            <li style={style.navItem}><Link to="/" style={styles.navLink}>About</Link></li>
            <li style={style.navItem}><Link to="/" style={styles.navLink}>Services</Link></li>
            <li style={style.navItem}><Link to="/" style={styles.navLink}>Contact</Link></li>
        </ul>

    </nav>
  )
}

export default Navbar