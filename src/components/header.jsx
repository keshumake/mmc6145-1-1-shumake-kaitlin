import { Link } from 'react-router-dom'
import styles from '../styles/header.module.css'


export default function Header() {
    return(
        <header className={styles.headermain}>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
        </header>
    )
}