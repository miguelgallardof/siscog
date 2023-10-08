import React from 'react'
import s from './styles.module.scss'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
      <nav className={s.nav}>
        <h2>NavBar</h2>
        {/* <div>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/*">Error</a>
        </div> */}
        <div>
          <NavLink to={"/"} className={s.link} >
            Home
          </NavLink>
          <NavLink to={"/about"} className={s.link}>
            About
          </NavLink>
        </div>
      </nav>
    </>
  )
}


