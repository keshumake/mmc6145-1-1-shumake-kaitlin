import { Routes, Link } from 'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import Contact from '../pages/contact'
import styles from '../styles/header.module.css'


export default function Header() {
    return(
        <header className={styles.headermain}>
            <Link to="">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </header>
    )
}