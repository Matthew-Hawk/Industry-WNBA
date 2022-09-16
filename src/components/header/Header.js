import './Header.scss'
import {NavLink} from "react-router-dom"
import forum from '../../assets/icons/forum.svg'
import home from '../../assets/icons/home.svg'
import play from '../../assets/icons/play.svg'
import stats from '../../assets/icons/stats.svg'
import watch from "../../assets/icons/watch.svg"


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