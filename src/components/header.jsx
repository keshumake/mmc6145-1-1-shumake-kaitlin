import { Link } from 'react-router-dom'

export default function Header() {
    return(
        <header>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
        </header>
    )
}