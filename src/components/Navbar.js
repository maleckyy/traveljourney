import './navbar.css'


import { FaGlobeEurope } from 'react-icons/fa'
export default function Navbar(){
    return (
        <nav>
            <FaGlobeEurope class='globe'/>
            <p>my travel journal.</p>
        </nav>
    )
}