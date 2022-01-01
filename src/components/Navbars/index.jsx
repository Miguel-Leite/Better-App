import { NavLink } from 'react-router-dom'
import './styles.css'


export const Menu = () => {
    return (
        <nav className='__menu-page'>
            <a className='__brand'> Better App </a>
            <ul className='__ul-menu'>
                <li>
                    <NavLink to='/' > Home </NavLink>
                </li>
                <li>
                    <NavLink to='/' > About </NavLink>
                </li>
                <li>
                    <NavLink to='/' > Courses </NavLink>
                </li>
                <li>
                    <NavLink to='/' > Contact </NavLink>
                </li>
            </ul>
        </nav>
    )
}
