import './Nav.scss'

import {NavLink} from "react-router-dom"
import { useState } from 'react';

import forum from '../../assets/icons/forum.svg'
import home from '../../assets/icons/home.svg'
import play from '../../assets/icons/play.svg'
import stats from '../../assets/icons/stats.svg'
import watch from "../../assets/icons/watch.svg"


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
        <NavLink  onClick={()=>handleClick("watch")}  to="/watch-live">
            <img src={watch} alt='watch'  className={active==="watch" ? 'header__icon': ''} ></img>
        </NavLink>
        <NavLink onClick={()=>handleClick("forum")}>
            <img src={forum} alt='forum' className={active==="forum" ? 'header__icon': ''} ></img>
        </NavLink>
        <NavLink onClick={()=>handleClick("play")}>
            <img src={play} alt='play' className={active==="play" ? 'header__icon': ''} ></img>
        </NavLink>
    </div>
  )
}

export default Header