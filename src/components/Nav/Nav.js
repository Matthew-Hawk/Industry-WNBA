import './Nav.scss'

import {NavLink} from "react-router-dom"
import { useState } from 'react';

import home from '../../assets/icons/home.svg'
import stats from '../../assets/icons/stats.svg'
import watch from "../../assets/icons/watch.svg"
import play from '../../assets/icons/play.svg'
import Shop from '../../assets/icons/Shop.svg'


function Header() {
    const [active, setActive] = useState("home");

    function handleClick (clicked) {
        setActive(clicked);
    }

  return (
    <div className='header'>
        <NavLink onClick={()=>handleClick("home")} to='/'>
            <img src={home}  alt='home' className={active==="home" ? 'header__icon': ''}></img>
        </NavLink>
        <NavLink  onClick={()=>handleClick("stats")} to='/stats'>
            <img src={stats} alt='status' className={active==="stats" ? 'header__icon': ''}></img>        
        </NavLink>
        <NavLink  onClick={()=>handleClick("watch")}  to="/watch">
            <img src={watch} alt='watch'  className={active==="watch" ? 'header__icon': ''} ></img>
        </NavLink>
        <NavLink onClick={()=>handleClick("play")} to="/play">
            <img src={play} alt='play' className={`play ${active==="play" ? 'header__icon': ''}`} ></img>
        </NavLink>
        <NavLink onClick={()=>handleClick("shop")} to="/store">
            <img src={Shop} alt='shop' className={active==="shop" ? 'header__icon': ''} ></img>
        </NavLink>
    </div>
  )
}

export default Header