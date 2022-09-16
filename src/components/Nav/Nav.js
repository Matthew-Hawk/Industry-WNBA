import './Nav.scss'

import {NavLink} from "react-router-dom"
import { useState } from 'react';

import forum from '../../assets/icons/forum.svg'
import home from '../../assets/icons/home.svg'
import play from '../../assets/icons/play.svg'
import stats from '../../assets/icons/stats.svg'
import watch from "../../assets/icons/watch.svg"


function Header() {
    const [active, setActive] = useState(true)

    function handleClick (){
        active ? setActive(false) : setActive(true)
    //    showAnalytics ? setShowAnalytics(false) : setShowAnalytics(true);
    }

  return (
    <div className='header'>
        <NavLink onClick={handleClick} to='/'>
            <img src={home}  alt='home' className={active ? 'header__icon': ''}></img>
        </NavLink>
        <NavLink  onClick={handleClick} to='/stats'>
            <img src={stats} alt='status' className={active ? 'header__icon': ''}></img>        
        </NavLink>
        <NavLink  onClick={handleClick}  to="/watch-live">
            <img src={watch} alt='watch'   ></img>
        </NavLink>
        <NavLink >
            <img src={forum} alt='forum'  ></img>
        </NavLink>
        <NavLink >
            <img src={play} alt='play'  ></img>
        </NavLink>
    </div>
  )
}

export default Header