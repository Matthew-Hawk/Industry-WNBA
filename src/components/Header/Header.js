import './Header.scss'
import {NavLink} from "react-router-dom"

function Header() {
  return (
    <div className='header'>
        <NavLink className='header_link'>
            <img className='header_icon'>Icon</img>
        </NavLink>
        <NavLink className='header_link'>
            <img className='header_icon'>Icon</img>
        </NavLink>
        <NavLink className='header_link'>
            <img className='header_icon'>Icon</img>
        </NavLink>
        <NavLink className='header_link'>
            <img className='header_icon'>Icon</img>
        </NavLink>
        <NavLink className='header_link'>
            <img className='header_icon'>Icon</img>
        </NavLink>
    </div>
  )
}

export default Header