import { NavLink } from 'react-router-dom'
import './header.css'

/**
 * Header component : Show header with connecting status
 *
 * @category Components
 * @component
 * @returns { React.Component } A React component
 */
export default function Header() {

   
    return <nav className="main-nav">
        <div className="title">
            <NavLink to='/'><h1>HRnet</h1> </NavLink>
        </div>
    </nav>
}