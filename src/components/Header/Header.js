import './Header.scss'
import {NavLink} from "react-router-dom"
import forum from '../../data/Icons/forum.svg'
import home from '../../data/Icons/home.svg'
import play from '../../data/Icons/play.svg'
import stats from '../../data/Icons/stats.svg'
import watch from "../../data/Icons/watch.svg"


function Header() {
  return (
    <div className='header'>
        <NavLink className='header__link'>
            <img src={home} className='header__icon'></img>
        </NavLink>
        <NavLink className='header__link'>
            <img src={stats} className='header__icon'></img>        
        </NavLink>
        <NavLink className='header__link'>
            <img src={watch} className='header__icon'></img>
        </NavLink>
        <NavLink className='header__link'>
            <img src={forum} className='header__icon'></img>
        </NavLink>
        <NavLink className='header__link'>
            <img src={play} className='header__icon'></img>
        </NavLink>
    </div>
  )
}

export default Header