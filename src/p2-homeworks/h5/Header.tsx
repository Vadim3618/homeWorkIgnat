import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import "./pages/HW5.css"

export function Header() {
    const [menuActive, setMenuActive] = useState(false)
    return (
      <>
          <span onClick={() => setMenuActive(!menuActive)}>
          {!menuActive &&
            <img className={'imgBurger'} src="https://samurai.it-incubator.by/static/media/burgerOpen.12f6bc84.svg"/>}
              {menuActive && <img className={'imgBurger'} src="https://samurai.it-incubator.by/static/media/burgerClose.ed3e982e.svg"/>}
          </span>
          <div className={menuActive ? "navBar active" : "navBar"}>

              <span><NavLink className={({isActive}) => isActive ? "active" : "navBarItem"}
                             to={'/PreJunior'}>PreJunior</NavLink></span>

              <span><NavLink className={({isActive}) => isActive ? "active" : "navBarItem"}
                             to={'/Junior'}>Junior</NavLink></span>

              <span><NavLink className={({isActive}) => isActive ? "active" : "navBarItem"}
                             to={'/JuniorPlus'}>JuniorPlus</NavLink></span>
          </div>
      </>
    )
}


